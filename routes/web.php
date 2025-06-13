<?php

use App\Data\TemplateData;
use App\Http\Controllers\FormValidationController;
use App\Http\Controllers\FormValidationFontroller;
use App\Http\Controllers\SubmissionController;
use App\Http\Controllers\TemplateController;
use App\Http\Middleware\AllowIframe;
use App\Models\Organization;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;
use Illuminate\Http\Request;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', ValidateSessionWithWorkOS::class,])->group(function () {

    Route::get('dashboard', function () {
        return redirect(route('org.dashboard', Auth::user()->organizations->first()->slug));
    })->name('dashboard');

    Route::prefix('{slug}')->as('org.')->group(function () {

        Route::get('/dashboard', function ($slug) {
            Organization::where('slug', $slug)->firstOrFail();
            return Inertia::render('dashboard', [
            ]);
        })->name('dashboard');

        Route::resource('templates', TemplateController::class)
            ->except(['show', 'edit'])
            ->scoped(['template' => 'id'])
            ->names('templates');

        Route::get('templates/{template_slug}/edit', [TemplateController::class, 'edit'])
            ->name('templates.edit');

        Route::get('templates/{template_slug}', [TemplateController::class, 'show'])
            ->name('templates.show');

        Route::resource('submissions', SubmissionController::class)
            ->scoped(['submission' => 'id'])
            ->names('submissions');

    });

});

Route::get('view', function () {
    return Inertia::render('View/Page', []);
})->middleware([AllowIframe::class])
  ->name('view');

Route::post('/validate', [FormValidationController::class, 'validateForm'])
    ->name('validate');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

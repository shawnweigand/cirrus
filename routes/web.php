<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', ValidateSessionWithWorkOS::class,])->group(function () {

    Route::get('dashboard', function () {
        return redirect(route('org.dashboard', ['org' => Auth::user()->organizations->first()->slug]));
    })->name('dashboard');

    Route::prefix('{slug}')->group(function () {
        Route::get('/dashboard', function ($slug) {
            return Inertia::render('dashboard', [
            ]);
        })->name('org.dashboard');
    });

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

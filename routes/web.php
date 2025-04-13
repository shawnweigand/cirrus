<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

$orgs = [
    [
        'id' => 1,
        'name' => 'Organization 1',
        'slug' => 'org-1',
    ],
    [
        'id' => 2,
        'name' => 'Organization 2',
        'slug' => 'org-2',
    ],
    [
        'id' => 3,
        'name' => 'Organization 3',
        'slug' => 'org-3',
    ],
];

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', ValidateSessionWithWorkOS::class,])->group(function () use ($orgs) {

    Route::get('dashboard', function () use ($orgs) {
        return redirect(route('org.dashboard', ['org' => $orgs[0]['slug']]));
    })->name('dashboard');

    Route::prefix('{org}')->group(function () use ($orgs) {
        Route::get('/dashboard', function ($org) use ($orgs) {
            return Inertia::render('dashboard', [
                'org' => collect($orgs)->firstWhere('slug', $org),
            ]);
        })->name('org.dashboard');
    });

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

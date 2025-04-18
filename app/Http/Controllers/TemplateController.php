<?php

namespace App\Http\Controllers;

use App\Data\TemplateData;
use App\Enums\Template\TemplateCategoryEnum;
use App\Models\Organization;
use App\Models\Template;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $slug)
    {
        return Inertia::render('Template/Index/Page', [
            'templates' => fn () => TemplateData::collect(
                Organization::where('slug', $slug)->first()
                ?->templates
                ->where('is_active', true)
                ->unique('name')
                ->values()
            ),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Template $template)
    {
        return Inertia::render('Template/Show/Page', [
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Template $template)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Template $template)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Template $template)
    {
        //
    }
}

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
        $organization = Organization::where('slug', $slug)->firstOrFail();

        return Inertia::render('Template/Index/Page', [
            'templates' => fn () => TemplateData::collect(
                $organization->first()
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
    public function show(string $slug, string $template_slug)
    {
        $organization = Organization::where('slug', $slug)->firstOrFail();

        $templates = $organization
            ?->templates()
            ->where('slug', $template_slug)
            ->get();

        if ($templates->isEmpty()) {
            abort(404);
        }

        return Inertia::render('Template/Show/Page', [
            'templates' => fn () => TemplateData::collect(
                $templates
                ->values()
            ),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $slug, string $template_slug)
    {
        $organization = Organization::where('slug', $slug)->firstOrFail();

        $templates = $organization
            ?->templates()
            ->where('slug', $template_slug)
            ->get();

        if ($templates->isEmpty()) {
            abort(404);
        }

        return Inertia::render('Template/Edit/Page', [
            'templates' => fn () => TemplateData::collect(
                $templates
                ->values()
            ),
        ]);
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

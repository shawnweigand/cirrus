<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Models\Submission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SubmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(string $slug, Request $request)
    {
        Log::info($request->all());
        // $organization = Organization::where('slug', $slug)->firstOrFail();
        // $template = $organization->templates()
        //     ->where('slug', $request->input('template_slug'))
        //     ->where('version', $request->input('template_version'))
        //     ->firstOrFail();

        // $submission = Submission::create([
        //     'user_id' => $request->user()->id,
        //     'template_id' => $template->id,
        //     'values' => request()->all(),
        //     'status' => 'submitted',
        // ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Submission $submission)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Submission $submission)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Submission $submission)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Submission $submission)
    {
        //
    }
}

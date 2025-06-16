<?php

namespace App\Http\Controllers;

use App\Rules\ValidateFormData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FormValidationController extends Controller
{
    public function validateForm(Request $request)
    {
        $data = $request->input('data', []);
        $rules = $request->input('validation', []);
        // dd($data, $rules);

        $request->validate([
            'data' => ['required', 'array'],
            'validation' => ['required', 'array'],
        ]);

        foreach ($data as $key => $value) {
            Validator::make(
                [$key => $value],
                [$key => $rules[$key] ?? []]
            )->validate();
        }

        // return response()->json($request->all());

        // return response()->json(['success' => true, 'data' => $validated]);
    }
}

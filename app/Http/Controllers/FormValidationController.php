<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormValidationController extends Controller
{
    public function validateForm(Request $request)
    {
        $data = $request->input('data', []);
        $rules = $request->input('validation', []);
        dd($data, $rules);
        // Adjust rules as needed
        $validated = $request->validate([
            'field1' => 'required|string',
            'field2' => 'nullable|integer',
            // ...other fields
        ]);

        return response()->json(['success' => true, 'data' => $validated]);
    }
}

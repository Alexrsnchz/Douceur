<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreAllergenRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'alrgnName' => 'required|string|min:3|unique:allergens,alrgnName',
            'alrgnColor' => 'required|string|starts_with:#',
            'alrgnImg' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048'
        ];
    }

    /**
     * Envía una respuesta de error en formato JSON 
     * en caso de que la validación falle.
     */
    public function failedValidation(Validator $validator) {
        throw new HttpResponseException(response() -> json([
            'success' => false,
            'message' => 'Error: Ha habido un error en la validación',
            'data' => $validator -> errors()
        ]));
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateProductRequest extends FormRequest
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
            'prodName' => 'required|string|min:3|unique:products,name,'.$this -> id,
            'description' => 'required|string|min:10',
            'price' => 'required|numeric|min:10|max:1000',
            'availability' => 'required|in:Disponible,NoDisponible',
            'image' => 'required|image|mimes:jpg,jpeg,png,webp|max:2024',
            'category_id' => 'required|exists:categories,id'
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

<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
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
            'username' => 'required|string|min:3|max:12|unique:users,username,'.$this -> id,
            'password' => 'required|string|'.Password::min(8) -> mixedCase() -> letters() -> numbers() -> symbols(),
            'email' => 'required|email|unique:users,email,'.$this -> id,
            'address_id' => 'nullable|exists:addresses,id',
            'role' => 'required|in:Usuario,Admin'
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

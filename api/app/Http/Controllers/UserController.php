<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Almacena todos los usuarios obtenidos de la base de datos.
        $users = User::all();
        // Devuelve los usuarios en formato JSON.
        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        // Almacena el usuario creado con los campos validados.
        $user = User::create($request -> validated());
        // Devuelve el usuario creado en formato JSON.
        return new UserResource($user);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Almacena el usuario solicitado si encuentra la id especificada
        // o da un fallo en caso contrario.
        $user = User::findOrFail($id);
        // Devuelve el usuario solicitado en formato JSON.
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, string $id)
    {
        // Almacena el usuario solicitado si encuentra la id especificada
        // o da un fallo en caso contrario.
        $user = User::findOrFail($id);
        // Actualiza el usuario con los campos validados.
        $user -> update($request -> validated());
        
        // Devuelve el usuario actualizado en formato JSON.
        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Almacena el usuario solicitado si encuentra la id especificada
        // o da un fallo en caso contrario.
        $user = User::findOrFail($id);
        // Elimina el usuario.
        $user -> delete();

        // Devuelve una respuesta vacía con un código de estado 204.
        return response(null, 204);
    }
}

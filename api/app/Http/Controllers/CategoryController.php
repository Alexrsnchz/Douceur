<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Almacena todas las categorías obtenidas de la base de datos.
        $categories = Category::all();
        // Devuelve las categorías en formato JSON.
        return CategoryResource::collection($categories);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        // Almacena la categoría creada con los campos validados.
        $category = Category::create($request -> validated());
        // Devuelve la categoría creada en formato JSON.
        return new CategoryResource($category);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Almacena la categoría solicitada si encuentra la id especificada
        // o da un fallo en caso contrario.
        $category = Category::findOrFail($id);
        // Devuelve la categoría solicitada en formato JSON.
        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, string $id)
    {
        // Almacena la categoría solicitada si encuentra la id especificada
        // o da un fallo en caso contrario.
        $category = Category::findOrFail($id);
        // Actualiza las categorías con los campos validados.
        $category -> update($request -> validated());
        
        // Devuelve la categoría actualizada en formato JSON.
        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Almacena la categoría solicitada si encuentra la id especificada
        // o da un fallo en caso contrario.
        $category = Category::findOrFail($id);
        // Elimina la categoría.
        $category -> delete();

        // Devuelve una respuesta vacía con un código de estado 204.
        return response(null, 204);
    }
}

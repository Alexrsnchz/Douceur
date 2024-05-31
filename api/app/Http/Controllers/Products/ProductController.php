<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Products\StoreProductRequest;
use App\Http\Requests\Products\UpdateProductRequest;
use App\Http\Resources\Products\ProductResource;
use App\Models\Products\Product;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Almacena todos los productos obtenidos de la base de datos.
        $products = Product::all();
        // Devuelve los productos en formato JSON.
        return ProductResource::collection($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        // Almacena el producto creado con los campos validados.
        $product = Product::create($request -> validated());
        // Devuelve el producto creado en formato JSON.
        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Almacena el producto solicitado si encuentra la id especificada
        // o da un fallo en caso contrario.
        $product = Product::findOrFail($id);
        // Devuelve el producto solicitado en formato JSON.
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, string $id)
    {
        // Almacena el producto solicitado si encuentra la id especificada
        // o da un fallo en caso contrario.
        $product = Product::findOrFail($id);
        // Actualiza el producto con los campos validados.
        $product -> update($request -> validated());
        
        // Devuelve el producto actualizado en formato JSON.
        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Almacena el producto solicitado si encuentra la id especificada
        // o da un fallo en caso contrario.
        $product = Product::findOrFail($id);
        // Elimina la imagen del producto.
        Storage::delete($product -> prodImg);
        // Elimina el producto.
        $product -> delete();

        // Devuelve una respuesta vacía con un código de estado 204.
        return response(null, 204);
    }
}

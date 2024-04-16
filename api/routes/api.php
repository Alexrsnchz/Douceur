<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\AllergenController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Rutas API para todo lo relacionado con usuarios.
Route::apiResource('addresses', AddressController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('posts', PostController::class);

// Rutas API para todo lo relacionado con productos.
Route::apiResource('allergens', AllergenController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('products', ProductController::class);

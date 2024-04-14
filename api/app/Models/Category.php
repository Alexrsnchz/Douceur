<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'catName', 
        'catColor'
    ];

    /**
     * Relación 1:N con Product.
     * Una categoría puede tener muchos productos.
     */
    public function products(): HasMany
    {
        return $this -> hasMany(Product::class);
    }
}
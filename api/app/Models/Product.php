<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'prodName',
        'description',
        'price',
        'availability',
        'image',
        'category_id'
    ];

    /**
     * Relación N:M con Allergen.
     * Un producto puede tener muchos alérgenos.
     */
    public function allergens(): BelongsToMany
    {
        return $this -> belongsToMany(Allergen::class);
    }

    /**
     * Relación 1:N con Category.
     * Un producto puede tener una sola categoría.
     */
    public function category(): BelongsTo
    {
        return $this -> belongsTo(Category::class);
    }

    /**
     * Relación N:M con User.
     * Un producto puede tener likes de muchos usuarios.
     */
    public function usersLike(): BelongsToMany
    {
        return $this -> belongsToMany(User::class);
    }
}

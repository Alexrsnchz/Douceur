<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        fake() -> addProvider(new \Mmo\Faker\PicsumProvider(fake()));

        $stock = fake() -> numberBetween(0, 100);
        $availability = ($stock == 0) ? 'Agotado' : 'Disponible';

        return [
            'prodName' => fake() -> unique() -> word(),
            'description' => fake() -> text(),
            'price' => fake() -> randomFloat(2, 20, 250),
            'stock' => $stock,
            'availability' => $availability,
            'image' => 'products/'.fake() -> picsum('public/storage/products', 640, 480, false),
            'category_id' => Category::all() -> random() -> id
        ];
    }
}

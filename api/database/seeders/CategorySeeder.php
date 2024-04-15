<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Pasteles' => '#FFD1DC',
            'Cupcakes' => '#B2FFFF',
            'Galletas' => '#F0E68C',
            'Tartas' => '#98FB98',
            'Panadería' => '#FFA07A'
        ];

        foreach ($categories as $catName => $catColor) {
            Category::create(compact('catName', 'catColor'));
        }
    }
}

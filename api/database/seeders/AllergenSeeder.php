<?php

namespace Database\Seeders;

use App\Models\Allergen;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AllergenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $allergens = [
            ['alrgnName' => 'Gluten', 'alrgnColor' => '#C8945E', 'alrgnImg' => 'gluten.png'],
            ['alrgnName' => 'Crustáceos', 'alrgnColor' => '#A05442', 'alrgnImg' => 'crustaceos.png'],
            ['alrgnName' => 'Huevos', 'alrgnColor' => '#C4A99B', 'alrgnImg' => 'huevos.png'],
            ['alrgnName' => 'Pescado', 'alrgnColor' => '#4171B5', 'alrgnImg' => 'pescado.png'],
            ['alrgnName' => 'Cacahuetes', 'alrgnColor' => '#BCA270', 'alrgnImg' => 'cacahuetes.png'],
            ['alrgnName' => 'Soja', 'alrgnColor' => '#417344', 'alrgnImg' => 'soja.png'],
            ['alrgnName' => 'Lácteos', 'alrgnColor' => '#87A9D6', 'alrgnImg' => 'lacteos.png'],
            ['alrgnName' => 'Frutos con cáscara', 'alrgnColor' => '#8F6760', 'alrgnImg' => 'frutos-con-cascara.png'],
            ['alrgnName' => 'Apio', 'alrgnColor' => '#E2D47F', 'alrgnImg' => 'apio.png'],
            ['alrgnName' => 'Mostaza', 'alrgnColor' => '#BACB58', 'alrgnImg' => 'mostaza.png'],
            ['alrgnName' => 'Sésamo', 'alrgnColor' => '#4F4E4E', 'alrgnImg' => 'sesamo.png'],
            ['alrgnName' => 'Sulfitos', 'alrgnColor' => '#3C4356', 'alrgnImg' => 'sulfitos.png'],
            ['alrgnName' => 'Altramuces', 'alrgnColor' => '#B05540', 'alrgnImg' => 'altramuces.png'],
            ['alrgnName' => 'Moluscos', 'alrgnColor' => '#A3C096', 'alrgnImg' => 'moluscos.png'],
        ];

        foreach ($allergens as $allergen) {
            Allergen::create([
                'alrgnName' => $allergen['alrgnName'],
                'alrgnColor' => $allergen['alrgnColor'],
                'alrgnImg' => $allergen['alrgnImg']
            ]);
        }
    }
}

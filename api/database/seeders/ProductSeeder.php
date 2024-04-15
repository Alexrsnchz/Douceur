<?php

namespace Database\Seeders;

use App\Models\Allergen;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Almacena los productos que se generan con el fáctory de Product.
        $productos = Product::factory(10) -> create();

        // Añade alérgenos aleatorios al producto.
        foreach($productos as $allergen){
            // Acopla los alérgenos aleatorios generados a los productos.
            $allergen -> allergens() -> attach(self::getAllergens());
        }

        // Añade un número aleatorio de likes al producto.
        foreach ($productos as $like) {
            // Acopla los likes aleatorios generados a los usuarios.
            $like -> usersLike() -> attach(self::getLikes());
        }
    }

    /**
     * Función que devuelve un número aleatorio de alérgenos
     * para asignárselos a los productos.
     */
    private function getAllergens(): array
    {
        $allergens = [];
        $allergenIds = Allergen::pluck('id') -> toArray();
        $randomIndex = array_rand($allergenIds, random_int(2, count($allergenIds)));
        
        foreach($randomIndex as $index){
            $allergens[] = $allergenIds[$index];
        }
        
        return $allergens;
    }

    /**
     * Función que devuelve un número aleatorio de likes
     * para asignárselos a los usuarios.
     */
    private function getLikes(): array
    {
        $likes = [];
        $userIds = User::pluck('id') -> toArray();
        $randomIndex = array_rand($userIds, random_int(1, count($userIds)));
        
        if(!is_array($randomIndex)){
            return [$userIds[$randomIndex]];
        }

        foreach($randomIndex as $index){
            $likes[] = $userIds[$index];
        }

        return $likes;
    } 
}

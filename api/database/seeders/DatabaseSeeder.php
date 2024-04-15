<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Address::factory(10) -> create();
        User::factory(10) -> create();
        
        $this -> call([
            AllergenSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class
        ]);
    }
}

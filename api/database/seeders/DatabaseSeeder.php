<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //Storage::deleteDirectory('allergens');
        //Storage::makeDirectory('allergens');

        Storage::deleteDirectory('products');
        Storage::makeDirectory('products');

        Storage::deleteDirectory('posts');
        Storage::makeDirectory('posts');

        Address::factory(10) -> create();
        User::factory(10) -> create();
        Post::factory(10) -> create();
        
        $this -> call([
            AllergenSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class
        ]);
    }
}

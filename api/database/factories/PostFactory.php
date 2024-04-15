<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        fake() -> addProvider(new \Mmo\Faker\PicsumProvider(fake()));

        return [
            'title' => fake() -> unique() -> words(random_int(2, 3), true),
            'content' => fake() -> text(),
            'state' => fake() -> randomElement(['Publicado', 'Borrador']),
            'postImg' => 'posts/'.fake() -> picsum('public/storage/posts', 640, 480, false),
            'user_id' => User::all() -> random() -> id
        ];
    }
}
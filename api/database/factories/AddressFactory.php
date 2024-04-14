<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'streetType' => fake() -> cityPrefix(),
            'streetName' => fake() -> streetName(),
            'number' => fake() -> buildingNumber(),
            'city' => fake() -> city(),
            'postalCode' => fake() -> postcode()
        ];
    }
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Delivery>
 */
class DeliveryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'status' => fake()->randomElement([1,2,3,4,0])
        ];
    }

    public function processing(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 1,
        ]);
    }
    public function outForDelivery(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 2,
        ]);
    }
    public function delivered(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 3,
        ]);
    }
    public function returned(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 4,
        ]);
    }
    public function cancelled(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 0,
        ]);
    }
}

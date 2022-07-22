<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Faker::create();
        Category::create(
            [
                'name' => $this->faker->unique(true)->word(2, true),
                'user_id' => 1
            ]
        );
        Category::create(
            [
                'name' => $this->faker->unique(true)->word(2, true),
                'user_id' => 1
            ]
        );
        Category::create(
            [
                'name' => $this->faker->unique(true)->word(2, true),
                'user_id' => 1
            ]
        );
        Category::create(
            [
                'name' => $this->faker->unique(true)->word(2, true),
                'user_id' => 2
            ]
        );
        Category::create(
            [
                'name' => $this->faker->unique(true)->word(2, true),
                'user_id' => 2
            ]
        );
        Category::create(
            [
                'name' => $this->faker->unique(true)->word(2, true),
                'user_id' => 2
            ]
        );
        Category::create(
            [
                'name' => $this->faker->unique(true)->word(2, true),
                'user_id' => 3
            ]
        );
        Category::create(
            [
                'name' => $this->faker->unique(true)->word(2, true),
                'user_id' => 3
            ]
        );
        Category::create(
            [
                'name' => $this->faker->unique(true)->word(2, true),
                'user_id' => 3
            ]
        );
    }
}

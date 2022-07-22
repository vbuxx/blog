<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Faker::create();
        Article::factory(1)->create(
            [
                'title'      => $this->faker->words(5, true),
                'content' => $this->faker->sentence(39),
                'image' => 'https://source.unsplash.com/random/400x300',
                'user_id' => 1,
                'category_id' => $this->faker->numberBetween(1, 3),
            ]
        );
        Article::factory(1)->create(
            [
                'title'      => $this->faker->words(5, true),
                'content' => $this->faker->sentence(40),
                'image' => 'https://source.unsplash.com/random/400x300',
                'user_id' => 2,
                'category_id' => $this->faker->numberBetween(4, 6),
            ]
        );
        Article::factory(1)->create(
            [
                'title'      => $this->faker->words(5, true),
                'content' => $this->faker->sentence(45),
                'image' => 'https://source.unsplash.com/random/400x300',
                'user_id' => 3,
                'category_id' => $this->faker->numberBetween(7, 9),
            ]
        );
    }
}

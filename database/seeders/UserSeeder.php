<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'      => 'admin',
            'email'     => 'admin@gmail.com',
            'password'  => Hash::make('password')
        ]);

        User::create([
            'name'      => 'Rinda',
            'email'     => 'admin1@gmail.com',
            'password'  => Hash::make('password')
        ]);

        User::create([
            'name'      => 'Kevin',
            'email'     => 'admin2@gmail.com',
            'password'  => Hash::make('password')
        ]);

        User::create([
            'name'      => 'Mullet',
            'email'     => 'admin3@gmail.com',
            'password'  => Hash::make('password')
        ]);

        User::create([
            'name'      => 'Jokowi',
            'email'     => 'admin4@gmail.com',
            'password'  => Hash::make('password')
        ]);
    }
}

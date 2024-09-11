<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User;
        $user->name = 'Hoàng An';
        $user->email = 'hoangan.web@gmail.com';
        $user->password = bcrypt('123456');
        $user->save();
    }
}

<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Delivery;
use App\Models\Location;
use App\Models\Package;
use App\Models\Staff;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        
        $this->call(CountriesTableSeeder::class);
        $this->call(StatesTableSeeder::class);
        $this->call(CitiesTableSeeder::class);

        Delivery::factory()
            ->count(2)
            ->for(
                Staff::factory()->create()
                , 'deliveryPerson'
            )
            ->has(
                Package::factory()
                    ->count(5)
                    ->for(
                        User::factory()->create()
                        , 'dispatcher'
                    )
                    ->for(
                        User::factory()->create()
                        , 'receiver'
                    )
            )
            ->for( 
                Location::factory()->create() ,
                'location'
            )
            ->create();
    }
}

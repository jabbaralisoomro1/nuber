<?php

use Illuminate\Database\Seeder;

class BookingStatusSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            
            ['id' => 1, 'name' => 'Pending',],
            ['id' => 2, 'name' => 'Accepted',],
            ['id' => 3, 'name' => 'Cancel',],

        ];

        foreach ($items as $item) {
            \App\BookingStatus::create($item);
        }
    }
}

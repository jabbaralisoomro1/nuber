<?php

use Illuminate\Database\Seeder;

class BookingSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            
            ['id' => 1, 'name' => 'HB', 'email' => 'adsfas@gmail.com', 'package_id' => 2, 'status_id' => 1,],

        ];

        foreach ($items as $item) {
            \App\Booking::create($item);
        }
    }
}

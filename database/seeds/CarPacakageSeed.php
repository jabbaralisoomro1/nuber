<?php

use Illuminate\Database\Seeder;

class CarPacakageSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            
            ['id' => 1, 'name' => 'Standard', 'price' => '0.00',],
            ['id' => 2, 'name' => 'Premium', 'price' => '100.00',],

        ];

        foreach ($items as $item) {
            \App\CarPacakage::create($item);
        }
    }
}

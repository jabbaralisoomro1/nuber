<?php

$factory->define(App\CarPacakage::class, function (Faker\Generator $faker) {
    return [
        "name" => $faker->name,
        "price" => $faker->randomNumber(2),
    ];
});

<?php

$factory->define(App\BookingStatus::class, function (Faker\Generator $faker) {
    return [
        "name" => $faker->name,
    ];
});

<?php

$factory->define(App\Booking::class, function (Faker\Generator $faker) {
    return [
        "name" => $faker->name,
        "email" => $faker->safeEmail,
        "package_id" => factory('App\CarPacakage')->create(),
        "status_id" => factory('App\BookingStatus')->create(),
    ];
});

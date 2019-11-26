<?php

Route::group(['prefix' => '/v1', 'middleware' => ['auth:api'], 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
    Route::post('change-password', 'ChangePasswordController@changePassword')->name('auth.change_password');
    Route::apiResource('rules', 'RulesController', ['only' => ['index']]);
    Route::apiResource('permissions', 'PermissionsController');
    Route::apiResource('roles', 'RolesController');
    Route::apiResource('users', 'UsersController');
    Route::apiResource('car-pacakages', 'CarPacakagesController');
    Route::apiResource('booking-statuses', 'BookingStatusesController');
    Route::apiResource('bookings', 'BookingsController');
    Route::post('cancel-booking/{id}', 'BookingManageController@cancelBooking');
    Route::post('accept_booking/{id}', 'BookingManageController@acceptBooking');
});

<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Add5dd54e7ee5f0fRelationshipsToBookingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bookings', function(Blueprint $table) {
            if (!Schema::hasColumn('bookings', 'package_id')) {
                $table->integer('package_id')->unsigned()->nullable();
                $table->foreign('package_id', '42768_5dd54e7e174ee')->references('id')->on('car_pacakages')->onDelete('cascade');
                }
                if (!Schema::hasColumn('bookings', 'status_id')) {
                $table->integer('status_id')->unsigned()->nullable();
                $table->foreign('status_id', '42768_5dd54e7e1ced3')->references('id')->on('booking_statuses')->onDelete('cascade');
                }
                
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bookings', function(Blueprint $table) {
            
        });
    }
}

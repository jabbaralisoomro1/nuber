<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Update1574259526CarPacakagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('car_pacakages', function (Blueprint $table) {
            
if (!Schema::hasColumn('car_pacakages', 'price')) {
                $table->decimal('price', 15, 2)->nullable();
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
        Schema::table('car_pacakages', function (Blueprint $table) {
            $table->dropColumn('price');
            
        });

    }
}

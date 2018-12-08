<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pad_usuarios', function (Blueprint $table) {
            $table->increments('usu_num');
            $table->string('usu_email')->unique();
            $table->string('usu_nom');
            $table->string('usu_pat');
            $table->string('usu_mat');
            $table->string('usu_password');
            $table->integer('rol_num')->nulleable(false);
            $table->integer('est_num');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pad_usuarios');
    }
}

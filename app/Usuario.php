<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Usuario extends Authenticatable
{
    use Notifiable;

    /**
     * Tabla que contiene los usuarios
     *
     * @var sting
     */

    protected $table = 'pad_usuarios';

    /**
     * Atritubo llave primaria
     *
     * @var string
     */
    protected $primarykey = 'usu_num';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'usu_nom','usu_pat','usu_mat', 'usu_email', 'usu_password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'usu_password', 'remember_token',
    ];
}

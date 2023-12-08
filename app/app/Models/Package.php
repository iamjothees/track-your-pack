<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    function dispatcher(){
        return $this->belongsTo( User::class, "dispatcher_id" );
    }
    
    function reciever(){
        return $this->belongsTo( User::class, 'reciever_id' );
    }
}

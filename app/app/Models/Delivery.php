<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use HasFactory;

    function deliveryPerson(){
        return $this->belongsTo( Staff::class, 'delivery_person_id' );
    }
    
    function packages(){
        return $this->HasMany( Package::class );
    }
}

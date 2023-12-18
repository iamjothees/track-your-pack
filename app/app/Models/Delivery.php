<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected function status() : Attribute{
        return Attribute::make(
            get: fn ( mixed $value ) => 
                $value == 1 
                    ? "Processing"
                    : "Transmitting"
        );
    }

    function deliveryPerson(){
        return $this->belongsTo( Staff::class, 'delivery_person_id' );
    }

    function location(){
        return $this->belongsTo( Location::class, 'location_id' );
    }

    function packages(){
        return $this->HasMany( Package::class );
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected function gpsCoordinates(): Attribute {
        return Attribute::make(
            get: fn (mixed $value ) => json_decode($value),
            set: fn (mixed $value ) => json_encode($value),
        );
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Delivery;
use App\Traits\JSONResponseTrait;
use Illuminate\Http\Request;

class DeliveryController extends Controller
{
    use JSONResponseTrait;

    function index( Request $request ){
        $role = $request->role;
        $deliveries = Delivery::query()
            ->withCount('packages')
            ->paginate();
        return $this->success([
            'deliveries' => $deliveries
        ]);
    }

    function markAs( Delivery $delivery, $status ){
        $delivery->update([
            'status' => 2
        ]);

        return $this->success(['delivery' => $delivery], "Delivery marked as out for delivery");
    }
}
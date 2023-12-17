<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Traits\JSONResponseTrait;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    
    use JSONResponseTrait;

    function index( Request $request ){
        $role = $request->role;
        $packagesQuery = Package::query();
        if( $role == "dispatcher"){
            $packagesQuery->whereDispatcherId( $request->user()->id )->with('reciever');
        }else
        if( $role == "reciever"){
            $packagesQuery->whereRecieverId( $request->user()->id )->with('dispatcher');
        }
        $packages =  $packagesQuery->paginate();
        return $this->success([
            'packages' => $packages
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Package $package)
    {
        $package->load(['dispatcher', 'receiver', 'delivery']);
        return $this->success(['package' => $package]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

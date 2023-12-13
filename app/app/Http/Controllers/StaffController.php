<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use App\Traits\JSONResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StaffController extends Controller
{
    use JSONResponseTrait;

    function auth( Request $request){

        $staff = Staff::where('phone', $request->phone)->first();
        if ( !$staff ){
            return [
                'message' => "Oops! Login Failed"
            ];
        }

        if( !Hash::check($request->password, $staff->password )){
            return [
                'message' => "Oops! Login Failed"
            ];
        }
        
        $data =  [
            'autherization-token' => $staff->createToken( "LOGIN_TOKEN", ['role:staff'] )->plainTextToken
        ];

        return $this->success($data, "Hello {$staff->name}!");

    }
    

    
    function logout( Request $request ){
        $request->user()->currentAccessToken()->delete();

        return $this->success(null, "Bye {$request->user()->name}! Logged out of this device Successfully ");

    }
    function logoutOfAllDevices( Request $request ){
        $request->user()->tokens()->delete();
        return $this->success(null, "Bye {$request->user()->name}! Logged out of all devices Successfully ");
    }
}

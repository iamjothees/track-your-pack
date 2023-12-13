<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\JSONResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    use JSONResponseTrait;

    function auth( Request $request ){

        $user = User::where('phone', $request->phone)->first();
        if ( !$user ){
            return [
                'message' => "Oops! Login Failed"
            ];
        }

        if( !Hash::check($request->password, $user->password )){
            return [
                'message' => "Oops! Login Failed"
            ];
        }
        
        $data =  [
            'autherization-token' => $user->createToken( "LOGIN_TOKEN", ['role:user'] )->plainTextToken
        ];

        return $this->success($data, "Hello {$user->name}!");

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

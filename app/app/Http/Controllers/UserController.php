<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
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
        
        return [
            'autherization-token' => $user->createToken( "LOGIN_TOKEN" )->plainTextToken
        ];

    }

    function logout( Request $request ){
        $request->user()->currentAccessToken()->delete();
        
        
    }
    function logoutOfAllDevices( Request $request ){
        $request->user()->tokens()->delete();
    }
}

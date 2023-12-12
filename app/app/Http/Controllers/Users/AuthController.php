<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller{
    function authenticate( Request $request){

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
}

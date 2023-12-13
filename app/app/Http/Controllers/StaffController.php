<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StaffController extends Controller
{
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
        
        return [
            'autherization-token' => $staff->createToken( "LOGIN_TOKEN" )->plainTextToken
        ];

    }
}

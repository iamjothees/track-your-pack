<?php

use App\Http\Controllers\Staffs\AuthController as StaffAuthController;
use App\Http\Controllers\Users\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/auth', [ AuthController::class, 'authenticate' ]);
Route::post('staffs/auth', [ StaffAuthController::class, 'authenticate' ]);


Broadcast::routes(['middleware' => ['auth:sanctum']]);

Route::middleware('auth:sanctum')->get('/staff', function (Request $request) {
    return $request->user();
});

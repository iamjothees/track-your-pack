<?php

use App\Http\Controllers\StaffController;
use App\Http\Controllers\UserController;
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

Route::post('/auth', [ UserController::class, 'auth' ]);
Route::post('/logout', [ UserController::class, 'logout' ]);
Route::post('staffs/auth', [ StaffController::class, 'auth' ]);
Route::post('staffs/logout', [ StaffController::class, 'logout' ]);


Broadcast::routes(['middleware' => ['auth:sanctum']]);

Route::middleware('auth:sanctum')->get('/staff', function (Request $request) {
    return $request->user();
});

<?php

use App\Http\Controllers\DeliveryController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PackageController;
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
Route::post('staffs/auth', [ StaffController::class, 'auth' ]);


Broadcast::routes(['middleware' => ['auth:sanctum']]);


Route::middleware(['auth:sanctum', 'type.user'])->group(  function(){
    
    Route::delete('/logout', [ UserController::class, 'logout' ]);
    Route::delete('/logout-of-all-devices', [ UserController::class, 'logoutOfAllDevices' ]);

    Route::get('/profile', function (Request $request) {
        return $request->user();
    });
    
    Route::apiResources([
        'packages' => '\App\Http\Controllers\PackageController'
    ]);

});


Route::middleware(['auth:sanctum', 'type.staff'])->group(  function(){

    Route::delete('staffs/logout', [ StaffController::class, 'logout' ]);
    Route::delete('staffs/logout-of-all-devices', [ StaffController::class, 'logoutOfAllDevices' ]);

    Route::get('staffs/profile', function (Request $request) {
        return $request->user();
    });

    Route::apiResources([
        'deliveries' => '\App\Http\Controllers\DeliveryController'
    ]);

    Route::post('/deliveries/{delivery}/mark-as/{status}', [ DeliveryController::class, 'markAs' ]);

});
<?php

use App\Models\Package;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('track-package-{package}', function ($user, Package $package) {
    return (int) ($user->id === $package->reciever_id || $user->id === $package->dispatcher_id || $user->id === $package->delivery->delivery_person_id );
});

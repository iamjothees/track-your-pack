"use client"
import React, { useEffect } from 'react'
import Pusher from 'pusher-js';

function Transmit({params:{ id }}) {

    // localStorage.setItem('auth-token', '3|qt7SO12TSkNMx6ZjDegxANiQFCz1Xm30NJO6HKkp02ad54e7');
    // const token = localStorage.getItem('auth-token');
    const token = '3|qt7SO12TSkNMx6ZjDegxANiQFCz1Xm30NJO6HKkp02ad54e7';

    const pusher = new Pusher("27ab16226e94cc8fc74c", {
        cluster: "ap2",
        authEndpoint: `http://127.0.0.1:8000/api/broadcasting/auth`,
        auth: {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": `json/application`,
            }
        }
    });

    useEffect( () => {
        var channel = pusher.subscribe(`private-track-package-${id+1}`);
        
        channel.bind("pusher:subscription_succeeded", () => {
            channel.trigger("client-package.transmitted", {message: "Out for delivery"});
            console.log({message: "Out for delivery"});
        });

        if('geolocation' in navigator) {

            setInterval( () => {
                navigator.geolocation.getCurrentPosition(({ coords }) => {
                    const { latitude, longitude } = coords;
                    const data = {
                        location: { lat: latitude, lng:longitude }
                    };
                    channel.trigger("client-package.transmitted", data);
                    console.log([ data ]);
                })
            }, 3000 );

            
        }
    }, []);

    
    return (
        <div>Transmit</div>
    )
}

export default Transmit
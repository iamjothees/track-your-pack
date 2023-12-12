"use client"
import React, { useEffect } from 'react'
import Pusher from 'pusher-js';

function Track({params:{ id }}) {

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
        channel.bind(`client-package.transmitted`, function(data) {
            console.log(data);
        });
    }, []);

    
    return (
        <div>Track</div>
    )
}

export default Track
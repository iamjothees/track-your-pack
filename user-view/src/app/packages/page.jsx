"use client";
import { useState, useEffect } from 'react';
import Package from './components/package';
import styles from './page.module.css';
import axios from 'axios';
import Loading from './components/loading';

export default function packages() {
    
    const [ packages, setPackages ] = useState([]);
    const [ page, setPage] = useState({
        current: 0,
        next: 1,
        last: null
    });

    useEffect(
        () => {
            getPaginatedData( setPackages, page, setPage, 'packages' );
        }
    , []);

    return (
        <div className={`${styles.container} w-100 p-3 p-md-5`}>
            <Loading />
            {
                packages 
                    ? (
                        packages.map(( package_ ) =>
                            <Package package_={package_} key={package_.id}/>
                        ))
                    : (
                        <div> No Packages Available </div>
                    )
            }
        </div>
    )
}

function getPaginatedData( setData, page, setPage, module ) {
    console.log( {tes: (page.last !== null) && (page.next > page.last)} );
    if ( (page.last !== null) && (page.next > page.last) ){
        return;
    }
    console.log(page.next);
    localStorage.setItem('auth-token', "14|MFOODKvjhVGoqqAKz6MIaswoWy3zlX8KSS6d2cpJ47732df0");
    const authToken = localStorage.getItem('auth-token');
    const activeRole = localStorage.getItem('active-role');
    
    axios.defaults.headers.common["Accept"] = `application/json`;
    axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    axios.get(`${apiBaseUrl}/api/packages?role=${activeRole}&page=${page.next}`)
        .then( res => res.data)
        .then( res => {
            if (res.status == "success"){
                console.log({res});
                setData( ( prev ) => [...prev, ...res.data[module].data]);
                setPage( ( page ) => ({
                    current: res.data[module].current_page,
                    next: page.current + 1,
                    last: res.data[module].last_page
                }) );
            }
        })
        .catch( err => alert("Something went wrong"))
        .finally();
}

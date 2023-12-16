"use client";
import { createContext, useState, useContext, useEffect} from 'react';


const RoleContext = createContext();
export default function RoleProvider( { children } ) {
    const [active, setActive] = useState(localStorage.getItem('active-role'));

    useEffect( () => localStorage.setItem('active-role', active ), [active]);

    const change = (selectedRole) =>{ 
        setActive(selectedRole);
        console.log("EEE");
    };
    return (
        <RoleContext.Provider value={{active, change}}>
            { children }
        </RoleContext.Provider>
    )
}

export const useRole = () => useContext(RoleContext);

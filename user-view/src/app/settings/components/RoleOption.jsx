"use client"; 

import styles from '../page.module.css';
import { useContext } from 'react';
import { useRole } from '@/app/context/RoleContext';

export default function RoleOption( { roleOption } ) {
    const role = useRole();
    console.log(role.active);
    function handleRoleSelect( ){
        role.change(roleOption);
    }
    return (
        <div 
            onClick={handleRoleSelect}
            className={`${styles.roles} ${role.active == roleOption ? styles.active : ""}`} 
        >
            { roleOption.toUpperCase() }
        </div>
    )
}

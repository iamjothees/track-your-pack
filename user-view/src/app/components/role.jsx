"use client"
import styles from './../page.module.css';

export default function Role( { role } ) {
    function handleRoleSelect( ){
        console.log( [role] );
    }
    return (
        <div className={styles.roles} onClick={handleRoleSelect}>
            { role.toUpperCase() }
        </div>
    )
}

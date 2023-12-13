"use client"
import Link from 'next/link';
import styles from './../page.module.css';

export default function Role( { role } ) {
    function handleRoleSelect( ){
        console.log( [role] );
    }
    return (
        <Link href={`/${role}`} className={styles.roles} onClick={handleRoleSelect}>
            { role.toUpperCase() }
        </Link>
    )
}

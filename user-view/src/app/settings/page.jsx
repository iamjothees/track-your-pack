import RoleOption from './components/RoleOption';
import globalStyles from '../styles.module.css';
import styles from './page.module.css';

export default function Settings() {
    return (
        <main className={globalStyles.container}>
            <div className={styles.rolesContainer}>
                <RoleOption roleOption={'dispatcher'} />
                <RoleOption roleOption={'reciever'} />
            </div>
        </main>
    )
}

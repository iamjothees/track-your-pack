import Role from './components/role';
import globalStyles from './styles.module.css';
import styles from './page.module.css';

export default function Home() {

    return (
        <main className={globalStyles.container}>
            <div className={styles.rolesContainer}>
                <Role role={'dispatcher'} />
                <Role role={'reciever'} />
            </div>
        </main>
    )
}


import Package from './components/package';
import styles from './page.module.css';
import axios from 'axios';

export default async function packages() {
    const packages = await getPackages();

    
    const apiBaseUrl = process.env.API_BASE_URL;
    console.log([ process.env.NEXT_PUBLIC_API_BASE_URL ]);

    return (
        <div className={`${styles.container} w-100 p-3 p-md-5`}>
            {
                packages 
                    ? (
                        packages.map(( package_ ) =>
                            <Package package_={package_}/>
                        ))
                    : (
                        <div> No Packages Available </div>
                    )
            }
        </div>
    )
}

async function getPackages() {
    // localStorage.setItem('auth-token', "14|MFOODKvjhVGoqqAKz6MIaswoWy3zlX8KSS6d2cpJ47732df0");
    
    axios.defaults.headers.common["Accept"] = `application/json`;
    axios.defaults.headers.common["Authorization"] = `Bearer 14|MFOODKvjhVGoqqAKz6MIaswoWy3zlX8KSS6d2cpJ47732df0`;
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    // const apiBaseUrl = "http://192.168.1.7:8000";
    // console.log([ process.env.NEXT_PUBLIC_API_BASE_URL ]);
    const res = await axios.get(`${apiBaseUrl}/api/packages?role=reciever`);
    

    return res.data.data.packages;
}

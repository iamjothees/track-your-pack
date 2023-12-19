import Delivery from "./components/Delivery";
import styles from './page.module.css';
import axios from 'axios';

export default async function page() {
    const deliveries = await getDeliveries();
    
    return (
        <div className={`${styles.container} w-100 p-3 p-md-5`}>
            {
                deliveries 
                    ? (
                        deliveries.map(( delivery ) =>
                            <Delivery delivery={delivery} key={delivery.id}/>
                        ))
                    : (
                        <div> No Deliveries Available </div>
                    )
            }
        </div>
    )
}

export async function getDeliveries(){
    const authToken = "1|0cgMowoppfhxdjHUuJmG0AvDn9ivM1UrqGl8CXhB6f05625e";
    axios.defaults.headers.common["Accept"] = `application/json`;
    axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await axios.get(`${apiBaseUrl}/api/deliveries`)
    return res.data.data.deliveries.data;
}
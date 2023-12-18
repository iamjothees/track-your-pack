import axios from "axios";
import Link from "next/link";

export default async function pack({ params: {id}}) {
    const pack = await getPack(id);
    
    const activeRole = 'receiver';
    const oppRole = activeRole === 'receiver' ? 'dispatcher' : 'receiver' ;
    return (
        <div>
            <div>Dispatcher/ Reciever: {`${pack[oppRole].name}`}</div>
            <div>Delivery Status: {`${pack.delivery.status}`}</div>
            {
                (pack.delivery.status == 2)
                    ? <Link href={`/packages/${id}/track`} className={'btn btn-primary'} >Track Package</Link>
                    : <button className={'btn btn-secondary'} disabled>Track Package</button>
            }
        </div>
    )
}

export async function getPack(id){
    const authToken = "14|MFOODKvjhVGoqqAKz6MIaswoWy3zlX8KSS6d2cpJ47732df0";
    axios.defaults.headers.common["Accept"] = `application/json`;
    axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await axios.get(`${apiBaseUrl}/api/packages/${id}`)
    return res.data.data.package;
}
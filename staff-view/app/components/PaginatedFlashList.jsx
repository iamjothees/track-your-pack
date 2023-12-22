import { useState } from "react";
import { FlashList } from "@shopify/flash-list";

export default function PaginatedFlashList({module, ItemComponent}) {

    const [ data, setData] = useState([]);
    const [ page, setPage] = useState({
        current: 0,
        next: 1,
        last: null
    });

    useEffect(
        () => {
            getPaginatedData( );
        }
    , []);

    function getPaginatedData(){
        if ( (page.last !== null) && (page.next > page.last) ){
            return;
        }

        const routePath = module => module.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

        localStorage.setItem('auth-token', "14|MFOODKvjhVGoqqAKz6MIaswoWy3zlX8KSS6d2cpJ47732df0");
        
        const authToken = localStorage.getItem('auth-token');
        axios.defaults.headers.common["Accept"] = `application/json`;
        axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        axios.get(`${apiBaseUrl}/api/${routePath}?page=${page.next}`)
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

    return (
        <FlashList
            renderItem={({ item }) => {
                return <ItemComponent item={item} />;
            }}
            estimatedItemSize={50}
            data={data}
        />
    )
}

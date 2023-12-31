"use client";
import { useRouter } from 'next/navigation';


export default function Package( { package_ } ) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/packages/${package_.id}`);
        console.log(`clicked ${package_.id}`);

    };

    return (
        <div className={"card p-3 d-flex flex-column"} onClick={ handleClick }>
            <div className={"d-flex flex-row "}>
                <label className={"label"}>Dispatcher / Reciever :</label>
                <span className="ps-2"> { package_.dispatcher.name } </span>
            </div>
            <div className={"d-flex flex-row"}>
                <label className={"label"}>Items :</label>
                <span className="ps-2"> 3 </span>
            </div>
            <div className={"d-flex flex-row"}>
                <label className={"label"}>Weight :</label>
                <span className="ps-2"> 0.58 kg </span>
            </div>
            <div className={"d-flex flex-row"}>
                <label className={"label"}>Delivery Arranged :</label>
                <span className="ps-2"> Yes </span>
            </div>        
        </div>
    )
}

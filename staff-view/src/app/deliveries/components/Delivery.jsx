

export default function Delivery( { delivery } ) {
    return (
        <div className="card p-3 d-flex flex-column gap-2">
            <div className='d-flex justify-content-between'>
                <label htmlFor="" className="label">Packages : </label>
                <span>{ delivery.packages_count }</span>
            </div>
            <div className='d-flex justify-content-between mb-3'>
                <label htmlFor="" className="label">Status : </label>
                <span>
                    { delivery.status }
                </span>
            </div>
            { 
                delivery.status == 'Processing'
                    ? <button className="btn btn-danger" > Stop transmission </button>
                    : <button className="btn btn-primary" > Transmit Delivery  </button>
            }
        </div>
    )
}

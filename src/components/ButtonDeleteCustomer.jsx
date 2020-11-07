import React from 'react'
import { Link } from 'react-router-dom'


export default function ButtonDeleteCustomer(props) {

    function handleDeleteCustomer(){
        

        const url = `${props.User.API_URL}customers/${props.customerId}/`
        fetch(url, { headers: props.User.getPrivateHeaders(), method: "DELETE"})
            .then(() => {
                props.history.push(`/home`)
            })

    }
    
    return (
        <>
        <br></br>

            <button className="btn btn-danger float-right" onClick={handleDeleteCustomer}>
            Ta bort kund
            </button>

        </>
    )
}

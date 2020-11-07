import React, {useState, useEffect} from 'react'
import CustomerSingle from '../components/CustomerSingle'
import Customer from '../data/Customer'
import User from '../data/User'

export default function DetailCustomer(props) {
    const [customerInfo, setCustomerInfo] = useState(null)
    const customerId = props.match.params.id
    
    function getCustomerInfo() {
        const privateHeaders = User.getPrivateHeaders()
        Customer.fetchCustomerData(customerId, privateHeaders)
        .then( response => {
            if(response.status !== 200) 
                console.log({error: response.statusText})
            return response.json()
        })
        .then( data => setCustomerInfo(data))
    }

    useEffect( () => {
        getCustomerInfo()
    }, [])

    return (
        <>
            { customerInfo && <CustomerSingle customerId={customerId} customer={customerInfo} /> }
        </>
    )
}

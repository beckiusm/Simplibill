import React, {useState, useEffect, useContext} from 'react'
import CustomerSingle from '../components/CustomerSingle'
import User from '../data/User'
import {StorageContext} from "../contexts/StorageContext";

export default function DetailCustomer(props) {

    const {customerData} = useContext(StorageContext);
    const [customerInfo, setCustomerInfo] = useState(null)
    const customerId = Number(props.match.params.id)

    function getCustomerInfoFromContext() {
        if(!customerData) return false;
        return customerData.find(customer => customer.id === customerId);
    }
    
    function getCustomerInfo() {
        const customerData = getCustomerInfoFromContext()
        if(!customerData) {
            User.fetchCustomerData(customerId)
                .then( response => {
                    if(response.status !== 200)
                        console.log({error: response.statusText})
                    return response.json()
                })
                .then( data => setCustomerInfo(data))
        } else {
            setCustomerInfo(customerData);
        }

    }


    useEffect( () => {
        getCustomerInfo()
    }, // eslint-disable-next-line
        [])

    return (
        <>
            { customerInfo && <CustomerSingle customerId={customerId} customer={customerInfo} /> }
        </>
    )
}

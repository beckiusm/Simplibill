import React, { useEffect, useContext} from 'react'
import CustomerSingle from '../components/CustomerSingle'
import User from '../data/User'
import {StorageContext} from "../contexts/StorageContext";

export default function DetailCustomer(props) {

    const {customerListData, customerData, setCustomerData} = useContext(StorageContext);
    const customerId = Number(props.match.params.id)

    function getCustomerInfoFromContext() {
        if(!customerListData) return false;
        return customerListData.find(customer => customer.id === customerId);
    }

    function getCustomerInfo() {
        const customer = getCustomerInfoFromContext()
        if(!customer) {
            User.fetchCustomerData(customerId)
                .then( response => {
                    if(response.status !== 200)
                        console.log({error: response.statusText})
                    return response.json()
                })
                .then( data => setCustomerData(data))
        } else {
            setCustomerData(customer);
        }
    }


    useEffect( () => {
        getCustomerInfo()
    }, // eslint-disable-next-line
        [])

    return (
        <>
            { customerData && <CustomerSingle customerId={customerId} customer={customerData} /> }
        </>
    )
}

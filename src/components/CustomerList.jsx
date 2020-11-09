import React, {useEffect, useContext} from 'react'
import User from '../data/User'
import CustomerListItem from './CustomerListItem'
import {StorageContext} from "../contexts/StorageContext";

export default function CustomerList() {

    const {setCustomerData, customerData} = useContext(StorageContext);

    async function getCustomerList() {
        const customerList = await User.fetchCustomerList();
        setCustomerData(customerList)
        console.log(customerData);
    }

    useEffect(() => {
        if(!customerData) {
            getCustomerList();
        }
    }, // eslint-disable-next-line
        [])

    return (
        <ul className="list-group">
            {customerData && customerData.map((customerListItem, index) => {
                return <CustomerListItem key={index} index={index} customerListItem={customerListItem}/>
            })}
        </ul>
    )
}

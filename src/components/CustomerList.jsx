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
        <table className="table">
              <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {customerData && customerData.map((customerListItem, index) => {
                    return <CustomerListItem key={index} index={index} customerListItem={customerListItem}/>
                })}
            </tbody>
        </table>
    )
}

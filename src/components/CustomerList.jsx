import React, {useState, useEffect} from 'react'
import Customer from '../data/Customer'
import User from '../data/User'
import CustomerListItem from './CustomerListItem'

export default function CustomerList() {

    const [customerListData, setCustomerListData] = useState(null)

    const headers = User.getPrivateHeaders()

    function getCustomerList() {
        Customer.fetchCustomerList(headers)
        .then(res => res.json())
        .then(data => setCustomerListData(data.results))
    }

    useEffect(() => {
        getCustomerList()
    }, [])

    return (
        <ul className="list-group">
            {customerListData && customerListData.map((customerListItem, index) => {
                return <CustomerListItem index={index} customerListItem={customerListItem}/>
            })}
        </ul>
    )
}

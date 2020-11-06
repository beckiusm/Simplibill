import React, {useState, useEffect} from 'react'
import Customer from '../data/Customer'
import User from '../data/User'

export default function DetailCustomer(props) {
    const [customerInfo, setCustomerInfo] = useState(null)
    const customerId = props.match.params.id
    
    function getCustomerInfo() {
        const privateHeaders = User.getPrivateHeaders()
        const temp = Customer.fetchCustomerData(customerId, privateHeaders)
        console.log( temp )
    }

    useEffect( () => {
        getCustomerInfo()
    }, [])

    return (
        <div>
            customerId: {customerId}
        </div>
    )
}

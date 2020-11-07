import React, { useState, useEffect } from 'react';
import FormCustomer from '../components/FormCustomer';
import User from "../data/User";

const EditCustomer = (props) => {

    const customerId = props.match.params.id;
    const [activeCustomer, setActiveCustomer] = useState(null)
    

    useEffect(() => {

        const url = `${User.API_URL}customers/${customerId}/`

        fetch(url, { headers: User.getPrivateHeaders() })
            .then(res => res.json())
            .then(data => {
                setActiveCustomer(data)

            })

        return () => {

        }
    }, [])

    function saveData() {
        const url = `${User.API_URL}customers/${customerId}/`
        fetch(url, { headers: User.getPrivateHeaders(), method: "PUT", body: JSON.stringify(activeCustomer) })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setActiveCustomer({ ...activeCustomer, [name]: value })

    }

    return (
        <div>

            {/* <button onClick={tempGetCustomers}>Se kunder</button> */}
            {activeCustomer && 
            <FormCustomer 
                handleInputChange={handleInputChange}
                activeCustomer={activeCustomer}
                />
            }

            <button className="btn btn-success float-right" onClick={saveData}>Spara</button>
        </div>
    );
};

export default EditCustomer;

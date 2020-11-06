import React, { useState, useEffect } from 'react';
import User from "../data/User";



const EditCustomer = (props) => {


    const testCustomerId = 3359
    const [activeCustomer, setActiveCustomer] = useState(null)
    const detailFieldsArray = ["name", "organisationNr", "vatNr", "reference", "paymentTerm", "website", "email", "phoneNumber"]

    useEffect(() => {

        const url = `${User.API_URL}customers/${testCustomerId}/`

        fetch(url, { headers: User.getPrivateHeaders() })
            .then(res => res.json())
            .then(data => {
                setActiveCustomer(data)

            })


        return () => {

        }
    }, [])


    function tempGetCustomers() {

        fetch(`${User.API_URL}customers`, {
            headers: User.getPrivateHeaders()
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    function saveData() {
        const url = `${User.API_URL}customers/${testCustomerId}/`
        console.log(activeCustomer)
        console.log(JSON.stringify(activeCustomer))
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

    const customerId = props.match.params.id;


    return (
        <div>

            {console.log(customerId)}
            <button onClick={tempGetCustomers}>Se kunder</button>

            {activeCustomer && detailFieldsArray.map((detailField, index) => {

                return (

                    <div className="input-group mb-3" key={index}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" >{detailField}</span>
                        </div>
                        <input name={detailField} type="text" className="form-control" onChange={handleInputChange} value={activeCustomer[detailField]} />
                    </div>)
            }
            )}

            <button className="btn btn-success float-right" onClick={saveData}>Spara</button>
        </div>
    );
};

export default EditCustomer;

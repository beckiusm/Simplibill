import React, { useState, useEffect } from 'react';
import User from "../data/User";

export default function AddCustomer() {

    const [form, setForm] = useState(null)
    const detailFieldsArray = ["name", "organisationNr", "vatNr", "reference", "paymentTerm", "website", "email", "phoneNumber"]

    function saveData() {
        const url = `${User.API_URL}customers/`
        fetch(url, { headers: User.getPrivateHeaders(), method: "POST", body: JSON.stringify(form) })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setForm({ ...form, [name]: value })

    }

    return (
        <div>

            {detailFieldsArray.map((detailField, index) => {

                return (

                    <div className="input-group mb-3" key={index}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" >{detailField}</span>
                        </div>
                        <input name={detailField} type="text" className="form-control" onChange={handleInputChange} />
                    </div>)
            }
            )}

            <button className="btn btn-success float-right" onClick={saveData}>Spara</button>
        </div>
    );
}

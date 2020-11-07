import React, { useState, useEffect } from 'react';
import User from "../data/User";
import FormCustomer from '../components/FormCustomer';
export default function AddCustomer() {

    const [form, setForm] = useState(null)

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

            <FormCustomer
                handleInputChange={handleInputChange}
            />

            <button className="btn btn-success float-right" onClick={saveData}>Spara</button>
        </div>
    );
}

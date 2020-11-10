import React, {useEffect, useContext} from 'react';
import ButtonDeleteCustomer from '../components/ButtonDeleteCustomer';
import FormCustomer from '../components/FormCustomer';
import User from "../data/User";
import {StorageContext} from "../contexts/StorageContext";
import Utilities from "../data/Utilities";

const EditCustomer = (props) => {

    const customerId = Number(props.match.params.id);

    const {setCustomerListData, setCustomerData, customerData, customerListData} = useContext(StorageContext);

    async function getCustomerList() {
        const customerList = await User.fetchCustomerList();
        setCustomerListData(customerList)
    }

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
    useEffect(() => {
            getCustomerInfo();
    }, // eslint-disable-next-line
        [])

    function saveData() {
        if(!Utilities.validateVatNr(customerData['vatNr'])) {
            document.getElementById('vatNr').classList.add('is-invalid');
            console.error('Not a valid VatNr');
            return;
        } else {
            document.getElementById('vatNr').classList.add('is-valid');
        }
        const url = `${User.API_URL}customers/${customerId}/`
        fetch(url, { headers: User.getPrivateHeaders(), method: "PUT", body: JSON.stringify(customerData) })
            .then(res => res.json())
            .then(async () => {
                await getCustomerList()
                props.history.push(`/customer/${customerId}`)
            })
    }

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setCustomerData({ ...customerData, [name]: value })
    }

    return (
        <div>
            <ButtonDeleteCustomer history={props.history} customerId={customerId} User={User}></ButtonDeleteCustomer>
            {customerData &&
                <FormCustomer
                    handleInputChange={handleInputChange}
                    customerData={customerData}
                />
            }
            <div class="col-md-8 col-lg-6 d-flex justify-content-end">
            <button className="btn btn-success" onClick={saveData}>Save</button>
            </div>
        </div>
    );
};

export default EditCustomer;

import React, {useEffect, useContext} from 'react';
import ButtonDeleteCustomer from '../components/ButtonDeleteCustomer';
import FormCustomer from '../components/FormCustomer';
import User from "../data/User";
import {StorageContext} from "../contexts/StorageContext";
import Utilities from "../data/Utilities";

const EditCustomer = (props) => {

    const customerId = props.match.params.id;

    const {setCustomerListData, setCustomerData, customerData,customerListData} = useContext(StorageContext);

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
            console.error('Not a valid VatNr');
            return;
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
            
            <button className="btn btn-success float-right" onClick={saveData}>Save</button>
        
        </div>
    );
};

export default EditCustomer;

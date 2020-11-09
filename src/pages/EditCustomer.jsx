import React, {useState, useEffect, useContext} from 'react';
import ButtonDeleteCustomer from '../components/ButtonDeleteCustomer';
import FormCustomer from '../components/FormCustomer';
import User from "../data/User";
import {StorageContext} from "../contexts/StorageContext";

const EditCustomer = (props) => {

    const customerId = props.match.params.id;
    const [activeCustomer, setActiveCustomer] = useState(null)

    const {setCustomerData} = useContext(StorageContext);
    async function getCustomerList() {
        const customerList = await User.fetchCustomerList();
        setCustomerData(customerList)
    }

    // eslint-disable-next-line
    useEffect(() => {

        const url = `${User.API_URL}customers/${customerId}/`

        fetch(url, { headers: User.getPrivateHeaders() })
            .then(res => res.json())
            .then(data => {
                setActiveCustomer(data)

            })

        return () => {

        }
    }, // eslint-disable-next-line
        [])

    function saveData() {
        const url = `${User.API_URL}customers/${customerId}/`
        fetch(url, { headers: User.getPrivateHeaders(), method: "PUT", body: JSON.stringify(activeCustomer) })
            .then(res => res.json())
            .then(async () => {
                await getCustomerList()
                props.history.push(`/customer/${customerId}`)
            }
                
            )
    }


    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setActiveCustomer({ ...activeCustomer, [name]: value })

    }

    return (
        <div>
            <ButtonDeleteCustomer history={props.history} customerId={customerId} User={User}></ButtonDeleteCustomer>
            {activeCustomer &&
                <FormCustomer
                    handleInputChange={handleInputChange}
                    activeCustomer={activeCustomer}
                />
            }
            
            <button className="btn btn-success float-right" onClick={saveData}>Save</button>
        
        </div>
    );
};

export default EditCustomer;

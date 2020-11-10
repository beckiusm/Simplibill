import React, {useContext} from 'react'
import {StorageContext} from "../contexts/StorageContext";
import User from "../data/User";

export default function ButtonDeleteCustomer(props) {

    const {setCustomerListData} = useContext(StorageContext);
    async function getCustomerList() {
        const customerList = await User.fetchCustomerList();
        setCustomerListData(customerList)
    }

    function handleDeleteCustomer(){
        const url = `${props.User.API_URL}customers/${props.customerId}/`
        fetch(url, { headers: props.User.getPrivateHeaders(), method: "DELETE"})
            .then(async () => {
                await getCustomerList()
                props.history.push(`/home`)
            })

    }
    
    return (
        <>
        <br></br>
        <div class="col-md-8 col-lg-6 d-flex justify-content-end">
            <button className="btn btn-danger float-right" onClick={handleDeleteCustomer}>
            Remove customer
            </button>
            
        </div>
        </>
    )
}

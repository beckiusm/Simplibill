import React from 'react'

export default function FormCustomer(props) {

    const detailFieldsArray = ["name", "organisationNr", "vatNr", "reference", "paymentTerm", "website", "email", "phoneNumber"]

    function firstUppercase(word) {
        word = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div className='mt-5'>
            {detailFieldsArray.map((detailField, index) => {
                return (
                    <div className="input-group mb-3" key={index}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" >{firstUppercase(detailField)}</span>
                        </div>
                        <input name={detailField} type="text" className="form-control" onChange={props.handleInputChange} value={props.customerData && props.customerData[detailField]} />
                    </div>)
            }
            )}
        </div>
    )
}

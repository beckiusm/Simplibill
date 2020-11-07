import React from 'react'

export default function FormCustomer(props) {

    const detailFieldsArray = ["name", "organisationNr", "vatNr", "reference", "paymentTerm", "website", "email", "phoneNumber"]

    return (
        <div>
            {detailFieldsArray.map((detailField, index) => {

                return (
                    <div className="input-group mb-3" key={index}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" >{detailField}</span>
                        </div>
                        <input name={detailField} type="text" className="form-control" onChange={props.handleInputChange} value={props.activeCustomer && props.activeCustomer[detailField]} />
                    </div>)
            }
            )}
        </div>
    )
}

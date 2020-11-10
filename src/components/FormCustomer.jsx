import React from 'react'

export default function FormCustomer(props) {

    const detailFieldsArray = ["name", "organisationNr", "vatNr", "reference", "paymentTerm", "website", "email", "phoneNumber"]

    function firstUppercase(word) {
        word = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div className='mt-3'>
            <form className={'need-validation novalidate'}>
                {detailFieldsArray.map((detailField, index) => {
                        return (
                            <div className="row justify-content-center">
                            <div className="input-group mb-3 col-md-8" key={index}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" >{firstUppercase(detailField)}</span>
                                </div>
                                <input name={detailField} type="text" className="form-control" onChange={props.handleInputChange} id={detailField} value={props.customerData && props.customerData[detailField]} />
                                {detailField === 'vatNr' &&
                                    <div className="invalid-feedback">
                                    Please enter a valid VatNr. SEXXXXXXXXXX. Where X is a number.
                                    </div>
                                }
                            </div>
                            </div>)
                    }
                )}

            </form>
        </div>
    )
}

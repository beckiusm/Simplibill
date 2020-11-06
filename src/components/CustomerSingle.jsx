import React from 'react'
import styled from 'styled-components'

const CustomerStyled = styled.div`
  h1 {
    font-weight: normal;
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .edit {
    margin-bottom: 20px;
  }
  .info-item {
    margin: 15px 5px;
  }
  .info-item-content {
    font-size: 22px;
  }
  .info-item-title {
    font-size: small;
    color: #797979;
  }
`

export default function CustomerSingle(props) {
  const { customer, customerId } = props

  return (
    <CustomerStyled className="container text-center my-5">
      <h1> { customer.name } </h1>
      <div className="edit">
        <a href={`/edit/${customerId}`}>edit</a>
      </div>
      <div className="info-item">
        <div className="info-item-content"> { customer.organisationNr } </div>
        <div className="info-item-title">Organization nr.</div>
      </div>
      <div className="info-item">
        <div className="info-item-content"> { customer.vatNr } </div>
        <div className="info-item-title">Var nr.</div>
      </div>
      <div className="info-item">
        <div className="info-item-content"> { customer.reference } </div>
        <div className="info-item-title">Reference</div>
      </div>
      <div className="info-item">
        <div className="info-item-content"> { customer.paymentTerm } </div>
        <p className="info-item-title">PaymentTerm</p>
      </div>
      <div className="info-item">
        <div className="info-item-content"> { customer.website } </div>
        <div className="info-item-title">Website</div>
      </div>
      <div className="info-item">
        <div className="info-item-content"> { customer.email } </div>
        <div className="info-item-title">E-mail</div>
      </div>
      <div className="info-item">
        <div className="info-item-content"> { customer.phoneNumber } </div>
        <div className="info-item-title">Phone Number</div>
      </div>
    </CustomerStyled>
  )
}
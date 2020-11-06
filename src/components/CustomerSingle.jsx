import React from 'react'

export default function CustomerSingle(props) {
  const { customer } = props
  return (
    <div>
      <h1> { customer.name } </h1>
      <div> { customer.organisationNr } </div>
      <div> { customer.vatNr } </div>
      <div> { customer.reference } </div>
      <div> { customer.paymentTerm } </div>
      <div> { customer.website } </div>
      <div> { customer.email } </div>
      <div> { customer.phoneNumber } </div>
    </div>
  )
}
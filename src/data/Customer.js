class Customer {

  CUSTOMER_URL = 'https://frebi.willandskill.eu/api/v1/customers/'

  fetchCustomerData(customerId, privateHeaders) {
    const customerUrl = this.CUSTOMER_URL + customerId + '/'
    return fetch(customerUrl, { headers: privateHeaders })
  }

  fetchCustomerList(headers) {
    return fetch(this.CUSTOMER_URL, {
      headers: headers
    })
  }
}

export default new Customer()
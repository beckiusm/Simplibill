class Customer {
  CUSTOMER_URL = 'https://frebi.willandskill.eu/api/v1/customers/'

  fetchCustomerData(customerId, privateHeaders) {
    console.log('privateHeaders', privateHeaders)
    return `${this.CUSTOMER_URL}${customerId}/` 
  }


}

export default new Customer()
class User {
    BASE_URL = 'https://frebi.willandskill.eu/';
    AUTH_URL = `${this.BASE_URL}api-token-auth/`;

    getPublicHeaders() {
        return {
            'Content-Type': 'application/json'
        }
    }

    getToken(email, password) {
        return fetch(this.AUTH_URL, {
            method: 'POST',
            headers: this.getPublicHeaders(),
            body: JSON.stringify({email, password})
        });
    }
}

export default new User();
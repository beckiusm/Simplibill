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

    saveToken(token) {
        sessionStorage.setItem('JWT_TOKEN', token);
    }

    loadToken() {
        return sessionStorage.getItem('JWT_TOKEN')
    }
}

export default new User();
import axios from 'axios';
import 'dotenv/config';

async function createUSer(email, password) {
    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.API_KEY}`,
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
    );
}

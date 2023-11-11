import axios from 'axios';

export function getMessage() {
    return axios.get('db.json').then((response) => {
        return response.data.message;
    });
}

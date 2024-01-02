import axios from 'axios';

export default axios.create({
    baseURL:'https://e42e-108-214-189-156.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});

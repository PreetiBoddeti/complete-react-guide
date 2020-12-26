import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://react-my-burger-501d1-default-rtdb.firebaseio.com/'
});

export default instance;
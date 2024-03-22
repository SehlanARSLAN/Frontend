import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : "http://192.168.56.128/api/",
    headers : {
        'Authorization' : `Bearer 26f0040ee2784f5cb405bfe987d5e3a264f10c5c6a6878761567d12005ee659b935cabdc834ff11ca9fa925e0a98a558cfe681e165a93acc8aee491e85771e1a2067ec597ad7d3ce1a343d77842369280f85df913995c752b3915447fa5d57baf238949efacc93cfd53ea0ad79e8f21d02480f4694cd21f5a46520dee70dba08`
    }
});
export default axiosInstance;
import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'http://192.168.56.128:1337/api/',
    headers:{
        'Authorization': `Bearer 8904cc6c80b5954c1e89dc36c77ec2120dd4938a9339b56d3a72666d81cb67677d66ba32cf52af69e9a31179e879f055c54b0c8229f852f914680fad3077e38c6422ba1897fd2e59088d359e5deef086723770546379901b06f6470befe2748c9dfbc5a6691064b162de73d83a33b28c3ef5dafc9fad472e1015da7fbc26166f`
    }
});
export default axiosInstance;
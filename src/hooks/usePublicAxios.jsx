import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://bodyflex-hub.vercel.app"
})

const usePublicAxios = () =>{
    return axiosPublic;
}
export default usePublicAxios;
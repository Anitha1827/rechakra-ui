import axios from "axios"

// let api_url = "https://rechakra-api.vercel.app/api";

let api_url = "http://localhost:8000/api"

//signup function
const signup = async(data) => {
    try {
        let response = await axios.post(`${api_url}/auth/signup`, data);
        if(response.data.token){
            localStorage.setItem("token",response.data.token)
        }
        return response.data;
    } catch (error) {
        console.log(error)
        alert("try again later!")
    }
}

//Login function
const login = async(data) =>{
    try {
        let response = await axios.post(`${api_url}/auth/login`, data);
        if(response.data.token){
            localStorage.setItem("token",response.data.token)
        }
        return response.data;
    } catch (error) {
        console.log(error)
        alert("try again later!")
    }
}

export {signup, login}
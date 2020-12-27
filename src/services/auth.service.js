import axios from 'axios'

const API_URL = "https://kai-pma-data.herokuapp.com/api/"

class AuthService {
    
   login(data) {
        let formData = {email: data.email, password: data.password}        
        return axios.post(API_URL + 'login',formData )
        .then(res => {
            if (res.data.token) {
              localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        })
        .catch(err => {
            // console.log(err)
            return err
        })
    }
    
    logout() {
        localStorage.removeItem("user")
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
          username,
          email,
          password
        })
      }
    
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}

export default new AuthService()
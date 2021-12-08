import constants from "../configs/constants.js"
export default class UserService{
    static async CreateUserAccount(name, email, password, gender, country_id) {
        let response = await fetch(constants.API_URL  + "/v1/users/account", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_name: name,
                user_email: email,
                user_password: password,
                user_gender: gender,
                country_id
            })
        });

       
        response = await response.json()  
        return response;
    }

    static async LoginAccount(email, password) {
        let response = await fetch(constants.API_URL  + "/v1/users", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                user_email: email,
                user_password: password
            })
        });

       
        response = await response.json()  
        return response;
    }
}
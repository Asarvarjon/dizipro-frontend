import Header from "../../components/Header/Header"
import "./Login.scss";
import BeeImage from "../../assets/images/bee.png"
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import UserService from "../../services/UserService";
import { useAuth } from "../../contexts/AuthContext";

export default function Login(){
    const [token, setToken] = useAuth()
    const submit = async(event) => {
        event.preventDefault()

        const email = event.target[0].value
        const password = event.target[1].value
        if(!(email && password)) {
            return
        }

        let response = await UserService.LoginAccount(email, password);
        
        
        if(response?.data?.token) {
            setToken(response.data.token)
        }

    }
    return (
        <div className="login">
            <Header/>

           <section className="login__main-section">
                <img className="login__bee-image" src={BeeImage} alt="bee" />

            <div className="login__form-wrapper">
            <form onSubmit={submit} className="login__form">
                    <h2 className="login__title">
                        Login
                    </h2> 

                    <div className="login__form__inputs">
                        <Input placeholder="Email" type="email" required name="email"/> 
                        <Input placeholder="Password" type="password" required name="password"/>
                    </div>  

                    <Link className="login__form__forgot-password-link" to="/forgot-password">Forgot your password?</Link>

                    <Button>Login</Button>

                    <div className="login__form__signup-text-wrapper">
							<p>Don’t have an account? </p>

							<Link
								className="login__form__forgot-password-link"
								to="/registration"
							>
								Sign up
							</Link>
					</div>
            </form>
            </div>
           </section>
        </div>
    )
}
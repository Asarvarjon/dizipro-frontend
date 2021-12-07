import Header from "../../components/Header/Header"
import "./Registration.scss";
import BeeImage from "../../assets/images/bee.png"
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Registration(){
    return (
        <div className="registration">
            <Header/>

           <section className="registration__main-section">
                <img className="registration__bee-image" src={BeeImage} alt="bee" />

            <div className="registration__form-wrapper">
            <form className="registration__form">
                    <h2 className="registration__title">
                        Sign up
                    </h2> 

                    <div className="registration__form__inputs">
                        <Input placeholder="Email" type="email" required name="email"/> 
                        <Input placeholder="Password" type="password" required name="password"/>
                    </div>  

                    <Link className="registration__form__forgot-password-link" to="/forgot-password">Forgot your password?</Link>

                    <Button>Register</Button>

                    <div className="registration__form__signup-text-wrapper">
							<p>Do you have an account? </p>

							<Link
								className="registration__form__forgot-password-link"
								to="/login"
							>
								Login
							</Link>
					</div>
            </form>
            </div>
           </section>
        </div>
    )
}
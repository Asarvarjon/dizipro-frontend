import Header from "../../components/Header/Header"
import "./Registration.scss";
import BeeImage from "../../assets/images/bee.png"
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useState } from "react";

export default function Registration(){

    const [countries, setCountries] = useState(["Uzbekistan", "Russia"])
    const [countryError, setCountryError] = useState(false) 

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
                        <Input placeholder="Your name" type="text" required name="name"/>
                        <Input placeholder="Email" type="email" required name="email"/> 
                        <Input placeholder="Password" type="password" required name="password"/>
                    </div>  

                    <div className="registration__gender_radio">
                        <p className="registration__gender-title">Gender</p>

                       <div className="registration__gender-wrapper">
                       <label className="registration__gender-item">
                            <input type="radio" name="gender" />
                            <p className="">Male</p>
                        </label>

                        <label className="registration__gender-item">
                            <input type="radio" name="gender" />
                            <p className="">Female</p>
                        </label>
                       </div>
                    </div>

                    <div className="registration__form__inputs">
                        <Input 
                            onChange={(event) => {
                                if(!countries.find(e => e === event.target.value)) {
                                    setCountryError(true)
                                } else {
                                    setCountryError(false)
                                }
                            }}
                        type="text" error={countryError ? "true" : ""} placeholder="Country" name="country" list="data" />


                        <p className="registration__terms">
                             By clicking Create account, I agree that I have read and accepted the <Link
								className="registration__form__forgot-password-link"
								to="/terms"
							>Terms of Use </Link> and  <Link
                            className="registration__form__forgot-password-link"
                            to="/privacy"
                        > Privacy policy </Link>
                        </p>
                    </div>

                    <datalist id="data">
                       <option value="Uzbekistan">Uzbekistan</option>
                        {countries.length && countries.map((item, key) => {
                             return (
                                <option key={key} value={item}>{item}</option>
                             )
                        })}
                       
                    </datalist>

                    <Link className="registration__form__forgot-password-link" to="/forgot-password">Forgot your password?</Link>

                    <Button>Next</Button>

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
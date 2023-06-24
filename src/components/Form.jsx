import { useState } from "react";
import validation from "../Validation";

const Form =() => {
    const [errors, setErrors] = useState ({});
    const [ userData, setUserData] = useState ({
       email: '',
       password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
             [event.target.name]: event.target.value
       
         })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value

        }))

    }

    return(
        <font>
            <label htmlFor="email>">Email: </label>
            <input type="text" name='email' value={userData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <hr/>
            <label htmlFor="password:" ></label>
            <input type="text" name="password" value={userData.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
            <button>Submit</button>
            
            </font>

)   
}
export default Form;
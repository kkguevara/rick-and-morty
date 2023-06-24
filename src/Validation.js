const validation = (userData) => {
    const errors = {};
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email= 'email incorrecto';
    }
    if (!userData.email){
        errors.email= 'debe ingresar un email';
    }

    if(userData.email.length > 35){
        errors.email = 'no superar los 35 caracteres'
    }
    if (!/.*\d+.*/.test(userData.password)){
        errors.password = 'la contraseña de contener al menos un caracteres especial'
    }
    if (userData.password.length < 6 || userData.password.length >10){
        errors.email.password= 'la contraseña de contener entre 6 y 10 caracteres'
    }
    return errors;
}

export default validation
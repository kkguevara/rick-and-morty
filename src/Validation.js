const validation = (userData) => {
    const errors = {};
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(userData.email)){
        errors.email= 'email incorrecto';
    }
    if (!userData.email){
        errors.email= 'debe ingresar un email';
    }

    if(userData.email.length > 35){
      errors.email = 'no superar los 35 caracteres'
    }
    if (!/.*\d+.*/.test(userData.password)){
        errors.password = 'la contraseña debe contener al menos un numero'
    }
    if (userData.password.length < 6 || userData.password.length >10){
        errors.password = 'la contraseña debe contener entre 6 y 10 caracteres'
    }
    return errors;
}

export default validation
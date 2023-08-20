const container = document.querySelector('.container'),
      pwShowHide = document.querySelectorAll('.showHidePw'),
      pwFields = document.querySelectorAll('.password'),
      signUp = document.querySelector('.signup__link'),
      login = document.querySelector('.login__link');

    //   Código para mostrar la contraseña y cambiar el ícono
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener('click', ()=> {
            pwFields.forEach(pwfield => {
                if(pwfield.type === 'password'){
                    pwfield.type = 'text';
                    
                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                } else {
                    pwfield.type= "password";

                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })
        })
    })


// Código para hacer que aparezca el formulario de registro o inicio de sesión
signUp.addEventListener('click', () => {
    container.classList.add('active');
})

login.addEventListener('click', () => {
    container.classList.remove('active');
})
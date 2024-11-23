const Validate = (values: { email: string; password: string }): { email?: string; password?: string } => {
    let error: { email?: string; password?: string } = {};
    const validate_email: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validate_password: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    
    if (values.email === '') {
        error.email = 'Email cannot be empty.';
    } else if (!validate_email.test(values.email)) {
        error.email = 'Invalid email.';
    } else {
        error.email = '';
    }

    if (values.password === '') {
        error.password = 'Password cannot be empty.';
    } else if (!validate_password.test(values.password)) {
        error.password = 'Wrong password.';
    } else {
        error.password = '';
    }
    return error;
};

export default Validate;


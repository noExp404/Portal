import { useRef, useState, useEffect } from "react";
import React from "react";
import Success from "./Success";
import './NewApp.css';

const user_regex: RegExp = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pass_regex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]){8,24}$/;

const Register: React.FC = () => {

    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);

    const [user, setUser] = useState<string>('');
    const [validName, setValidName] = useState<boolean>(false);
    const [userFocus, setUserFocus] = useState<boolean>(false);

    const [pswd, setPswd] = useState<string>('');
    const [validPswd, setValidPswd] = useState<boolean>(false);
    const [pswdFocus, setPswdFocus] = useState<boolean>(false);
    
    const [matchPswd, setMatchPswd] = useState<string>('');
    const [validMatch, setValidMatch] = useState<boolean>(false);
    const [validFocus, setValidFocus] = useState<boolean>(false);

    const [err, setErr] = useState<string>('');
    const [succ, setSucc] = useState<boolean>(false);

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        const result = user_regex.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])
    
    useEffect(() => {
        const result = pass_regex.test(pswd);
        console.log(result);
        console.log(pswd);
        const match = pswd === matchPswd;
        setValidMatch(match);
    }, [pswd, matchPswd])

    useEffect(() => {
        setErr('');
    }, [user, pswd, matchPswd])

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
    <>
        <section  className="label-cont">
            <p ref={errRef} className={err ? "errmsg" : "offscreen"} aria-live="assertive">{err}</p>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Email: </label>
                <input 
                type="text" 
                id="name" 
                ref={userRef} 
                autoComplete="off" 
                onChange={(e) => setUser(e.target.value)} 
                required 
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote">
                    4 to 24 characters. <br />
                    Must begin with a letter <br />
                    Letters, numbers, underscores, hyphens are allowed.
                </p>
                <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        onChange = {(e) => setPswd(e.target.value)}
                        value={pswd}
                        required
                        // aria-invalid={validPswd ? "false" : "true"}
                        aria-describedby="pswdnote"
                        onFocus={() => setPswdFocus(true)}
                        onBlur={() => setPswdFocus(false)}
                    />
                    <p id="pwdnote">
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span>!</span> <span>@</span> <span>#</span> <span>$</span> <span>%</span>
                    </p>
                <label htmlFor="addr">Address: </label>
                    <input type="addr" id="addr" placeholder='Address' />
                    <br />
                    <br />
                <label htmlFor="code">Postcode: </label>
                    <input type="code" id="code" placeholder='Postcode' />
                    <br />
                    <br />
                <label htmlFor="city">City: </label>
                    <input type="city" id="city" placeholder='City' />
                    <br />
                    <br />
                <label htmlFor="country">Country: </label>
                    <input type="country" id="country" placeholder='Country' />
                    <br />
                    <br />
                <label htmlFor="email">Name: </label>
                    <input type="text" id="email" placeholder='Email' />
                    <br />
                    <br />
                <label htmlFor="username">Upload ID: </label>
                    <input type="file" id="username" placeholder='Username' />
                <button onClick={() => window.location.href='./success'}>Register</button>
            </form>
        </section>
    </>
    )
};

export default Register;


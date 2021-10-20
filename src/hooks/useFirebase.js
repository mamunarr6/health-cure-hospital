import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [services, setServices] = useState();
    const [doctors, setDoctors] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }

    /* ===========================================
        registration using email 
    ==============================================*/
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be at least 6 characters")
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("password must have two uppercase letter")
            return;
        }
        registerNewUser(email, password);
    }

    const registerNewUser = () => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError("")
                setUserName()
            })
            .catch((error) => {
                setError(error.message);
            }).finally()
    }
    /* ===========================================
          login using email 
      ==============================================*/
    const handleLogin = e => {
        e.preventDefault();
        signINUsingEmail(email, password)
            .catch(error => setError(error.message))

    }
    const signINUsingEmail = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    /* ===================================
        sign In Using Google
    ======================================= */
    const signInUsingGoole = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    /* =========================
            log out user
    =========================== */
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser(null)
            setError("")
        }).catch((error) => {
            setError(error.message)
        }).finally(() => setIsLoading(false))
    }
    /* ========================
        load 
    ========================= */
    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                clearInputs();
            } else {
                setUser("")
            }
            setIsLoading(false)
        });
    }, [])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
        setIsLoading(false)
    }, []);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
        setIsLoading(false)
    }, []);

    return {
        user,
        error,
        services,
        doctors,
        name,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLogin,
        registerNewUser,
        signInUsingGoole,
        logOut,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;
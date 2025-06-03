//import apiDispatcher from '../Dispatcher';
import apiDispatcher from '../Dispatcher/apiDispatcher'; 


const apiStore = {
    user: null,
    async register(user, setMessage) {
        try {
            const result = await apiDispatcher.dispatch({ type: "REGISTER", payload: user });
            setMessage(result.message || "Register success");
        } catch (error) {
            setMessage(error.message || "Registration failed");
        }
    },
    async Login(user, setMessage) {
        try {
            const result = await apiDispatcher.dispatch({ type: "LOGIN", payload: user });
            setMessage(result.message || "Login success");
        } catch (error) {
            setMessage(error.message || "Login failed");
        }
    },
     async signup(user, setMessage) {
        try {
            const result = await apiDispatcher.dispatch({ type: "SIGNUP", payload: user });
            setMessage(result.message || "signup success");
        } catch (error) {
            setMessage(error.message || "signup failed");
        }
    }
};

export default apiStore;

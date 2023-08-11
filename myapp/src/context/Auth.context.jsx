import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const initialState = ({ user: null })
const reducer = (state, action) => {
    switch (action?.type) {
        case "Login":
            return {
                user: action.payload
            }
        case "Logout":
            return{
                user:null
            }
        case "default":
            return state
    }
}

const AuthProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState);
    const router = useNavigate();

    const Login = (userData) =>{
        localStorage.setItem("TodoCurrentUser",JSON.stringify(userData))
        dispatch({
            type:"Login",
            payload:userData
        })
        console.log(userData,"32");
    }

    const Logout = () => {
        localStorage.removeItem("TodoCurrentUser");
        dispatch({
            type:"Logout",
        })
        router("/")
    }

    useEffect(()=>{
        const isUserPresent = JSON.parse(localStorage.getItem("TodoCurrentUser"))
            if(isUserPresent){
                dispatch({
                    type:"Login",
                    payload:isUserPresent
                })
            }
    },[])

    return (
        <AuthContext.Provider value={{state,Login,Logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;


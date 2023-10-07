import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivaterRoute = ({ children }) => {

    const {user,loading }= useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner text-primary loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivaterRoute;
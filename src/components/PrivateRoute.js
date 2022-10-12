import {Outlet, Navigate} from "react-router-dom";

const PrivateRoutes = () => {

    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");

    return (
        <>
            {
                getEmail && getPassword ? <Outlet/>
                    : <Navigate to="/login"/>
            }
        </>

    )
}

export default PrivateRoutes
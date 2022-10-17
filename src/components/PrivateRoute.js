import {Outlet, Navigate} from "react-router-dom";

//purely for wrapping pages (within <Pages /> inside login or not,
// passing email and password as state that user is logged in.
// Could and can do this much better,
// but for now and this purpose I thought it is enough.

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
};

export default PrivateRoutes
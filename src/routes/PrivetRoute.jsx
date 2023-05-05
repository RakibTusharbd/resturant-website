import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation  } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    // const form = location?.state?.pathname || '/';

    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login"></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivetRoute;
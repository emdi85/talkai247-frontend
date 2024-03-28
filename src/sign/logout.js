import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        localStorage.removeItem("auth");
        setTimeout(() => {
            navigate("/login");
        }, 3000);
    }, []);

    return (
        <div className='text-3xl h-screen flex justify-center items-center flex-col'>
            <h1>Logout Successful!</h1>
            <p>You will be redirected to the landing page in 3 seconds...</p>
        </div>
    );
};

export default Logout;

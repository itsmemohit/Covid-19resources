import React from 'react';
import animationlogo from '../Images/Doctorsymbol.gif';

export const LoadingComponent = () => {
    return(
        <div className="col-12">
            <img src={animationlogo} alt="loading..." />
            <p>Loading...</p>
        </div>
    );
}; 

export default LoadingComponent;

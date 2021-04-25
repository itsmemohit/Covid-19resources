import React from 'react';
import animationlogo from '../Images/Doctorsymbol.gif';
import Spinner from 'react-bootstrap/Spinner'

export const LoadingComponent = () => {
    return (
        <div className="col-12">
            <img src={animationlogo} alt="loading..." />
            <p>Loading...</p>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );
};
// You can choose loaders out of these
//https://stackoverflow.com/questions/52708942/how-to-show-a-loading-spinner-until-component-loads-in-react (check out this link - I think this is what we were talking about regarding -loader until data is fetched) 
export default LoadingComponent;

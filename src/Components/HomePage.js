import React from 'react';
import './HomePage.css';
import covidlogo from '../Images/bacteria.png';
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';

function HomePage() {
    return (
        <div className="container">
            <header className="App-header" >
                <h4 className="heading"><strong><img src={covidlogo} alt="covid logo"/> Covid-19 Resources</strong></h4>
            </header>
            <div className="swipeforsm">
                <Button className="button"  outline color="info" size="lg">Oxygen</Button>{' '}
                <Button className="button"  outline color="info" size="lg">Remdesivir</Button>{' '}
                <Button className="button"  outline color="info" size="lg">Ambulance</Button>{' '}
                <Button className="button"  outline color="info" size="lg">Plasma</Button>{' '}
                <Button className="button"  outline color="info" size="lg">Blood Banks</Button>{' '}
                <Button className="button"  outline color="info" size="lg">Meal Services</Button>
                <Button className="button"  outline color="info" size="lg">Quarantine centers</Button>{' '}
                <Button className="button"  outline color="info" size="lg">Cremation/Mortuary</Button>{' '}
                <Button className="button"  outline color="info" size="lg">Sanitization</Button>{' '}
                <Button className="button"  outline color="info" size="lg">Mental Health</Button>{' '}
                <Button className="button"  outline color="info" size="lg">X-Ray</Button>{' '}
                <Button className="button"  outline color="info" size="lg">Homecare</Button>
            </div>
            <p className="swipe .d-none .d-sm-block">Swipe -{'>'} </p>
            <Alert className="disclaimer" color="warning">
            All the information presented on the site is crowd sourced. We are not benefiting from/advertising any organisations mentioned. The availability of 
            resources mentioned is subject to change and may not be verified. Kindly contact the number provided for live updates on the specific resources. 
            Please do not make any financial transactions before verifying everything at your
             end. We are trying our best to help fellow Delhiites during such times and hope and pray for this phase to get over soon! 
             Stay at home and Stay Safe guys!
            </Alert>
        </div>
    )
}

export default HomePage;

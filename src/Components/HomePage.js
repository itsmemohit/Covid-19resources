import React, { useState } from 'react';
import './HomePage.css';
import covidlogo from '../Images/bacteria.png';
import { Button } from 'reactstrap';
import { Alert, Collapse } from 'reactstrap';
// import {LoadingComponent} from './LoadingComponent';
import FetchOxygen from '././Fetch/FetchOxygen';
import MentalServiceData from '././Fetch/FetchMentalService';
import FetchAmbulance from '././Fetch/FetchAmbulance';
import FetchPlasma from '././Fetch/FetchPlasma';
import FetchBlood from '././Fetch/FetchBlood';
import FetchMeal from './Fetch/FetchMeal';
import FetchSanitization from './Fetch/FetchSanitization';
import FetchHomecare from './Fetch/FetchHomecare';
import ReactGa from 'react-ga';
// componentDidMount() {
//     this.setState({profileExist: false})
// setTimeout(() => { 
//       this.setState({profileExist: true})
// }, 1000);
// }

const HomePage = () => {
    const [boxOpen, setOpen] = useState(false);
    const [boxOpenrem, setOpenrem] = useState(false);
    const [boxOpenamb, setOpenamb] = useState(false);
    const [boxOpenpla, setOpenpla] = useState(false);
    const [boxOpenblo, setOpenblo] = useState(false);
    const [boxOpenmea, setOpenmea] = useState(false);
    // const [boxOpenqua, setOpenqua] = useState(false);
    // const [boxOpencre, setOpencre] = useState(false);
    const [boxOpensan, setOpensan] = useState(false);
    const [boxOpenmen, setOpenmen] = useState(false);
    const [boxOpenhom, setOpenhom] = useState(false);

    // const onClick = () => {(setTimeout(() =>{


    //     setOpen(!boxOpen);

    // },10000));
    const onClick = () => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/oxygen');
        setOpen(!boxOpen);
        setOpenrem(false);
        setOpenamb(false);
        setOpenpla(false);
        setOpenblo(false);
        setOpenmea(false);
        // setOpenqua(false);
        // setOpencre(false);
        setOpensan(false);
        setOpenmen(false);
        setOpenhom(false);
    }
    const onClickrem = () => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/remdisvir');
        setOpenrem(!boxOpenrem);
        setOpen(false);
        setOpenamb(false);
        setOpenpla(false);
        setOpenblo(false);
        setOpenmea(false);
        // setOpenqua(false);
        // setOpencre(false);
        setOpensan(false);
        setOpenmen(false);
        setOpenhom(false);
    }
    const onClickamb = () => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/ambulance');
        setOpenamb(!boxOpenamb);
        setOpen(false);
        setOpenrem(false);
        setOpenpla(false);
        setOpenblo(false);
        setOpenmea(false);
        // setOpenqua(false);
        // setOpencre(false);
        setOpensan(false);
        setOpenmen(false);
        setOpenhom(false);
    }
    const onClickpla = () => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/plasma');
        setOpenpla(!boxOpenpla);
        setOpen(false);
        setOpenrem(false);
        setOpenamb(false);
        setOpenblo(false);
        setOpenmea(false);
        // setOpenqua(false);
        // setOpencre(false);
        setOpensan(false);
        setOpenmen(false);
        setOpenhom(false);
    }
    const onClickblo = () => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/blood');
        setOpenblo(!boxOpenblo);
        setOpen(false);
        setOpenrem(false);
        setOpenamb(false);
        setOpenpla(false);
        setOpenmea(false);
        // setOpenqua(false);
        // setOpencre(false);
        setOpensan(false);
        setOpenmen(false);
        setOpenhom(false);
    }
    const onClickmea = () => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/meal');
        setOpenmea(!boxOpenmea);
        setOpen(false);
        setOpenrem(false);
        setOpenamb(false);
        setOpenpla(false);
        setOpenblo(false);
        // setOpenqua(false);
        // setOpencre(false);
        setOpensan(false);
        setOpenmen(false);
        setOpenhom(false);
    }
    // const onClickqua = () => {
    //     setOpenqua(!boxOpenqua);
    //     setOpen(false);
    //     setOpenrem(false);
    //     setOpenamb(false);
    //     setOpenpla(false);
    //     setOpenblo(false);
    //     setOpenmea(false);
    //     setOpencre(false);
    //     setOpensan(false);
    //     setOpenmen(false);
    //     setOpenhom(false);
    // }
    // const onClickcre = () => {
    //     setOpencre(!boxOpencre);
    //     setOpen(false);
    //     setOpenrem(false);
    //     setOpenamb(false);
    //     setOpenpla(false);
    //     setOpenblo(false);
    //     setOpenmea(false);
    //     // setOpenqua(false);
    //     setOpensan(false);
    //     setOpenmen(false);
    //     setOpenhom(false);
    // }
    const onClicksan = () => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/sanitisation');
        setOpensan(!boxOpensan);
        setOpen(false);
        setOpenrem(false);
        setOpenamb(false);
        setOpenpla(false);
        setOpenblo(false);
        setOpenmea(false);
        // setOpenqua(false);
        // setOpencre(false);
        setOpenmen(false);
        setOpenhom(false);
    }
    const onClickmen = () => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/mentalhealth');
        setOpenmen(!boxOpenmen);
        setOpen(false);
        setOpenrem(false);
        setOpenamb(false);
        setOpenpla(false);
        setOpenblo(false);
        setOpenmea(false);
        // setOpenqua(false);
        // setOpencre(false);
        setOpensan(false);
        setOpenhom(false);
    }
    const onClickhom = () => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/homecare');
        setOpenhom(!boxOpenhom);
        setOpen(false);
        setOpenrem(false);
        setOpenamb(false);
        setOpenpla(false);
        setOpenblo(false);
        setOpenmea(false);
        // setOpenqua(false);
        // setOpencre(false);
        setOpensan(false);
        setOpenmen(false);
    }


    return (
        <div className="container">
            <header className="App-header" >
                <h4 className="heading"><strong><img src={covidlogo} alt="covid logo" /> Covid-19 Resources</strong></h4>
            </header>
            <div className="swipeforsm">
                <Button className="button" outline color="info" size="lg" onClick={onClick}>Oxygen/Oxygen Beds/ICU Beds</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={onClickrem} >Remdesivir/Tocilizumab</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={onClickamb}>Ambulance</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={onClickpla}>Plasma</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={onClickblo}>Blood Banks</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={onClickmea}>Meal Services</Button>{' '}
                {/* <Button className="button" outline color="info" size="lg" onClick={onClickqua}>Quarantine centers</Button>{' '} */}
                {/* <Button className="button" outline color="info" size="lg" onClick={onClickcre}>Cremation/Mortuary</Button>{' '} */}
                <Button className="button" outline color="info" size="lg" onClick={onClicksan}>Sanitization</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={onClickmen}>Mental Health</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={onClickhom}>Homecare</Button>
            </div>
            <p className="swipe .d-none .d-sm-block">Swipe -{'>'} </p>
            <Collapse className="Collapsedboxes" isOpen={boxOpen}>
                <div>
                    {/* <LoadingComponent/> */}
                    <FetchOxygen />
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={boxOpenrem}>
                <div>
                    {/* <LoadingComponent/> */}
                    {/* <Data /> */}
                    {/* <FetchOxygen /> */}
                    <Alert className="disclaimer" color="danger">
                    According to <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1713329" target="_blank" rel="noopener noreferrer">Government Policies</a> Remdesivir can only be sold to private and state COVID hospitals. 
                    Keeping with this, we have revised our directory.
                    </Alert>
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={boxOpenamb}>
                <div>
                    {/* <LoadingComponent/> */}
                    {/* <Data /> */}
                    <FetchAmbulance />
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={boxOpenpla}>
                <div>
                    {/* <LoadingComponent/> */}
                    {/* <Data /> */}
                    <FetchPlasma />
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={boxOpenblo}>
                <div>
                    {/* <LoadingComponent/> */}
                    {/* <Data /> */}
                    <FetchBlood />
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={boxOpenmea}>
                <div>
                    {/* <LoadingComponent/> */}
                    {/* <Data /> */}
                    <FetchMeal />
                </div>
            </Collapse>
            {/* <Collapse className="Collapsedboxes" isOpen={boxOpenqua}>
                <div>
                    <LoadingComponent/> 
                 <Data />
                </div>
            </Collapse> */}
            
            {/* <Collapse className="Collapsedboxes" isOpen={boxOpencre}>
                <div>
                    <LoadingComponent/>
                     <Data />
                </div>
            </Collapse> */}
            <Collapse className="Collapsedboxes" isOpen={boxOpensan}>
                <div>
                    {/* <LoadingComponent/> */}
                    {/* <Data /> */}
                    <FetchSanitization />
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={boxOpenmen}>
                <div>
                    {/* <LoadingComponent/> */}
                    <MentalServiceData />
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={boxOpenhom}>
                <div>
                    {/* <LoadingComponent/> */}
                    <FetchHomecare />
                </div>
            </Collapse>
            <Alert className="disclaimer" color="warning">
                All the information presented on the site is crowd sourced. We are not benefiting from/advertising any organisations mentioned. The availability of
                resources mentioned is subject to change and may not be verified. Kindly contact the number provided for live updates on the specific resources.
                Please do not make any financial transactions before verifying everything at your
                end. We are trying our best to help people of Delhi and NCR during such times and hope and pray for this phase to get over soon!
                Stay at home and Stay Safe guys!
            </Alert>
        </div>
    )
}

export default HomePage;

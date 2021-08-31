import React, { useState, useEffect, useMemo } from 'react';
import Papa from "papaparse";
import './HomePage.css';
import covidlogo from '../Images/bacteria.png';
import { Button } from 'reactstrap';
import { Alert, Collapse } from 'reactstrap';
import FetchOxygen from '././Fetch/FetchOxygen';
import MentalServiceData from '././Fetch/FetchMentalService';
import FetchAmbulance from '././Fetch/FetchAmbulance';
import FetchPlasma from '././Fetch/FetchPlasma';
import FetchBlood from '././Fetch/FetchBlood';
import FetchMeal from './Fetch/FetchMeal';
import FetchSanitization from './Fetch/FetchSanitization';
import FetchHomecare from './Fetch/FetchHomecare';
import ReactGa from 'react-ga';

const Home = () => {
    const [boxOpen, setOpen] = useState(false);
    const [resourceType, setResourceType] = useState('');
    const [data, setData] = useState([]);

    const fetchData = useMemo(() => {
        return (token) => {
            ReactGa.initialize('G-121EBY7E67');
            ReactGa.pageview('/meal');
            Papa.parse(`https://docs.google.com/spreadsheets/d/e/${token}/pub?output=csv`, {
                download: true,
                header: true,
                complete: function (results) {
                    var data = results.data;
                    setData(data);
                }
            });
        }
    }, [data])

    useEffect(() => {
        switch (resourceType) {
            case 'OXYGEN':
                fetchData('2PACX-1vR9Wl51HrWm0xUaMnLM3Rrf0NbWtvxgopjn4kW_fzhu4084acWcJMSY4Zpo6LteUqgNZP-9PfLI9EOH');
                break;
            case 'AMBULANCE':
                fetchData('2PACX-1vRpNTLSKoydhMVj_MeCacl70pC4qYoDaWdXQxpogkumxPabmzlNY0FOqN1Wj-NMm_YuEWe58YSonY2n');
                break;
            case 'PLASMA':
                fetchData('2PACX-1vS4KYTO74RQVSClNrHa0-B7I9QySl2ztOlerIY0nSRyw4GKdBGs6l6LeAeMq5eFgJ_gKoCjdOr-WWxb');
                break;
            case 'BLOODBANK':
                fetchData('2PACX-1vTqdMqYWZp81cFdm11mfeGgXyGWBP5EdWa_j7-wIDvGnZ09u_aSvXXtikEDjMesU8nfGcCC5uLHu7Rt');
                break;
            case 'MEALSERVICE':
                fetchData('2PACX-1vRU_IlIZaGY_Ez-gab-QzP7_DRu1rXmaCzt77FlA5R7LwIOLiL_ngf8ZWIP81A58Gp0VtrSsmHpSG4_');
                break;
            case 'SANITIZATION':
                fetchData('2PACX-1vQldma2RcxiDpPIwZoSUFW0KWELWwMUKD_QLfBanV9t-xn03EVMfD9Y95MezKw3S7_cPf_ZjlmCLV_a');
                break;
            case 'MENTALHEALTH':
                fetchData('2PACX-1vSHSE1BbxvobhJdYCg3z18Sf2q8As3OfMluZrdZdnMWBb14V9ncue2ZsZlK13P2L5DJxvHOYVW1xk12');
                break;
            case 'HOMECARE':
                fetchData('2PACX-1vRkKTEcNbplfR8mmA0ENeGJSbBgOY3zTpkFBaC8qL5HKX6H9Ik5y8BNa6-VL-s7QA2iTURooGdf4mIT');
                break;
            default:
                break;
        }
    }, [resourceType]);


    return (
        <div className="container">
            <header className="App-header" >
                <h4 className="heading"><strong><img src={covidlogo} alt="covid logo" /> Covid-19 Resources</strong></h4>
            </header>
            <div className="swipeforsm">
                <Button className="button" outline color="info" size="lg" onClick={() => setResourceType('OXYGEN')}>Oxygen/Oxygen Beds/ICU Beds</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={() => setResourceType('REM')} >Remdesivir/Tocilizumab</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={() => setResourceType('AMBULANCE')}>Ambulance</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={() => setResourceType('PLASMA')}>Plasma</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={() => setResourceType('BLOODBANK')}>Blood Banks</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={() => setResourceType('MEALSERVICE')}>Meal Services</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={() => setResourceType('SANITIZATION')}>Sanitization</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={() => setResourceType('MENTALHEALTH')}>Mental Health</Button>{' '}
                <Button className="button" outline color="info" size="lg" onClick={() => setResourceType('HOMECARE')}>Homecare</Button>
            </div>
            <p className="swipe .d-none .d-sm-block">Swipe -{'>'} </p>
            <Collapse className="Collapsedboxes" isOpen={true}>
                <div>
                    {resourceType === 'OXYGEN' ?
                        <FetchOxygen data={data} /> : null}
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={true}>
                {resourceType === 'REM' ? <div>
                    <Alert className="disclaimer" color="danger">
                        According to <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1713329" target="_blank" rel="noopener noreferrer">Government Policies</a> Remdesivir can only be sold to private and state COVID hospitals.
                        Keeping with this, we have revised our directory.
                    </Alert>
                </div> : null}
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={true} >
                <div>
                    {resourceType === 'AMBULANCE' ?
                        <FetchAmbulance data={data} /> : null}
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={true}>
                <div>

                    {resourceType === 'PLASMA' ?
                        <FetchPlasma data={data} /> : null}
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={true}>
                <div>

                    {resourceType === 'BLOODBANK' ?
                        <FetchBlood data={data} /> : null}
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={true}>
                <div>

                    {resourceType === 'MEALSERVICE' ?
                        <FetchMeal data={data} /> : null}
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={true}>
                <div>

                    {resourceType === 'SANITIZATION' ?
                        <FetchSanitization data={data} /> : null}
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={true}>
                <div>

                    {resourceType === 'MENTALHEALTH' ?
                        <MentalServiceData data={data} /> : null}
                </div>
            </Collapse>
            <Collapse className="Collapsedboxes" isOpen={true}>
                <div>

                    {resourceType === 'HOMECARE' ?
                        <FetchHomecare data={data} /> : null}
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

export default React.memo(Home);


import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';
import covidlogo from '../Images/officer.png';

const FooterPage = () => {
    return (
        <MDBFooter color="blue" className=" footer-copyright font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title"><img height="40px" width="40px" src={covidlogo} alt="covid logo" />   Covid Resources</h5>
                        <p>
                            A Crowdsourced list of Covid-19 Essentials and Updates for Delhi and NCR
                        </p>
                    </MDBCol>
                    <MDBCol md="3" className="Brand" >
                        <h5 className="title">&nbsp;&nbsp;&nbsp;Become a Volunteer</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a className="Brand" href="https://forms.gle/jLBperRCcYqUBXsn8" target="_blank" rel="noopener noreferrer">Doctor Volunteer Form </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </li>
                            <li className="list-unstyled ">
                                <a className="Brand" href="https://forms.gle/sEp6x24eYT9eUbtb9" target="_blank" rel="noopener noreferrer">Covid-19 Service Form </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </li>
                            <li className="list-unstyled">
                                <a className="Brand" href="https://forms.gle/D6fzVbJww7qan4zu9" target="_blank" rel="noopener noreferrer">Volunteer Registration </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title ">&nbsp;&nbsp;&nbsp;&nbsp;Follow Us</h5>
                        <ul>
                            <li className="list-unstyled ">
                                <a className="Brand" style={{ textAlign: "right" }} md="3" href="https://www.instagram.com/covidresources.tech" target="_blank" rel="noopener noreferrer">Instagram </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </li>
                            <li className="list-unstyled">
                                <a className="Brand" href="https://www.instagram.com/mohit_0404/" target="_blank" rel="noopener noreferrer">Instagram - Creator </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className=" text-center py-3">
                <MDBContainer fluid>
                    Made by <a className="Brand" href="https://www.linkedin.com/in/mohit-dangwal-a17909171/" style={{ color: "#072F5F" }}> Mohit </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;





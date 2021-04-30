import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import { Table } from 'reactstrap';
import './data.css';
import ReactGa from 'react-ga';

const FetchSanitization = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/sanitisation');
        Tabletop.init({
            key: "1MORv-Be4HthU1Z_xO6NRSSsTx0ve9JniPboODz-CYE0",
            simpleSheet: true
        })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
    }, []);

    return (
        <>
            {data.map((item, i) => (
                <Fragment key={i}>
                    <Table bordered className="tabledata">

                        <thead>
                            <tr>
                                <th>Name of Service</th>
                                <td>{item.Service}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Contact Person</th>
                                <td>{item.Name}</td>

                            </tr>
                            <tr>
                                <th scope="row">Contact Number</th>
                                <td style={{color:"blue"}}>{item.Number}</td>
                                
                            </tr>

                            <tr>
                                <th scope="row">Status</th>
                                <td><a href={item.Status}>{item.Website}</a></td>

                            </tr>
                            <tr>
                                <th scope="row">Area</th>
                                <td>{item.Area}</td>

                            </tr>
                            
                            <tr>
                                <th scope="row">Verified At</th>
                                <td datatype="number">{item.VerifiedAt}</td>

                            </tr>

                        </tbody>
                    </Table>

                </Fragment>
            ))}
        </>
    );
}

export default FetchSanitization;
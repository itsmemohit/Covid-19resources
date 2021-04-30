import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import { Table } from 'reactstrap';
import './data.css';
import ReactGa from 'react-ga';

const FetchAmbulance = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/ambulance')
        Tabletop.init({
            key: "1VjtZ7k5isT5w-bsmyrx7-Of2c3QTR8u_Cj7FY7BCmbM",
            simpleSheet: true
        })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
    }, []);
    let a = "8745869599";
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

                                <td style={{ color: "blue" }}>{item.Number}</td>

                            </tr>

                            <tr>
                                <th scope="row">Website</th>
                                <td><a href={item.Website}>{item.Website}</a></td>

                            </tr>
                            <tr>
                                <th scope="row">Area</th>
                                <td>{item.Area}</td>

                            </tr>
                            <tr>
                                <th scope="row">Comments</th>
                                <td datatype="number">{item.Comments}</td>

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

export default FetchAmbulance;
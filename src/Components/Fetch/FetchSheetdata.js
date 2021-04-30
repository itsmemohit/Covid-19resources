import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import { Table } from 'reactstrap';
import './data.css';
import ReactGa from 'react-ga';

const Data = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        ReactGa.initialize('G-121EBY7E67');
        ReactGa.pageview('/data')
        Tabletop.init({
            key: "1_2kyqoKPI2gD4dk0HeeJ0tssoDYrUAcZxN9EnLrTzw0",
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
                                <th scope="row">Contact</th>
                                <td style={{color:"blue"}}>{item.Number}</td>

                            </tr>
                            <tr>
                                <th scope="row">Area</th>
                                <td>{item.area}</td>

                            </tr>
                            <tr>
                                <th scope="row">Contact Person</th>
                                <td>{item.Name}</td>

                            </tr>
                            <tr>
                                <th scope="row">Website</th>
                                <td>{item.EmailWebsite}</td>

                            </tr>
                            <tr>
                                <th scope="row">Status</th>
                                <td>Available</td>

                            </tr>
                            <tr>
                                <th scope="row">Last Verified</th>
                                <td>NA</td>

                            </tr>

                        </tbody>
                    </Table>
                </Fragment>
            ))}
        </>
    );
}

export default Data;
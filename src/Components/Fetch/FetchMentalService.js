import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import { Table } from 'reactstrap';
import './data.css';

const MentalServiceData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "1z8kK-EYXCPfpg9q1G8lO3O4A8Tea8raIpB8HiOW06p4",
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
                                <th scope="row">Instagram</th>
                                <td><a href={item.Instagramhandle}>{item.Instagramhandle}</a></td>

                            </tr>

                            <tr>
                                <th scope="row">Website</th>
                                <td><a href={item.Website}>{item.Website}</a></td>

                            </tr>
                            <tr>
                                <th scope="row">Status</th>
                                <td>Available</td>

                            </tr>
                            <tr>
                                <th scope="row">Fees</th>
                                <td datatype="number">{item.Fees}</td>

                            </tr>


                        </tbody>
                    </Table>

                </Fragment>
            ))}
        </>
    );
}

export default MentalServiceData;
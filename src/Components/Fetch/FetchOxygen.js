import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import { Table } from 'reactstrap';
import './data.css';

const FetchOxygen = ( ) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "1AUuuoNUQgSkUCtxcxRUL481kczF7AjTJBLVNS6hV-as",
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
                                <td>{item.Name}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Contact</th>
                                <td datatype="number">{item.Contact}</td>

                            </tr>
                            <tr>
                                <th scope="row">Service/Status</th>
                                <td>{item.Service}</td>

                            </tr>
                            <tr>
                                <th scope="row">Area</th>
                                <td>{item.Area}</td>

                            </tr>
                            <tr>
                                <th scope="row">Last Verified</th>
                                <td>{item.LastVerified}</td>

                            </tr>
                            
                        </tbody>
            </Table>
            
            </Fragment>
            ))}
        </>
    );
}

export default FetchOxygen;
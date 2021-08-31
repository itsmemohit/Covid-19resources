import React, { Fragment } from "react";
import { Table } from 'reactstrap';
import './data.css';

const FetchOxygen = ({ data }) => {

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
                                <th scope="row">Contact Number</th>
                                <td style={{ color: "blue" }}>{item.Number}</td>

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

export default React.memo(FetchOxygen);
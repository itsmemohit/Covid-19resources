import React, { Fragment } from "react";
import { Table } from 'reactstrap';
import './data.css';

const FetchAmbulance = ({ data }) => {

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

export default React.memo(FetchAmbulance);
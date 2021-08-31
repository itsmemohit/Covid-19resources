import React, { Fragment } from "react";
import Papa from "papaparse";
import { Table } from 'reactstrap';
import './data.css';

const FetchMeal = ({ data }) => {

    console.log("meal", data);
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
                                <th scope="row">Comments</th>
                                <td>{item.Comment}</td>

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

export default React.memo(FetchMeal);
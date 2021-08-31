import React, { Fragment } from "react";
import Papa from 'papaparse';
import { Table } from 'reactstrap';
import './data.css';

const MentalServiceData = ({ data }) => {

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
<script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
export default React.memo(MentalServiceData);
import React from 'react';
import { Table, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read () {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                setApiData(response.data);
            })
    })

    const handleUpdate = (data) => {
        let {id, firstName, lastName, checkBox} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkBox);
    };

    const handleDelete = (id) => {
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
     .then(() => {
        getData();
    })
}

    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((getData) => {
                 setApiData(getData.data);
             })
    };

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkBox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Table.Cell>
                                    <Link to = '/update'><Button onClick={()=>handleUpdate(data)}>Update</Button></Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link><Button onClick={()=>handleDelete(data.id)}>Delete</Button></Link>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>


        </div>
    )
}

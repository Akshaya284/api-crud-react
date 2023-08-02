import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    const [id, setId] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkBox, setCheckBox] = useState(false);

    useEffect(()=> {
        setId(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name')); 
        setCheckBox(localStorage.getItem('Checkbox Value'))
    }, []);

    const handleUpdate =()=> {
      axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        checkBox
      }).then(()=>{
        navigate('/read')
      })
    };

    const navigate = useNavigate();

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckBox(!checkBox)} checked={checkBox}/>
                </Form.Field>
                <Button type='submit' onClick={handleUpdate}>Update</Button>
            </Form>
        </div>
    )
}
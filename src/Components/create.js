import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkBox, setCheckBox] = useState(false);

    const postData = () => {
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkBox
        }).then(()=>{
            navigate('/read')
        })
        console.log(firstName, 'firstName');
        console.log(lastName, 'lastName');
        console.log(checkBox, 'checkBox');
    };

    let navigate = useNavigate();

    return (
        <Form className='create-form'>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' type='text' onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' type='text' onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckBox(!checkBox)} />
            </Form.Field>
            <Button type='submit' onClick={postData}>Submit</Button>
        </Form>
    );
}
export default Create;
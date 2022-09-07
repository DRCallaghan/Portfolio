import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../components/assets/form.css';

const Contact = () => {
    // form state variables for data management for the mutation
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // error message state variables
    const [errorMessage, setErrorMessage] = useState('')

    // handle change function for the form inputs and their state values
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // logic here to email me or otherwise get the message to me
        setFormState({ name: '', email: '', message: '' });
        setErrorMessage('');
        window.location.reload();
    }

    // handle blur function to display error messages in case the user navigates to another app while inputting data
    const handleBlur = (e) => {
        e.preventDefault();

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if ((inputType === 'name') && (!inputValue.length)) {
            setErrorMessage('Please enter your name');
            console.log(setErrorMessage);
        }
        if ((inputType === 'email') && (!inputValue.length)) {
            setErrorMessage('Please enter your email');
            console.log(setErrorMessage);
        }
        if ((inputType === 'email') && (!inputValue.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/))) {
            setErrorMessage('Make sure your email is valid')
        }
        if ((inputType === 'message') && (!inputValue.length)) {
            setErrorMessage('Please include a message');
            console.log(setErrorMessage);
        }
    };

    // returning the add team button which displays the modal with form inside
    const styles = {
        textStyle: {
            color: 'red',
            fontSize: 'large'
        },
        buttonStyle: {
            color: '#14397d'
        }
    };

    return (
        <main>
            <Header />
            <div className="flex-row justify-center form">
                <div className="col-12 col-md-6 my-3">
                    <Form className='form textbox'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='info'>Your Name</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                name='name'
                                placeholder="Jane Smith"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={formState.name}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='info'>Email</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                name='email'
                                placeholder="example@mail.com"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={formState.email}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='info'>Message</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                name='message'
                                placeholder="Your message here"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={formState.message}
                                autoFocus
                            />

                        </Form.Group>
                        <div style={styles.textStyle}>
                            {errorMessage && (<div className="error-text">{errorMessage}</div>)}
                        </div>
                        <Button style={styles.buttonStyle} className='button-save btn btn-light m-2 ' variant="primary" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Form>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Contact;
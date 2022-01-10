import * as Yup from 'yup';

import {
    Container,
    Row,
    Col,
    Button,
    Form,
} from 'react-bootstrap';
import { useAuth } from '../utils/Auth';
import { Formik } from 'formik';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const schema = Yup.object().shape({
    username: Yup.string()
        .min(2, "username must have at least 2 characters")
        .max(15, "username can't be longer than 15 characters")
        .required(),
    email: Yup.string()
        .email("must be a valid email address")
        .max(100, "email must be less than 100 characters")
        .required(),
    password: Yup.string()
        .min(8, "password must be at least 8 characters")
        .required(),
    passwordConfirmation: Yup.string()
        .test('passwords-match', 'passwords must match', function(value) {
            return this.parent.password === value;
        }),
});

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";

    const signup = values => {
        auth.signup(values, () => {
            navigate(from, { replace: true });
        });
    }

    return (
        <Container>
            <Row className="">
                <Col md />
                <Col md>
                    <Formik
                        validationSchema={schema}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                signup(values);
                                actions.setSubmitting(false);
                            }, 1000)
                        }}
                        initialValues={{
                            username: '',
                            email: '',
                            password: '',
                            passwordConfirmation: '',
                        }}                        
                    >{({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched, 
                        isValid, 
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={values.username}
                                    onChange={handleChange}
                                    isValid={touched.username && !errors.username}
                                    isInvalid={!!errors.username}                                    
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    type={showPassword?"text":"password"}
                                    name="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    type={showPassword?"text":"password"}
                                    name="passwordConfirmation"
                                    placeholder="Confirm Password"
                                    value={values.passwordConfirmation}
                                    onChange={handleChange}
                                    isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                                    isInvalid={!!errors.passwordConfirmation}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.passwordConfirmation}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Show Password" value={showPassword} onChange={(e) => setShowPassword(e.target.checked)}/>
                            </Form.Group>
                            <Button variant="primary" type='submit'>Sign Up</Button>
                        </Form>
                    )}
                    </Formik>
                    <p>Already registered? <Link to="/login">Sign In</Link></p>
                </Col>
                <Col md />
            </Row>
        </Container>
    );
}
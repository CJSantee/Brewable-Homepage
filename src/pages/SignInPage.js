// Libraries
import * as Yup from 'yup';
import { Formik } from 'formik';
// Components
import { 
    Container,
    Row,
    Col,
    Button,
    Form,
    InputGroup,
} from 'react-bootstrap';
// Hooks
import { useState } from 'react';
// Constants
import { useAuth } from '../utils/Auth';
import { 
    Link,
    useNavigate, 
    useLocation,
} from 'react-router-dom';

const schema = Yup.object().shape({
    emailOrUsername: Yup.string()
        .required(),
    password: Yup.string()
        .required(),
});

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => { setShowPassword(!showPassword) }
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";

   
    const login = values => {
        auth.signin(values, () => {
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
                            login(values);
                            actions.setSubmitting(false);
                        }}
                        initialValues={{
                            emailOrUsername: '',
                            password: '',
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
                                    name="emailOrUsername"
                                    placeholder="Email / Username"
                                    value={values.emailOrUsername}
                                    onChange={handleChange}
                                    isValid={touched.emailOrUsername && !errors.emailOrUsername}
                                    isInvalid={!!errors.emailOrUsername}                                    
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <InputGroup>
                                    <Form.Control 
                                        type={showPassword?"text":"password"}
                                        name="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isValid={touched.password && !errors.password}
                                        isInvalid={!!errors.password}
                                    />
                                    <Button variant="outline-secondary" onClick={togglePassword}>{showPassword?"Hide":"Show"}</Button>
                                </InputGroup>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type='submit'>Login</Button>
                        </Form>
                    )}
                    </Formik>
                    <p className='text-center'>Forgot password? <Link to="/">Reset</Link></p>
                    <p className='text-center'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </Col>
                <Col md />
            </Row>
        </Container>
    );
}

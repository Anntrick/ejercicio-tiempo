import React from "react"
import { Button, Form, Row, Col } from 'react-bootstrap'

const Login = props => { 
    return (
        <Row className="justify-content-md-center">
            
            <Col md={8}>
                <Form>
                    <h1>Login</h1>
                    <Form.Group className="mb-3" xl={8} controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                        <Form.Text className="text-muted">
                            Introduce tu email
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" />
                        <Form.Text className="text-muted">
                            Introduce tu contraseña
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
          
        </Row>


    )
}

export default Login
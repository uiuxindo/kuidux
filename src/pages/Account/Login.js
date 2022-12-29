import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { ArrowRightCircle, EyeSlash, Linkedin } from "react-bootstrap-icons";
import GoogleIconColor from "../../assets/icon/google_color.svg";

import "./Account.scss";

function Login() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={4} className="pageBackground">
            <Row className="justify-content-end align-items-center h-100">
              <Col lg={9}>
                <h3 className="fw4 mb-4">
                  Welcome to
                  <br />
                  <span className="fw7">Kuidux</span>
                </h3>
                <p className="mb-4">
                  Kuidux is a new way to find freelancer, full worker or mentor.
                  We try to serving you with skilled agents from our community.
                </p>
                <Button variant="default" size="xlg">
                  See how Kuidux works <ArrowRightCircle className="ms-2" />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={8}>
            <Row className="justify-content-center my-5 py-5">
              <Col lg={4}>
                <h6 className="fw6">Log in</h6>
                <p className="text-lg mb-0">
                  For the purpose of industry regulations, your details are
                  required.
                </p>
                <Form className="formLogin">
                  <Form.Group className="form-group" controlId="email">
                    <Form.Label className="text-lg fw5">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your email"
                      size="lg"
                    />
                    <Form.Text className="text-color-danger text-sm d-none">
                      Error message
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="form-group" controlId="password">
                    <Form.Label className="text-lg fw5">Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="password"
                        placeholder="Your password"
                        size="lg"
                      />
                      <InputGroup.Text>
                        <EyeSlash />
                      </InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="text-color-danger text-sm d-none">
                      Error message
                    </Form.Text>
                  </Form.Group>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <Form>
                      {["checkbox"].map((type) => (
                        <div key={`default-${type}`} className="">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`Remember me`}
                          />
                        </div>
                      ))}
                    </Form>
                    <a href="" className="text-color-primary">Forgot password?</a>
                  </div>
                  <Button variant="primary btn-xlg w-100 shadow-lg mt-2">
                    Log in
                  </Button>
                  <div className="formDivider">Or</div>
                  <Button variant="white btn-xlg btn-ic-media google w-100 shadow-lg mt-2 mb-3">
                    <img src={GoogleIconColor} />
                    Continue with Google
                  </Button>
                  <Button variant="white btn-xlg btn-ic-media linkedin w-100 shadow-lg">
                    <Linkedin />
                    Continue with Linkedin
                  </Button>
                  <p className="mb-0 text-neutral-60 text-sm text-center">
                    Don't have account?{" "}
                    <a
                      href=""
                      target="_blank"
                      className="text-decoration-none text-color-primary"
                    >
                      Sign Up
                    </a>
                  </p>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;

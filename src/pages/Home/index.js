import {
  Container,
  Row,
  Col,
  Card,
  FormControl,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Search, ChevronDown } from "react-bootstrap-icons";

import Banner from "../../assets/img/main banner.png";
import "./Home.scss";

const Home = () => (
  <>
    <Container>
      <Row className="align-items-center">
        <Col lg={5}>
          <h4 className="mb-4 text-banner">
            Go find <span></span>
            <br />
            in one place
          </h4>
          <p className="text-lg mb-0">
            Meet the perfect worker for your needs with a variety of skills in
            our community only in one place
          </p>
        </Col>
        <Col lg={7}>
          <img src={Banner} className="img-fluid" />
        </Col>
      </Row>
      <Row className="home-search justify-content-center">
        <Col lg={8}>
          <Card>
            <div className="d-flex align-items-center">
              <Search className="text-tlg text-color-tertiary" />
              <FormControl type="text" placeholder="Search by role" />
              <Dropdown>
                <Dropdown.Toggle>
                  Expertise <ChevronDown />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1" active>Red</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Orange
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle>
                  City <ChevronDown />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Orange
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="main-search">Search</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;

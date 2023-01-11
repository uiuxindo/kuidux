import {
  Container,
  Row,
  Col,
  Card,
  FormControl,
  Dropdown,
  Button,
  Badge,
} from "react-bootstrap";
import {
  Search,
  ChevronDown,
  Briefcase,
  Heart,
  StarFill,
  ChevronRight,
} from "react-bootstrap-icons";

import Banner from "../../assets/img/main banner.png";
import SellingPoint1 from "../../assets/img/visual-1.png";
import SellingPoint2 from "../../assets/img/visual-2.png";
import SellingPoint3 from "../../assets/img/visual-3.png";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import "./Home.scss";

const listAgents = [
  {
    id: 1,
    name: "Justin Rhiel Madsen",
    role: "Fullstack Developer",
    img_url:
      "https://campuspedia.id/news/wp-content/uploads/2020/12/nam-do-san-1024x683.jpg",
    company: "Ajaib",
    rating: "4.5",
    status: "available",
    works: [
      {
        model_id: 1,
        model: "Part Time",
      },
      {
        model_id: 2,
        model: "Full Time",
      },
    ],
  },
  {
    id: 2,
    name: "Angel Gouse",
    role: "Product Manager",
    img_url:
      "https://gambar.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/10/1-72.jpg",
    company: "Zenius",
    rating: "",
    status: "available",
    works: [
      {
        model_id: 1,
        model: "Part Time",
      },
      {
        model_id: 2,
        model: "Full Time",
      },
    ],
  },
  {
    id: 3,
    name: "Paityn Rhiel Madsen",
    role: "Business Analyst",
    img_url:
      "https://images.hindustantimes.com/img/2022/05/13/1600x900/kim_seon_ho_1652446989923_1652446990087.jpg",
    company: "Sayurbox",
    rating: "4.5",
    status: "unavailable",
    works: [
      {
        model_id: 1,
        model: "Part Time",
      },
    ],
  },
  {
    id: 4,
    name: "Ann Geidt",
    role: "UX Researcher",
    img_url:
      "https://6.viki.io/image/be3344f8241c4cf986f8dbc0b0d07a54.jpeg?s=900x600&e=t",
    company: "Gojek",
    rating: "4.8",
    status: "available",
    works: [
      {
        model_id: 1,
        model: "Part Time",
      },
      {
        model_id: 2,
        model: "Full Time",
      },
    ],
  },
];

const Home = () => (
  <>
    <Header state="default" />
    <Container>
      <Row className="align-items-center">
        <Col lg={5}>
          <h4 className="mb-4 text-banner">
            Go find <br className="d-md-none" />
            <span></span>
            <br />
            in one place
          </h4>
          <p className="text-lg mb-0">
            Meet the perfect worker for your needs with a variety of skills in
            our community only in one place
          </p>
        </Col>
        <Col lg={7} className="d-none d-sm-none d-md-block">
          <img src={Banner} className="img-fluid" />
        </Col>
      </Row>
      <Row className="home-search justify-content-center">
        <Col lg={8} md={8} sm={12} xs={12}>
          <Card className="d-none d-sm-none d-md-block">
            <div className="d-flex align-items-center">
              <Search className="text-tlg text-color-tertiary" />
              <FormControl type="text" placeholder="Search by role" />
              <Dropdown>
                <Dropdown.Toggle>
                  Expertise <ChevronDown />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1" active>
                    Red
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Orange</Dropdown.Item>
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
          <Card className="d-md-none mt-4">
            <div className="d-flex align-items-center justify-content-between">
              <div
                className="d-flex align-items-center py-3"
                style={{ flex: "0 0 140px" }}
              >
                <Search className="text-xlg text-color-tertiary me-2" />
                <span className="text-neutral-50">Search by role</span>
              </div>
              <ChevronRight className="text-lg" />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container fluid className="selling-points">
      <Container>
        <h6 className="title d-none d-sm-none d-md-block">
          We put a lot of hard work.
          <br /> Just to make sure we can
          <br /> give you this
        </h6>
        <p className="title text-xlg fw5 d-md-none">
          We put a lot of hard work.
          <br /> Just to make sure we can
          <br /> give you this
        </p>
        <Row className="justify-content-between">
          <Col lg={3} className="text-center">
            <img src={SellingPoint1} className="img-fluid" />
            <p className="text-tlg fw7 mt-4">Flexibility</p>
            <p className="text-lg text-neutral-80 mb-0">
              Flexible working hours. Working day or night, weekday or weekend
              is up to you. Clients only need you done the job on the agreed
              time.
            </p>
          </Col>
          <Col lg={3} className="text-center">
            <img src={SellingPoint2} className="img-fluid" />
            <p className="text-tlg fw7 mt-4">Easy tracking</p>
            <p className="text-lg text-neutral-80 mb-0">
              The task easier to track using kanban board system.
            </p>
          </Col>
          <Col lg={3} className="text-center">
            <img src={SellingPoint3} className="img-fluid" />
            <p className="text-tlg fw7 mt-4">In app chat</p>
            <p className="text-lg text-neutral-80 mb-0">
              Use in app chat for deep discussion between client and agent. Your
              discussion would be documented. No need to use third-party
              messaging app unless you want it.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container>
      <Row className="align-items-center">
        <Col xs={6}>
          <h5 className="d-none d-sm-none d-md-block">Our top agents</h5>
          <p className="text-xlg fw5 d-md-none mb-0">Our top agents</p>
        </Col>
        <Col xs={6} className="text-end">
          <Button variant="outline-primary d-none d-sm-none d-md-inline">Explore more</Button>
          <Button variant="outline-primary d-md-none" size="sm">Explore more</Button>
        </Col>
      </Row>
      <Row className="list-agent">
        {listAgents.map((data) => (
          <Col lg={3} md={3} key={data.id}>
            <Card className="border-0 shadow mb-3">
              <div
                className="imgBox"
                style={{
                  backgroundImage: `url('${data.img_url}')`,
                }}
              ></div>
              <div className="agent-desc p-3">
                <p className="text-lg fw7 name-val">{data.name}</p>
                <div className="d-flex mb-3">
                  <Briefcase className="text-xlg text-color-secondary" />
                  <div className="ms-2">
                    <p className="mb-0 text-neutral-90 fw5">{data.role}</p>
                    <span className="text-sm fw5">{data.company}</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="values d-flex align-items-center">
                    {data.rating !== "" ? (
                      <div className="d-flex me-2">
                        <StarFill />
                        <span className="text-sm text-neutral-90 ms-1">
                          {data.rating}
                        </span>
                      </div>
                    ) : null}
                    {data.works.map((work) => (
                      <Badge
                        key={work.model_id}
                        bg="default"
                        className="text-sm fw7 text-color-default"
                      >
                        {work.model}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline-bookmark text-tlg">
                    <Heart />
                  </Button>
                </div>
                <Button variant="primary w-100" size="lg">
                  Ask to Discuss
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer />
  </>
);

export default Home;

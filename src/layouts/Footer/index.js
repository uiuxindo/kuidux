import { Container, Row, Col } from "react-bootstrap";

import "./Footer.scss";

import MainLogo from "../../assets/img/publish.png";
import UIUXIndoLogo from "../../assets/img/uiuxindo logo.png";
import UIUXIndoAcademyLogo from "../../assets/img/academy logo.png";
import IconDiscord from "../../assets/icon/discord.svg";
import IconInstagram from "../../assets/icon/instagram.svg";
import IconLinkedin from "../../assets/icon/linkedin.svg";
import IconMedium from "../../assets/icon/medium.svg";
import IconYoutube from "../../assets/icon/youtube.svg";

function Footer(props) {
  if (props.state === "simple") {
    return (
      <>
        <main-footer style={{ background: "transparent" }}>
          <Container>
            <Row>
              <Col lg={12}>
                <div className="bottom-side">
                  <Row className="align-items-center">
                    <Col lg={6}>
                      <div className="d-flex align-items-center">
                        <span className="text-sm text-neutral-70 pe-3 me-3 border-end">
                          Copyright 2023 - Kuidux
                        </span>
                        <span className="text-sm text-neutral-70">
                          Illustrations by{" "}
                          <a
                            href="https://storyset.com/"
                            target="_blank"
                            className="text-color-default"
                          >
                            storyset.com
                          </a>
                        </span>
                        <ul className="social-media-list ms-4">
                          <li>
                            <a href="ddsj" target="_blank">
                              <img src={IconInstagram} />
                            </a>
                          </li>
                          <li>
                            <a href="ddsj" target="_blank">
                              <img src={IconLinkedin} />
                            </a>
                          </li>
                          <li>
                            <a href="ddsj" target="_blank">
                              <img src={IconYoutube} />
                            </a>
                          </li>
                          <li>
                            <a href="ddsj" target="_blank">
                              <img src={IconMedium} />
                            </a>
                          </li>
                          <li>
                            <a href="ddsj" target="_blank">
                              <img src={IconDiscord} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <nav className="text-end">
                        <a href="" className="text-color-primary text-sm">
                          FAQs
                        </a>
                        <a href="" className="text-color-primary text-sm ms-4">
                          Terms & Conditions
                        </a>
                        <a href="" className="text-color-primary text-sm ms-4">
                          Privacy Policy
                        </a>
                      </nav>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </main-footer>
      </>
    );
  } else {
    return (
      <>
        <main-footer>
          <Container>
            <Row>
              <Col lg={12}>
                <div className="top-side">
                  <Row className="align-items-center">
                    <Col lg={6}>
                      <img src={MainLogo} className="logo mb-4" alt="kuidux" />
                      <p className="mb-2 text-neutral-90">
                        Join our social media and be the biggest freelancer
                        community around the world.
                      </p>
                      <ul className="social-media-list">
                        <li>
                          <a href="ddsj" target="_blank">
                            <img src={IconInstagram} />
                          </a>
                        </li>
                        <li>
                          <a href="ddsj" target="_blank">
                            <img src={IconLinkedin} />
                          </a>
                        </li>
                        <li>
                          <a href="ddsj" target="_blank">
                            <img src={IconYoutube} />
                          </a>
                        </li>
                        <li>
                          <a href="ddsj" target="_blank">
                            <img src={IconMedium} />
                          </a>
                        </li>
                        <li>
                          <a href="ddsj" target="_blank">
                            <img src={IconDiscord} />
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={6}>
                      <nav className="text-end mb-4">
                        <a
                          href=""
                          className="text-color-default text-decoration-none fw5"
                        >
                          Find Agent
                        </a>
                        <a
                          href=""
                          className="text-color-default text-decoration-none ms-4 fw5"
                        >
                          Become Agent
                        </a>
                        <a
                          href=""
                          className="text-color-default text-decoration-none ms-4 fw5"
                        >
                          Partnership
                        </a>
                        <a
                          href=""
                          className="text-color-default text-decoration-none ms-4 fw5"
                        >
                          About Us
                        </a>
                        <a
                          href=""
                          className="text-color-default text-decoration-none ms-4 fw5"
                        >
                          Contact
                        </a>
                      </nav>
                      <div className="d-flex align-items-center justify-content-end">
                        <span className="text-neutral-90">Part of</span>
                        <img
                          src={UIUXIndoLogo}
                          className="ms-3"
                          style={{ height: "40px" }}
                        />
                        <img
                          src="https://uiuxindo.vercel.app/assets/img/logo/main-logo.svg"
                          className="ms-3"
                          style={{ height: "32px" }}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={12}>
                <div className="bottom-side">
                  <Row>
                    <Col lg={6}>
                      <span className="text-sm text-neutral-70 pe-3 me-3 border-end">
                        Copyright 2023 - Kuidux
                      </span>
                      <span className="text-sm text-neutral-70">
                        Illustrations by{" "}
                        <a
                          href="https://storyset.com/"
                          target="_blank"
                          className="text-color-default"
                        >
                          storyset.com
                        </a>
                      </span>
                    </Col>
                    <Col lg={6}>
                      <nav className="text-end">
                        <a href="" className="text-color-primary text-sm">
                          FAQs
                        </a>
                        <a href="" className="text-color-primary text-sm ms-4">
                          Terms & Conditions
                        </a>
                        <a href="" className="text-color-primary text-sm ms-4">
                          Privacy Policy
                        </a>
                      </nav>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </main-footer>
      </>
    );
  }
}

export default Footer;

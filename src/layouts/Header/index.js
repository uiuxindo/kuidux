import { Button, Dropdown } from "react-bootstrap";
import {
  Heart,
  ChatLeft,
  Bell,
  ChevronDown,
  List,
} from "react-bootstrap-icons";

import "./Header.scss";
import MainLogo from "../../assets/img/publish.png";

function Header(props) {
  if (props.state === "default") {
    return (
      <>
        <main-header>
          <a href="/">
            <img src={MainLogo} className="logo" alt="kuidux" />
          </a>
          <div className="menu-header d-none d-sm-none d-md-flex">
            <a href="/agent-list">
              <Button variant="link text-decoration-none text-color-default">
                Find Agent
              </Button>
            </a>
            <a href="/become-agent">
              <Button variant="link text-decoration-none text-color-default">
                Become Agent
              </Button>
            </a>
            <a href="https://www.academy.uiuxindo.id/" target="_blank">
              <Button variant="link text-decoration-none text-color-default">
                Find Mentor
              </Button>
            </a>
            <div className="user-access">
              <a href="/login">
                <Button variant="outline-primary px-4" size="lg">
                  Log In
                </Button>
              </a>
              <a href="/register">
                <Button variant="primary px-4" size="lg">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
          <div className="d-md-none">
            <Button variant="link text-xlg p-0 text-color-default">
              <List />
            </Button>
          </div>
        </main-header>
      </>
    );
  } else {
    return (
      <>
        <main-header>
          <a href="/">
            <img src={MainLogo} className="logo" alt="kuidux" />
          </a>
          <div className="menu-header d-none d-sm-none d-md-flex">
            <a href="/agent-list">
              <Button variant="link text-decoration-none text-color-default">
                Find Agent
              </Button>
            </a>
            <a href="/become-agent">
              <Button variant="link text-decoration-none text-color-default">
                Become Agent
              </Button>
            </a>
            <div className="notif-group">
              <a href="/" className="">
                <Button>
                  <Heart />
                </Button>
              </a>
              <a href="/" className="active">
                <Button>
                  <ChatLeft />
                </Button>
              </a>
              <a href="/" className="active">
                <Button>
                  <Bell />
                </Button>
              </a>
            </div>
            <div className="user-access">
              <Dropdown>
                <Dropdown.Toggle>
                  <img src="https://media.licdn.com/dms/image/D5603AQGfiO3i7ReR7w/profile-displayphoto-shrink_400_400/0/1670210774091?e=1677110400&v=beta&t=H2ZyWRgzzI8DyUn2ytkCIFD6uZkn-IAc0DfoBSHkKP0" />
                  <div>Bagus Arisandi</div>
                  <ChevronDown />
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
            </div>
          </div>
          <div className="d-md-none">
            <Button variant="link text-xlg p-0 text-color-default">
              <List />
            </Button>
          </div>
        </main-header>
      </>
    );
  }
}

export default Header;

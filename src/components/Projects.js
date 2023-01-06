import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/ImgProject/1Admin-หน้าจัดการหมวดหมู่สินค้า.png";
import projImg2 from "../assets/img/ImgProject/4Admin-หน้าจอคำร้องขอเพิ่มชุมชน.png";
import projImg3 from "../assets/img/ImgProject/4ชุมชน-หน้าจอสินค้าชุมชน.png";
import projImg4 from "../assets/img/ImgProject/7Admin-หน้าจอจัดการค่าส่งกรุงเทพ.png";
import projImg5 from "../assets/img/ImgProject/Shop-หน้าจอจัดการสินค้าชุมชน.png";
import projImg6 from "../assets/img/ImgProject/Shop-หน้าจัดการคำสั่งซื้อ.png";
// import projImg7 from "../assets/img/ImgProject/User-หน้าเข้าสู่ระบบ.png";

export const Projects = () => {

    const projects = [
      {
        title: "ตัวอย่างโปรเจค",
        description: "MSC TH",
        imgUrl: projImg1,
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "MSC TH",
        imgUrl: projImg2,
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "MSC TH",
        imgUrl: projImg3,
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "MSC TH",
        imgUrl: projImg4,
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "MSC TH",
        imgUrl: projImg5,
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "MSC TH",
        imgUrl: projImg6,
      },
    ];

    return(
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>ตัวอย่างโปรเจคจบ ปี 4</h2>
              {/* <p>Test.........................</p> */}
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" scr={colorSharp2}></img>
      </section>
    )
  }
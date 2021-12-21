import "./skills.css"
import { Carousel } from "react-bootstrap";
import htmlFoto from "../../images/html.png"
import sscFoto from "../../images/css.png"
import javascriptFoto from "../../images/javascript.png"
import mysqlFoto from "../../images/mysql.png"
import sequelizeFoto from "../../images/sequelize.png"
import nodejsFoto from "../../images/nodejs.png"
import reactjsFoto from "../../images/reactjs.png"

function Skills() {
    return (
        <div className="skill-container">
            <h1>My Skills</h1>
            <Carousel>
                <Carousel.Item interval={700}>
                    <img
                        className="d-block fotoCarrousel"
                        src={htmlFoto}
                        alt="First slide"
                        style={{ width:"100%",maxWidth: '550px',height:"200px",maxHeight:"350px",margin:"auto",borderRadius:"5px" }}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={700}>
                    <img
                        className="d-block w-100"
                        src={sscFoto}
                        alt="Second slide"
                        style={{ width:"100%",maxWidth: '550px',height:"200px",maxHeight:"350px",margin:"auto",borderRadius:"5px" }}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={700}>
                    <img
                        className="d-block w-100"
                        src={javascriptFoto}
                        alt="Third slide"
                        style={{ width:"100%",maxWidth: '550px',height:"200px",maxHeight:"350px",margin:"auto",borderRadius:"5px" }}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={700}>
                    <img
                        className="d-block fotoCarrousel"
                        src={mysqlFoto}
                        alt="First slide"
                        style={{ width:"100%",maxWidth: '550px',height:"200px",maxHeight:"350px",margin:"auto",borderRadius:"5px" }}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={700}>
                    <img
                        className="d-block fotoCarrousel"
                        src={sequelizeFoto}
                        alt="First slide"
                        style={{ width:"100%",maxWidth: '550px',height:"200px",maxHeight:"350px",margin:"auto",borderRadius:"5px" }}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={700}>
                    <img
                        className="d-block fotoCarrousel"
                        src={nodejsFoto}
                        alt="First slide"
                        style={{ width:"100%",maxWidth: '550px',height:"200px",maxHeight:"350px",margin:"auto",borderRadius:"5px" }}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={700}>
                    <img
                        className="d-block fotoCarrousel"
                        src={reactjsFoto}
                        alt="First slide"
                        style={{ width:"100%",maxWidth: '550px',height:"200px",maxHeight:"350px",margin:"auto",borderRadius:"5px" }}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Skills
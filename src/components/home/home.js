import "./home.css"
import {Component} from "react"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import Skills from "../skills/skills"
import fotoPerfil from "../../profile.jpg"
import { Link } from "react-router-dom";

class Home extends Component{
    render(){
        return (
            <div>
                <Navbar />
    
                <div className="home-container">
                    <img src={fotoPerfil} alt="fotoPerfil"/>                
                    <h1>Hi, my name is Alex!<span><i className="fas fa-rocket"></i></span></h1>
                    <p>I'm a professional and passionate <span >Fullstack web developer</span>, especialized in both backend <span>(Node.js)</span> and frontend <span>(React.js)</span>.<br /><Link to="/contact" style={{ textDecoration: 'none' }}>Wanna <span id="home-knowMore">know more</span> about me?</Link></p>
                </div>
                <Skills />
                <Footer />
            </div>
        )
    
    }
}

export default Home
import "./navbar.css"
import {Component} from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {clicksBtn:0}
    }


    mostrarNavbarRight(){
        this.setState({clicksBtn:this.state.clicksBtn+1})
        if (this.state.clicksBtn % 2 == 0){//Si es impar que me muestre las cosas
            document.querySelector(".navbar-right div").style.display = "flex"
            document.querySelector(".navbar-right div").style.width = "auto"
            document.querySelector(".navbar-right p").style.transform = "rotate(90deg)"
        }
        else {//Si es par que no me muestre nada
            document.querySelector(".navbar-right div").style.display = "none"
            document.querySelector(".navbar-right div").style.width = "0"
            document.querySelector(".navbar-right p").style.transform = "rotate(180deg)"


        }
    }

    render(){
        return(
            <div className="navbar-container">
                <div className="navbar-left">
                    <ul>
                        <li className="navbar-element letra"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                        <li className="navbar-element letra"><Link to="/portfolio" style={{ textDecoration: 'none' }}>Portfolio</Link></li>
                        <li id="navbar-left-contacto" className="navbar-element navbar-left-contacto"><Link to="/contact" style={{ textDecoration: 'none',color:"white" }}>Contact me!</Link></li>
                    </ul>
                </div>
    
                <div className="navbar-right">
                    <p onClick={this.mostrarNavbarRight.bind(this)}><i className="fas fa-align-justify"></i></p>
                    <div>
                        <ul>
                            <li className="navbar-element letra"><Link to="/" style={{ textDecoration: 'none',color:"white" }}>Home</Link></li>
                            <li className="navbar-element letra"><Link to="/portfolio" style={{ textDecoration: 'none',color:"white" }}>Portfolio</Link></li>
                            <li className="navbar-element navbar-right-contacto"><Link to="/contact" style={{ textDecoration: 'none',color:"white" }}>Contact me!</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
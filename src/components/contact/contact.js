import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import "./contact.css"

function Contact(){
    return (
        <div>
            <Navbar />

            <div className="contact-container">
                <form>
                    <h1>Contact me!</h1>
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>    
            </div>

            <Footer />
        </div>
    )
}

export default Contact
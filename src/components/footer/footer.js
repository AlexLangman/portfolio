import "./footer.css"

function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-icons">
                <a id="footer-linkedin" href="https://www.linkedin.com/in/alex-langman-2b2633150/" target={"_blank"}><i className="fab fa-linkedin-in"></i></a>
                <a id="footer-github" href="https://github.com/AlexLangman" target={"_blank"}><i className="fab fa-github"></i></a>
                <a id="footer-whatsapp" href="https://wa.me/5491167110206" target={"_blank"}><i className="fab fa-whatsapp"></i></a>


            </div>
            <div className="footer-copyright"></div>

        </div>
    )
}

export default Footer
import './MyContactMe.css'

const MyContactMe = () =>  {
    return(
        <div id="section-contact-me-container">
            <section id="contact-me">
                <h2>Contact me</h2>
                <p>I'm always interested in hearing about new opportunities, 
                learning new languages and design techniques.</p>
                <p>
                <a 
                    href="mailto:jason.scaramuzza@gmail.com" 
                    className="link-style-button">
                    Email me
                </a>
                </p>
            </section>
        </div>
    );
}

export default MyContactMe;
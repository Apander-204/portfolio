import { useState } from "react";
import emailjs from 'emailjs-com';
import "./Contact.css";

const Contact = () => {

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputText, setInputText] = useState("");

    const [error, setError] = useState("");

    const sendMessage = async () => {

        if (inputName == "") setError("Enter Your Name, Please");
        if (inputEmail == "") setError("Enter Your Email, Please");
        if (inputText == "") setError("Enter Your Message, Please");

        const result = await emailjs.send("service_xomzrxi","template_faicgxp",{
            name: inputName,
            message: inputText,
            email: inputEmail,
        }, "lgfjfCIqMr9GBg1mG");

        if (result.status == 200) {
            alert("Success");
            setInputEmail("");
            setInputName("");
            setInputText("");
        } else {
            alert("Error")
        }
    }

    return (
        <div className="contact">

            <h1 className="contact-title">Contact us</h1>

            <div className="contact-container">
                <form className="contact-form" onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                }}>
                    <input className="contact-input" placeholder="Your Name" type="text" onChange={(e) => setInputName(e.target.value)} value={inputName}/>
                    <input className="contact-input" placeholder="Email Address" type="email" onChange={(e) => setInputEmail(e.target.value)} value={inputEmail}/>
                    <textarea className="message-contact-input" placeholder="Message" onChange={(e) => setInputText(e.target.value)} value={inputText}/>
                    <button className="contact-btn" type="submit">Send now</button>
                </form>
                <div className="contacts">
                    <div className="about-item">
                        <div className="about-item-img">

                        </div>
                        <p className="about-item-title">Name</p>
                        <p className="about-item-data">Andrey Panin</p>
                    </div>
                    <div className="about-item">
                        <div className="about-item-img">

                        </div>
                        <p className="about-item-title">Phone</p>
                        <p className="about-item-data">+7 923 559 07 57</p>
                    </div>
                    <div className="about-item">
                        <div className="about-item-img">

                        </div>
                        <p className="about-item-title">Email</p>
                        <p className="about-item-data">apander204@gmail.com</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;
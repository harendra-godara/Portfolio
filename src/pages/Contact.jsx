import { useState } from "react";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleSubmit = (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");


        if (!name || !email || !message) {

            setError("All fields are required");

            return;
        }


        if (!email.includes("@")) {

            setError("Please enter valid email");

            return;
        }


        setSuccess("Message sent successfully");


        console.log(name);
        console.log(email);
        console.log(message);


        setName("");
        setEmail("");
        setMessage("");
    }


    return (

        <div className="contact-page">

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >

                <h1>Contact Me</h1>


                {
                    error &&
                    <p className="error">
                        {error}
                    </p>
                }


                {
                    success &&
                    <p className="success">
                        {success}
                    </p>
                }


                <input
                    type="text"

                    placeholder="Enter your name"

                    value={name}

                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />


                <input
                    type="email"

                    placeholder="Enter your email"

                    value={email}

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />


                <textarea

                    placeholder="Enter your message"

                    value={message}

                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                />


                <button className="btn">
                    Send Message
                </button>

            </form>

        </div>
    )
}
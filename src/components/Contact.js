import './Contact.css';
import React from 'react';
import { Form, Button } from "semantic-ui-react";

// const encode = (data) => {
//     return Object.keys(data)
//       .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//       .join("&");
//   };  

const Contact = () => {

    const [obj, setObj] = React.useState({
        name: "",
        email: "",
        message: "",
      });
    
      // const handleSubmit = (e) => {
      //   fetch("/", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //     body: encode({ "form-name": "contact", ...obj }),
      //   })
      //     .then(() => {
      //       setObj({ name: "", email: "", message: "" });
      //       alert("Success!");
      //     })
      //     .catch((error) => alert(error));
    
      //   e.preventDefault();
      // };

    return (
        <div>
            <Form name="contact" method="POST" data-netlify="true">
                <Form.Input
                    label="Name"
                    type="text"
                    name="name"
                    value={obj.name}
                    onChange={(e) => setObj({ ...obj, name: e.target.value })}
                />
                <Form.Input
                    label="Email"
                    type="email"
                    name="email"
                    value={obj.email}
                    onChange={(e) => setObj({ ...obj, email: e.target.value })}
                />
                <Form.TextArea
                    label="Message"
                    name="message"
                    value={obj.message}
                    onChange={(e) => setObj({ ...obj, message: e.target.value })}
                />
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Contact;
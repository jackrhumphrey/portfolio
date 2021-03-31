import './Contact.css';
import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function Contact() {

  const [obj, setObj] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...obj })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
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
      {/* {success && (
        <p style={{ color: "green" }}>Thank you for your message! </p>
      )} */}
    </div>
  )
}

export default Contact;
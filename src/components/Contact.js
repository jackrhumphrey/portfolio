import './Contact.css';
import React, { useState, useEffect } from 'react';
import { Form, Button } from "semantic-ui-react";

function Contact () {

  const [obj, setObj] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);

  return (
    <div>
      <Form name="contact" method="POST" data-netlify="true">
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
      {success && (
        <p style={{ color: "green" }}>Thank you for your message! </p>
      )}
    </div>
  )
}

export default Contact;
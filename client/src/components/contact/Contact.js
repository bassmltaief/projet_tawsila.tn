import React from "react";
import * as emailjs from "emailjs-com";
import "./contact.css";
import {
  Field,
  Label,
  Control,
  Input,
  Button,
  Icon,
  Textarea,
  Notification,
} from "rbx";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_rl8r8j9', e.target, 'user_1Ef1wGOtQvSSZGVcbHdbk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  
    return (
      <form onSubmit={sendEmail} className="conta">
      <h1 className="titer">Pour donner un feedback nécessite pas de nous contacter </h1>
        <Field>
          <Label className="labels">Name</Label>
          <Control>
            <Input
              className="formcont22"
              name="name"
              type="text"
              placeholder="Your first and last name"
              
              
            />
          </Control>
        </Field>
        <Field>
          <Label className="labels">Email for contact</Label>
          <Control>
            <Input
              className="formcont22"
              name="email"
              type="email"
              placeholder="email@gmail.com"
              
              
            />
          </Control>
        </Field>
        <Field>
          <Label className="labels">Subject</Label>
          <Control>
            <Input
              className="formcont22"
              name="subject"
              type="text"
              placeholder="What is the subject?"
              
              
            />
          </Control>
        </Field>
        <Field>
          <Label className="labels">Message</Label>
          <Control>
            <Textarea
              className="formcont11"
              name="message"
              placeholder="Tell me more about..."
             
              
            />
          </Control>
        </Field>

        <Field kind="group">
          <div className="Bouttons">
            <Control>
              <Button color="dark" type="submit" value="Send">Send</Button>
            </Control>
            <Control>
            <Button color="dark" type="reset" value="Reset" className="Bouttons2"/>
            </Control>
          </div>
        </Field>
      </form>
    );
  
}


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/Footer.css";

export function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oyftc4o",
        "template_qgy7p3r",
        form.current,
        "user_2hZZ4HubHpxKKQfD39eqI"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Just sent");
        },
        (error) => {
          console.log(error.text);
          console.log("Failed");
        }
      );
  };
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="form-control-md ">
      <form className=" m-2" ref={form} onSubmit={sendEmail}>
        <input
          className="m-2 text-light bg-dark border-gray "
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
          className="m-2 text-light bg-dark border border-gray"
          type="email"
          name="email"
          placeholder=" Email Address"
          required
        />

        <textarea
          cols="23"
          rows="3"
          className="form-control-md text-light bg-dark border border-gray"
          type="text"
          name="message"
          placeholder=" write message"
          required
        />
        <br></br>
        <button
          className="button p-2 mb-2 btn btn-primary btn-md btn-block "
          type="Submit"
          value="Send"
          onClick={refreshPage}
        >
          Send
        </button>
      </form>
    </div>
  );
}

// <form action="https://formsubmit.co/dimihbt@yahoo.com" method="POST">
//         <input type="hidden" name="_subject" value="New email" />
//         <label>Email</label>

//         <input
//           type="email"
//           name="email"
//           placeholder=" Email Address"
//           required
//         />
//         <label>Message</label>

//         <input
//           type="text"
//           name="message"
//           placeholder=" write message"
//           required
//         />
//         <button type="submit">Send</button>
//       </form>

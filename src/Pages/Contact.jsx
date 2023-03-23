import React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const SERVICE_ID = "";
  const TEMPLATE_ID = "";
  const USER_ID = "";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="Contact">
      <div className="home-hero hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <h1 className="heading-primary">Contact Me!</h1>
          <div className="card flex-shrink-0 max-w-xs ">
            <div className="contact_1">
              <Form className="cart-body" onSubmit={handleOnSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">E-mail</span>
                  </label>
                  <input
                    id="form-input-control-email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    label="Email"
                    name="user_email"
                    placeholder="Email…"
                    className=" w-64 input input-bordered bg-white text-green-900"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    id="form-input-control-last-name"
                    control={Input}
                    label="Name"
                    name="user_name"
                    placeholder="Name…"
                    className=" w-64 input input-bordered bg-white text-green-900"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Message</span>
                  </label>
                  <textarea
                    id="form-textarea-control-opinion"
                    control={TextArea}
                    label="Message"
                    name="user_message"
                    placeholder="Message…"
                    className=" w-64 input input-bordered  bg-white text-green-900"
                    required
                  />
                </div>
                <div className="form-control mt-6 flex-row">
                  <button type="submit" className="btn btn-primary mr-1">
                    Sent
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

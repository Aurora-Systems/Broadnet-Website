"use client";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [loading, set_loading] = useState<boolean>(false);
  const form: any = useRef();
  const send_application = (e: FormEvent) => {
    e.preventDefault();
    set_loading(true);
    emailjs
      .sendForm("service_ap5fhkw", "template_eljdeym", form.current, {
        publicKey: "ow2asdLTtVT3aOWW_",
      })
      .then(() => {
        alert("✅ We received your enquiry, expect a call or an email soon!");
        form.current.reset();
      })
      .catch(() => {
        alert(
          "⚠️ Message not sent, please try again or send us a message on our email info@broadnetafrica.net",
        );
      })
      .finally(() => {
        set_loading(false);
      });
  };
  return (
    <div className=" min-vh-100">
      <div className="text-center mt-5">
        <h1 className="fw-bold p-text">Ready to Build?</h1>
        <p>Get on a quick 30 min call with us!</p>
      </div>
      <div className="bg-light rounded mb-3 p-3">
        <form ref={form} onSubmit={send_application}>
          <div className="row">
            <div className="col-sm mb-2">
              <span>Name</span>
              <input
                type="text"
                className="form-control"
                name="full_name"
                placeholder=""
              />
            </div>
            <div className="col-sm mb-2">
              <span>Company Name</span>
              <input
                type="text"
                className="form-control"
                name="company_name"
                placeholder=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm mb-2">
              <span>Email</span>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder=""
              />
            </div>
            <div className="col-sm mb-2">
              <span>Contact Number</span>
              <input
                type="text"
                className="form-control"
                name="contact_number"
                placeholder=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm mb-2">
              <span>Your Budget (USD)</span>
              <input
                type="text"
                className="form-control"
                name="budget"
                placeholder=""
              />
            </div>
            <div className="col-sm mb-2">
              <span>Service Interested In?</span>
              <select className="form-control " name="service">
                <option value="Broadtrak">BroadTrak</option>
                <option value="Intactsys">Intactsys</option>
                <option value="Fortis-Comm">Fortis-Comm</option>
                <option value="Custom Enquiry">Custom Enquiry</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm mb-2">
              <span>Tell us more about your project</span>
              <textarea
                className="form-control"
                name="project_details"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <button type="submit" className="btn p-btn">
                {loading ? (
                  <div
                    className="spinner-border spinner-border-sm text-light "
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container d-block mb-4 mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48114.70587098477!2d30.947552921505697!3d-17.813795213000823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5e0e3af1e2d%3A0x4398b4176d0d3c97!2sBroadnet!5e1!3m2!1sen!2szw!4v1740673216346!5m2!1sen!2szw"
          className="d-block w-100"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

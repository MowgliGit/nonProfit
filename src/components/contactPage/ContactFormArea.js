import React, { useState } from "react";

export default function ContactFormArea() {
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (name) => setFocusedInput(name);
  const handleBlur = () => setFocusedInput(null);

  return (
    <section className="sectionContactFormArea">
      <div className="containerContactFormArea">
        <div className="textBoxForm">
          <h2 className="headingFormTitle">Have Any Question?</h2>
          <p className="paragraphForm">
            It is a long established fact that a reader will be distracted by
            the content of a page when looking.
          </p>
        </div>
        <div className="contactFormBox">
          <form action="" className="form">
            <div className="formInfBox">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  className={focusedInput === "name" ? "input-focused" : ""}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  onFocus={() => handleFocus("lastname")}
                  onBlur={handleBlur}
                  className={focusedInput === "lastname" ? "input-focused" : ""}
                />
              </div>
            </div>
            <div className="formInfBox">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  className={focusedInput === "email" ? "input-focused" : ""}
                />
              </div>
              <div>
                <select
                  className={`formControl ${
                    focusedInput === "subject" ? "input-focused" : ""
                  }`}
                  name="subject"
                  onFocus={() => handleFocus("subject")}
                  onBlur={handleBlur}
                >
                  <option className="subjectInput">Subject</option>
                  <option>Subject 1</option>
                  <option>Subject 2</option>
                  <option>Subject 3</option>
                  <option>Subject 4</option>
                </select>
              </div>
            </div>
            <div className="formMessage">
              <textarea
                name="message"
                placeholder="Message"
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                className={focusedInput === "message" ? "input-focused" : ""}
              ></textarea>
            </div>
            <div className="btnSubmit">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

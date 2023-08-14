import React from 'react';
import { styled } from 'styled-components';

const StyledContact = styled.section`
    margin: 0 auto;
    max-width: 500px;
    padding-top:150px;
    @media (max-width: 768px) {
      padding: 0;
    }
  
  .form-wrapper {
    width: 500px;
    margin: 20px auto;
    padding: 0;
    @media (max-width: 768px) {
      padding: 0;
    }
    @media (max-width: 480px) {
      padding: 0;
    }
    .input-wrapper {
      padding: 0;
      margin-bottom: 10px;
      position: relative;
      transition: all 0.25s ease;
      @media (max-width: 768px) {
      margin-bottom: 10px;
      }
      @media (max-width: 768px) {
      margin-bottom: 10px;
    }
     
      &:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        bottom: 0;
        left: 0;
        transition: all 0.5s ease-in-out;
      }
      &:after {
        background-color: #00b7c7;
        content: "";
        position: absolute;
        display: block;
        width: 0px;
        height: 2px;
        bottom: 0;
        left: 0;
        transition: all 0.5s ease-in-out;
      }
      .input-label {
        display: block;
        font-size: 0.9em;
        font-weight: 700;
        text-transform: uppercase;
        transform: translateY(25px);
        color: $white;
        margin-bottom: 10px;
        transition: all 0.5s ease-in-out;
      }
      .contact-input {
        position: relative;
        background: transparent;
        width: 100%;
        border: none;
        padding: 20px 0 10px;
        margin-bottom: -10px;
        font-size: 1em;
        line-height: 1.3;
        color: #ffffff;
        resize: none;
        display: block;
        overflow: hidden;
        box-sizing: padding-box;
        transition: all 0.25s ease;
        &:focus {
          outline: 0;
          color: $white;
        }
      }
    }
    .is-active,
    .is-completed {
      padding: 15px 0 0 0;
    }
    .is-active:after {
      width: 100%;
    }
    .is-active .input-label {
      color: #00b7c7;
    }
    .is-completed .input-label {
      font-size: 0.75em;
      font-weight: 700;
      transform: translateY(0);
      padding: 0;
    }
    .is-completed .contact-input {
      padding-top: 10px;
    }
    .message-btn {
      display: block;
      text-align: center;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.5;
      padding: 12px 20px 10px;
      margin: 70px auto 0;
      color: var(--navy);
      background: transparent;
      border: 2px solid var(--navy);
      border-radius: 3px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      &:hover, &:focus {
        color: $white;
        background: $blue;
      }
    }
    #message-label {
      margin-bottom: 10px;
    }
  }
`;

 const Contact = () => {
  return (
    <StyledContact>
      <div className="overlay-wrapper">
        <div className="fade-in">
          <div className="center">
            <h1 className="section-heading">Contacter Nous</h1>
            <span className="divider center"></span>
            <p className="contact-description">Have a sweet project in mind or just want to say hi? Feel free to send me a message!</p>
          </div>
          <div className="contact-wrapper">
            <form id="contactform" className="form-wrapper" method="POST" autoComplete="off">
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <div className="input-wrapper">
                <label htmlFor="name" className="input-label">Nom</label>
                <input type="text" name="name" className="contact-input" id="name" required />
              </div>
              <div className="input-wrapper">
                <label htmlFor="email" className="input-label">Email</label>
                <input type="email" name="_replyto" className="contact-input" id="email" required />
              </div>
              <div className="input-wrapper">
                <label htmlFor="subject" className="input-label">Sujet</label>
                <input type="text" name="_subject" className="contact-input" id="subject" required />
              </div>
              <div className="input-wrapper">
                <label htmlFor="message" className="input-label" id="message-label">Message</label>
                <textarea name="message" className="contact-input autoExpand" id="message" required />
              </div>
              <button type="submit" name="submit" className="message-btn">
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
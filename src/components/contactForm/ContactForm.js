import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit = {handleSubmit}>
        <label htmlFor = 'name'>Enter name: </label>
        <input  id = 'name' type = 'text' name = 'name' value = {name} onChange = {(e) => setName(e.target.value)} />
        <label htmlFor = 'phone'>Enter phone number (Format: XXX - XXX - XXXX): </label>
        <input id = 'phone' type = 'text' name = 'phone' value = {phoneNumber} onChange = {(e) => setPhoneNumber(e.target.value)} pattern = '^[2-9]\d{2}-\d{3}-\d{4}$'/>
        <label htmlFor = 'email'>Enter email: </label>
        <input id = 'email' type = 'text' name = 'email' value = {email} onChange = {(e) => setEmail(e.target.value)} />
        <input type = 'submit' value = 'Submit Contact' />
      </form>
    </>
  );
};


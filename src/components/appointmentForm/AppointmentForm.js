import React from "react";

import {ContactPicker} from '../contactPicker/ContactPicker';
//appointment must be in future
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};


export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  function handleChange(e) {

    setContact(e.target.value);
  }
  

  return (
    <>
      <form onSubmit = {handleSubmit}>
        <label htmlFor ='name'>Name of Appointment: </label>
        <input type = 'text' id = 'name' name = 'name' value = {name} onChange = {(e) => setName(e.target.value)} />
        <label htmlFor ='date'>Date: </label>
        <input type = 'date' id = 'date' name = 'date' value = {date} onChange = {(e) => setDate(e.target.value)} min = {getTodayString()}/>
        <label htmlFor ='time'>Time: </label>
        <input type = 'time' id = 'time' name = 'time' value = {time} onChange = {(e) => setTime(e.target.value)} />
        <label htmlFor = 'contact'>Contact for Appointment: </label>
        <ContactPicker contacts = {contacts} handleChange = {handleChange} name = 'contact' value = {contact}/>
        <input type = 'submit' value = 'Submit Appointment' />
      </form>
    </>
  );
};

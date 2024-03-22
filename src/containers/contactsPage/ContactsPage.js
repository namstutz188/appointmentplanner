import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts,addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name,setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate,setIsDuplicate] = useState(false);
  useEffect(() => {
    let isDup = false; //initialize to false
    for (let i = 0; i < contacts.length; ++i) {
      if (contacts[i].name === name) {
        isDup = true;
        break; //if find something that is true then set true and break
      }
    }

    setIsDuplicate(isDup);
  },[name]) //only run upon name changing!

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if (isDuplicate) {
      alert('Name is a duplicate! Cannot add contact');
    } else {
      addContact(name,phoneNumber,email);

      //Clear form

      setName('');
      setPhoneNumber('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name = {name} phoneNumber = {phoneNumber} email = {email} setName = {setName} setPhoneNumber = {setPhoneNumber} setEmail = {setEmail} handleSubmit = {handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arr = {contacts}/>
      </section>
    </div>
  );
};

import React from "react";
//have default no contact available
export const ContactPicker = ({contacts, handleChange,name,value}) => {
  return (
    <>
      <select onChange = {handleChange} name = {name} value = {value}>
        <option value = ''>No Contact Selected</option>
        {contacts.map((contact,i) => {
          return <option value = {contact.name} key= {contact.name}>{contact.name}</option>;
        })}
      </select>
    </>
  );
};

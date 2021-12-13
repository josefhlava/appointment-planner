import React, { useState,  useEffect } from "react";

import { TileList } from '../../components/tileList/TileList';
import { ContactForm } from '../../components/contactForm/ContactForm';

export const ContactsPage = ({
  contacts,
  addContact
}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);

  useEffect(() => {
    let exists = contacts.find(contact => contact.name === name);
    if (exists) {
      setDuplicateName(true);
    }
  },[name, contacts])

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicateName) {
      addContact(name, phone, '', email);
      setName('');
      setPhone('');
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
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          tiles={contacts}
          />
      </section>
    </div>
  );
};
import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
        />
      </label>
      <label>
        <input 
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
          placeholder="123-123-1234"
        />
      </label>
      <label>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
      </label>
      <label>
        <input 
          type="submit"
          value="Add Contact"
        />
      </label>
    </form>
  );
};

import React, { useState } from "react";

export default function BasicForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = e => {
    e.preventDefault();
    const curEntry = {
      id: new Date().toTimeString(),
      email: email,
      password: password
    };
    setAllEntry([...allEntry, curEntry]);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {allEntry.map(entry => (
        <div>
          <p>
            {entry.email} {entry.password}
          </p>
        </div>
      ))}
    </>
  );
}

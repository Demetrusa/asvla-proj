// RegistrationForm.tsx
import React, { useState } from "react";
import "./RegistrationForm.scss";

interface User {
  name: string;
  surname: string;
  email: string;
  birthDate: string;
  country: string;
  password: string;
}

const countries = [
  "Georgia",
  "USA",
  "Canada",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Australia",
  "Brazil",
  "India",
  "China",
  "Japan",
  "Russia",
  "Mexico",
  "South Africa",
];

const returnRegisterData = () => {
  fetch("https://fakestoreapi.com/users", {
    method: "POST",
    body: JSON.stringify({
      email: "John@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "John",
        lastname: "Doe",
      },
      address: {
        country: "usa",
      },
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
};
const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    name: "",
    surname: "",
    email: "",
    birthDate: "",
    country: countries[0],
    password: "",
  });

  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    upperLower: false,
    digit: false,
    noMatchWithUsername: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    validatePassword(formData.password);
  };

  const validatePassword = (password: string) => {
    const upperLower = /[a-z]/.test(password) && /[A-Z]/.test(password);
    const digit = /\d/.test(password);
    const length = password.length >= 6 && password.length <= 20;
    const noMatchWithUsername = formData.name !== password;

    setPasswordValidations({ upperLower, digit, length, noMatchWithUsername });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(passwordValidations).every(Boolean)) {
      console.log("Registered user:", formData);
      // Save user data or send to API
    } else {
      console.log("Password requirements not met");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="RegistrationForm">
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Surname</label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Birth Date</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label className="passReq">Password Requirements</label>
        <ul>
          <li style={{ color: passwordValidations.length ? "green" : "red" }}>
            6-20 symbols
          </li>
          <li
            style={{ color: passwordValidations.upperLower ? "green" : "red" }}
          >
            Upper and lower-case letters (Aa)
          </li>
          <li style={{ color: passwordValidations.digit ? "green" : "red" }}>
            Digit or number (1 or 123)
          </li>
          <li
            style={{
              color: passwordValidations.noMatchWithUsername ? "green" : "red",
            }}
          >
            The password must not match the username
          </li>
        </ul>
      </div>

      <button type="submit" onClick={returnRegisterData}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;

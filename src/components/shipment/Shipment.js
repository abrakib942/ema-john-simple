import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  //   const navigate = useNavigate();\

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  //   const [createUserWithEmailAndPassword, user] =
  //     useCreateUserWithEmailAndPassword(auth);

  //   const handleEmailBlur = (event) => {
  //     setEmail(event.target.value);
  //   };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  //   if (user) {
  //     navigate("/");
  //   }

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleShipping = (event) => {
    event.preventDefault();
    const shipping = { name, email, address, phone };
    console.log(shipping);
  };
  //   const handleCreateUser = (event) => {
  //     event.preventDefault();
  //     if (password !== confirmPassword) {
  //       setError("Your passwords didn't match");
  //       return;
  //     }
  //     if (password.length < 6) {
  //       setError("password must be 6 characters or longer");
  //       return;
  //     }

  //     createUserWithEmailAndPassword(email, password);
  //   };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping information</h2>
        <form onSubmit={handleShipping}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input
              value={user?.email}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              onBlur={handlePhoneBlur}
              type="number"
              name="phone-number"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;

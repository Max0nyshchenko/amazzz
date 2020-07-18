import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //  cleanup
    };
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Sign In</h2>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </li>
          <li>
            <button type="submit" className="button primary">
              Sign In
            </button>
          </li>
          <li>New to Amazzz?</li>
          <li>
            <Link to="/register" className="button text-center secondary">
              Create your Amazzz account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

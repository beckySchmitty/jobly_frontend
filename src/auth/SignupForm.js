import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AlertMessage from "../Common/AlertMessage";

// Signup Form
// manages update to state on change
// On Submission - calls signup function & redirects to /companies
// routed as /signup

function SignupForm({ signup }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    });

  const [errors, setErrors] = useState([]);


// HANDLE SUBMIT - redirect or error
  async function handleSubmit(e) {
    e.preventDefault();

    let resp = await signup(formData);
    if (resp.success) {
      history.push("/companies");
    } else {
      setErrors(resp.errors);
    }
  }

//  Form field updates on change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
        <div>
          <h3>SIGN UP TODAY</h3>

          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Username</label>
                  <input
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      autoComplete="username"
                      required
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                    />
                    </div>

                    <div>
                  <label>First name</label>
                  <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Last name</label>
                  <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </div>


        {/* SHOW ERRORS IF ANY */}
                {errors.length
                    ? <AlertMessage type="danger" messages={errors} />
                    : null}

                <button onSubmit={handleSubmit}>Submit</button>
              </form>

            </div>
          </div>
        </div>
  );
}

export default SignupForm;

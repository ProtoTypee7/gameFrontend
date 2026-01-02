// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     phoneNumber: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "https://localhost:5046/api/User/Register",
//         {
//           Username: formData.username,
//           Email: formData.email,
//           Password: formData.password,
//           PhoneNumber: formData.phoneNumber
//         }
//       );

//       alert(res.data.message);
//       navigate("/dashboard"); // after success
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2>🎮 Game Signup</h2>

//         <input name="username" placeholder="Username" onChange={handleChange} required />
//         <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
//         <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     background: "#0f172a",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   form: {
//     background: "#020617",
//     padding: "30px",
//     borderRadius: "10px",
//     color: "#fff",
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//     width: "320px"
//   }
// };

// export default Register;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./api/axios";


function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/User/register", {
        Username: formData.username,
        Email: formData.email,
        Password: formData.password,
        PhoneNumber: formData.phoneNumber
      });

      alert(res.data.message || "Registered successfully");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>🎮 Game Signup</h2>

        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    background: "#020617",
    padding: "30px",
    borderRadius: "10px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "320px"
  }
};

export default Register;


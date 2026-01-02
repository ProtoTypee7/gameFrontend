import React from "react";

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1>✅ Welcome to Dashboard</h1>
      <p>Registration Successful</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#020617",
    color: "#22c55e",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Dashboard;

import React from "react";

const Error = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        height: "100vh",
        color: "#ea3535ff",
      }}
    >
      <div
        className="alert alert-danger d-flex align-items-center"
        role="alert"
        style={{
          padding: "20px 30px",
          borderRadius: "10px",
          fontSize: "1.1rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <i
          className="bi bi-exclamation-triangle-fill me-2"
          style={{ fontSize: "1.5rem" }}
        ></i>
        <div>
          <strong>404 - Page Not Found</strong>
        </div>
      </div>

      <p style={{ marginTop: "20px", fontSize: "1rem" }}>
        Sorry, the page you are looking for does not exist.
      </p>

      <a
        href="/"
        className="btn btn-primary mt-3"
        style={{
          padding: "10px 20px",
          borderRadius: "6px",
          fontSize: "1rem",
        }}
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Error;

// components/Homepage.tsx
import React from "react";

type HomePageProps = {
  onGetStarted: () => void;
};

const HomePage: React.FC<HomePageProps> = ({ onGetStarted }) => {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
        Welcome to the Palisade API Documentation
      </h2>

      <p>
        This platform provides a unified interface to explore and interact with
        a wide range of API modules offered by <strong>Alyson.ai</strong>.
      </p>

      <p>
        Whether you're working with advertising platforms like Facebook and
        Google, managing user sessions, handling campaign logic, or integrating
        data services — all documentation is centralized here.
      </p>

      <p>
        Each module provides structured endpoints, descriptions, and expected
        payloads, allowing developers to quickly integrate and scale their
        applications.
      </p>

      <p>
        Authentication is required to access specific modules. Use the sidebar
        to navigate across different APIs after logging in.
      </p>

      <p>Ready to dive in? Click below to start exploring the documentation.</p>

      <div
        style={{
          backgroundColor: "#f0f8ff",
          padding: "1rem",
          borderRadius: "8px",
          marginTop: "1.5rem",
          border: "1px solid #cce",
        }}
      >
        <strong>Step 1:</strong> Before making any API calls, generate a token:
        <ul>
          <li>
            Call <code>/createUser</code> to create a user. You will find this
            in UserManagement Tab.
          </li>
          <li>
            Then authenticate with <code>/signIn</code> to receive your token.
          </li>
        </ul>
        <strong>Step2: </strong>Use this token in the Authorization header to
        access protected routes.
      </div>

      <button
        onClick={onGetStarted}
        style={{
          marginTop: "2rem",
          backgroundColor: "#07074b",
          color: "#fff",
          padding: "12px 24px",
          border: "none",
          borderRadius: "5px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;

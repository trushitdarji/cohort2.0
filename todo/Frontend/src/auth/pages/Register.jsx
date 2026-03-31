import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { handleRegister, loading } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await handleRegister({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    navigate("/");
  };

  return (
    <div style={styles.wrapper}>
      {/* Background Effects */}
      <div style={styles.bgOrb1} />
      <div style={styles.bgOrb2} />

      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoRow}>
          <div style={styles.logoIcon}>✓</div>
          <span style={styles.logoText}>FocusTodo</span>
        </div>

        <h1 style={styles.heading}>Create your workstation</h1>
        <p style={styles.subheading}>
          Organize your tasks with obsidian precision.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>USERNAME</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => (e.target.style.borderColor = "#7c6fff")}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>EMAIL ADDRESS</label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => (e.target.style.borderColor = "#7c6fff")}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>PASSWORD</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => (e.target.style.borderColor = "#7c6fff")}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
          </div>

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Create Account →
          </button>
        </form>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <span style={styles.loginLink} onClick={() => navigate("/login")}>
            Log in here
          </span>
        </p>

        {/* Bottom icons */}
        <div style={styles.bottomRow}>
          <div style={styles.bottomItem}>
            🔒 <span style={styles.bottomLabel}>SECURE</span>
          </div>
          <div style={styles.bottomItem}>
            🔄 <span style={styles.bottomLabel}>SYNCING</span>
          </div>
          <div style={styles.bottomItem}>
            🛡️ <span style={styles.bottomLabel}>PRIVATE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#0a0a0f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Georgia, serif",
    position: "relative",
    overflow: "hidden",
  },
  bgOrb1: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(124,111,255,0.15) 0%, transparent 70%)",
    top: "-100px",
    right: "-100px",
    pointerEvents: "none",
  },
  bgOrb2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(124,111,255,0.1) 0%, transparent 70%)",
    bottom: "-80px",
    left: "-80px",
    pointerEvents: "none",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "48px 40px",
    width: "100%",
    maxWidth: "420px",
    backdropFilter: "blur(20px)",
    position: "relative",
    zIndex: 1,
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "24px",
  },
  logoIcon: {
    backgroundColor: "#7c6fff",
    color: "white",
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "16px",
  },
  logoText: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  heading: {
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "0 0 8px 0",
  },
  subheading: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "13px",
    textAlign: "center",
    marginBottom: "32px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "11px",
    letterSpacing: "1px",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "12px 16px",
    color: "white",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#7c6fff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "14px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "8px",
    transition: "opacity 0.2s",
  },
  loginText: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "13px",
    textAlign: "center",
    marginTop: "24px",
  },
  loginLink: {
    color: "#7c6fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "center",
    gap: "28px",
    marginTop: "28px",
  },
  bottomItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    fontSize: "16px",
  },
  bottomLabel: {
    color: "rgba(255,255,255,0.3)",
    fontSize: "10px",
    letterSpacing: "1px",
  },
};

export default Register;

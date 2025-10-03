import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordStrength, setPasswordStrength] = useState({
    greaterThanEight: false,
    haveUpperCase: false,
    haveLowerCase: false,
    haveDigit: false,
    haveSpecialChar: false,
    score: 0,
    label: "Weak",
  });

  useEffect(() => {
    const checks = {
      greaterThanEight: password.length >= 8,
      haveUpperCase: /[A-Z]/.test(password),
      haveLowerCase: /[a-z]/.test(password),
      haveDigit: /[0-9]/.test(password),
      haveSpecialChar: /[^A-Za-z0-9]/.test(password),
    };

    const score = Object.values(checks).filter((it) => it).length;

    let label = "Weak";
    if (score > 4) label = "Strong";
    else if (score === 3 || score === 4) label = "Medium";
    else label = "Weak";

    setPasswordStrength({ ...checks, score, label });
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };
  return (
    <div className={`${styles.card}`}>
      <h1 className={`${styles.header}`}>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            className={`${styles.input}`}
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.relative}`}>
          <label
            htmlFor="password"
            className={`${styles.label} ${
              passwordStrength.score > 4
                ? styles.labelStrong
                : passwordStrength.score === 3 || passwordStrength.score === 4
                ? styles.labelMedium
                : styles.labelWeak
            }`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`${styles.input} ${
              passwordStrength.score > 4
                ? styles.strong
                : passwordStrength.score === 3 || passwordStrength.score === 4
                ? styles.medium
                : styles.weak
            }`}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p
            className={`${styles.passStrength} ${
              passwordStrength.score > 4
                ? styles.labelStrong
                : passwordStrength.score === 3 || passwordStrength.score === 4
                ? styles.labelMedium
                : styles.labelWeak
            }`}
          >
            Your password strength is {" " + passwordStrength.label}
          </p>
          <div className={`${styles.passwordStrengthContainer}`}>
            <p className={`${styles.passwordStrengthItem}`}>
              <span className={styles.passwordStrengthIcon}>
                {passwordStrength.greaterThanEight ? (
                  <span style={{ color: "#2ecc71", fontSize: "0.8rem" }}>
                    ✓
                  </span>
                ) : (
                  <span style={{ color: "#e74c3c", fontSize: "0.8rem" }}>
                    ✗
                  </span>
                )}
              </span>
              Password must be of atleast 8 characters
            </p>
            <p className={`${styles.passwordStrengthItem}`}>
              <span className={styles.passwordStrengthIcon}>
                {passwordStrength.haveUpperCase ? (
                  <span style={{ color: "#2ecc71", fontSize: "0.8rem" }}>
                    ✓
                  </span>
                ) : (
                  <span style={{ color: "#e74c3c", fontSize: "0.8rem" }}>
                    ✗
                  </span>
                )}
              </span>
              Password must have atleast 1 uppercase letter
            </p>
            <p className={`${styles.passwordStrengthItem}`}>
              <span className={styles.passwordStrengthIcon}>
                {passwordStrength.haveLowerCase ? (
                  <span style={{ color: "#2ecc71", fontSize: "0.8rem" }}>
                    ✓
                  </span>
                ) : (
                  <span style={{ color: "#e74c3c", fontSize: "0.8rem" }}>
                    ✗
                  </span>
                )}
              </span>
              Password must have atleast 1 lowercase letter
            </p>
            <p className={`${styles.passwordStrengthItem}`}>
              <span className={styles.passwordStrengthIcon}>
                {passwordStrength.haveDigit ? (
                  <span style={{ color: "#2ecc71", fontSize: "0.8rem" }}>
                    ✓
                  </span>
                ) : (
                  <span style={{ color: "#e74c3c", fontSize: "0.8rem" }}>
                    ✗
                  </span>
                )}
              </span>
              Password must have atleast 1 digit
            </p>
            <p className={`${styles.passwordStrengthItem}`}>
              <span className={styles.passwordStrengthIcon}>
                {passwordStrength.haveSpecialChar ? (
                  <span style={{ color: "#2ecc71", fontSize: "0.8rem" }}>
                    ✓
                  </span>
                ) : (
                  <span style={{ color: "#e74c3c", fontSize: "0.8rem" }}>
                    ✗
                  </span>
                )}
              </span>
              Password must have atleast 1 special character
            </p>
          </div>
        </div>
        <button className={`${styles.submit}`}>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;

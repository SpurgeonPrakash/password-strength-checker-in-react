import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={`${styles.card}`}>
      <h1 className={`${styles.header}`}>Sign Up</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            className={`${styles.input}`}
            placeholder="Enter your username"
          />
        </div>
        <div className={`${styles.formGroup} ${styles.relative}`}>
          <label htmlFor="password" className={`${styles.label} `}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`${styles.input} `}
            placeholder="Enter your password"
          />
        </div>
        <button className={`${styles.submit}`}>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;

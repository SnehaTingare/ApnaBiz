const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>ApnaBiz</h2>

      <div style={styles.links}>
        <button style={styles.btn}>Login</button>
        <button style={styles.btnOutline}>Sign Up</button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    height: "64px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#2563eb",
  },
  links: {
    display: "flex",
    gap: "12px",
  },
  btn: {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    cursor: "pointer",
  },
  btnOutline: {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "1px solid #2563eb",
    backgroundColor: "transparent",
    color: "#2563eb",
    cursor: "pointer",
  },
};

export default Navbar;

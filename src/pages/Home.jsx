const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Discover Local Businesses in Nashik
      </h1>

      <p style={styles.subtext}>
        Find grocery stores, medical shops, salons, and agriculture essentials near you.
      </p>

      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search for shops, services, or categories..."
          style={styles.input}
        />
        <button style={styles.searchBtn}>Search</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "12px",
  },
  subtext: {
    fontSize: "16px",
    color: "#6b7280",
    marginBottom: "28px",
    maxWidth: "600px",
  },
  searchBox: {
    display: "flex",
    width: "100%",
    maxWidth: "520px",
  },
  input: {
    flex: 1,
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #d1d5db",
    borderRadius: "6px 0 0 6px",
    outline: "none",
  },
  searchBtn: {
    padding: "12px 20px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontSize: "16px",
    borderRadius: "0 6px 6px 0",
    cursor: "pointer",
  },
};

export default Home;

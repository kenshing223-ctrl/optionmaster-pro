export default function Options() {
  return (
    <main>
      <h2 style={{ fontSize: 26, fontWeight: 800 }}>Options Chain</h2>
      <p style={{ opacity: 0.8 }}>Placeholder — next we’ll fetch real options data and calculate Greeks/IV.</p>

      <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 10, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>AAPL</strong>
          <span style={{ opacity: 0.7 }}>Demo data</span>
        </div>
        <p style={{ marginBottom: 0, opacity: 0.8 }}>ATM IV: 32% • Put Delta: -0.20 • DTE: 30</p>
      </div>
    </main>
  );
}
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>OptionMaster Pro</h1>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Ken is building a real trading app 🚀
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
        <Link href="/dashboard">Go to Dashboard</Link>
        <Link href="/options">Open Options Chain</Link>
        <Link href="/strategies">Strategy Builder</Link>
      </div>

      <hr style={{ margin: "20px 0", opacity: 0.2 }} />

      <p style={{ opacity: 0.75 }}>
        Next steps: market data, IV alerts, strategy P&L, risk manager.
      </p>
    </main>
  );
}
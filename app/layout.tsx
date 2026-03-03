import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "OptionMaster Pro",
  description: "Ken's options trading app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui" }}>
        <header style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <nav
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              padding: "14px 18px",
              display: "flex",
              gap: 14,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <strong style={{ marginRight: 8 }}>OptionMaster Pro</strong>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/options">Options</Link>
            <Link href="/strategies">Strategies</Link>
          </nav>
        </header>

        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "18px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
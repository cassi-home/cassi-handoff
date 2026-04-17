import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cassi v1 — Engineering Handoff",
  description: "Build specs, prototypes, and Linear tickets for every v1 feature.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --bg: #0a0a0a;
            --surface: #141414;
            --border: rgba(255,255,255,0.08);
            --text-1: #e5e5e5;
            --text-2: #a0a0a0;
            --text-3: #666;
            --amber: #FF9500;
            --success: #34C759;
            --urgent: #FF3B30;
            --lilac: #B5AAEE;
            --teal: #5AC8FA;
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background: var(--bg);
            color: var(--text-1);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            -webkit-font-smoothing: antialiased;
          }
          a { color: inherit; }
          ::selection { background: rgba(255,149,0,0.2); }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}

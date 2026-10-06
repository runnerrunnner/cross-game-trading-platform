import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LootLink | Cross-Game Trading',
  description: 'Modern cross-game trading platform for item swaps, market values, and community trust.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div className="container nav-shell">
            <Link href="/" className="brand">
              <span className="brand-mark">L</span>
              LootLink
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/browse">Browse Trades</Link>
              <Link href="/create-trade">Create Trade</Link>
              <Link href="/messages">Messages</Link>
              <Link href="/trading-chart">Trading Chart</Link>
              <Link href="/scam-hall">Scam Hall</Link>
              <Link href="/profiles">Profiles</Link>
              <Link href="/settings">Settings</Link>
              <Link href="/moderator-dashboard">Moderator Dashboard</Link>
            </nav>
            <div className="nav-actions">
              <button className="secondary-btn">Log in</button>
              <button className="primary-btn">Create account</button>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

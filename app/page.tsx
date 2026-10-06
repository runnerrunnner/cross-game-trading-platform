import Link from 'next/link';

const featuredTrades = [
  {
    title: 'Steal a Brainrot Value Stack',
    game: 'Steal a Brainrot',
    user: 'brainrotbrawler',
    offer: '2 rare pets + 1 skin crate',
    wants: 'Minecraft rare items / cosmetic drops',
    rating: '4.9',
    trust: 'Trusted Trader',
  },
  {
    title: 'Donut SMP Trade',
    game: 'Minecraft / Donut SMP',
    user: 'pixelpalace',
    offer: 'Legendary custom build pack',
    wants: 'Roblox limiteds + Fortnite emotes',
    rating: '4.8',
    trust: 'Verified',
  },
  {
    title: 'Roblox Item Swap',
    game: 'Roblox',
    user: 'blokbox',
    offer: 'Rare pet + accessory bundle',
    wants: 'VALORANT knife skins or cosmetic bundles',
    rating: '4.7',
    trust: 'Trusted Trader',
  },
];

const features = [
  'Private trade rooms with anti-abuse detection',
  'Moderator-reviewed photo approvals and listing removals',
  'Verified middleman system for large three-way transfers',
  'Transparency-first scam reporting and evidence tracking',
];

const stats = [
  { label: 'Active traders', value: '18.4K' },
  { label: 'Monthly trades', value: '42K' },
  { label: 'Moderation cases', value: '1.9K' },
  { label: 'Avg. response time', value: '6m' },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Cross-game trading reimagined</p>
            <h1>Trade smarter across the games you actually play.</h1>
            <p className="hero-copy">
              Discover listings across Steal a Brainrot, Minecraft/Donut SMP, Roblox,
              Fortnite, VALORANT, and other communities — with safeguards for trust,
              moderation, and transparent value checks.
            </p>
            <div className="hero-actions">
              <Link href="/browse" className="primary-btn">Browse trades</Link>
              <Link href="/create-trade" className="secondary-btn">Create listing</Link>
            </div>
            <ul className="trust-pills" aria-label="Game support list">
              <li>Steal a Brainrot</li>
              <li>Minecraft</li>
              <li>Roblox</li>
              <li>Fortnite</li>
              <li>VALORANT</li>
            </ul>
          </div>
          <div className="hero-panel">
            <div className="mini-card big">
              <span className="mini-label">Top market value</span>
              <strong>1.4M</strong>
              <small>combined value in approved chart submissions</small>
            </div>
            <div className="mini-card stack">
              <span className="mini-label">Verified middleman</span>
              <strong>3-person trade room</strong>
              <small>Exact agreement + proof of transfer</small>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured listings</p>
            <h2>Popular trades from trusted users</h2>
          </div>
          <Link href="/browse" className="text-link">View all listings →</Link>
        </div>

        <div className="trade-grid">
          {featuredTrades.map((trade) => (
            <article key={trade.title} className="trade-card">
              <div className="card-topline">
                <span className="chip">{trade.game}</span>
                <span className="rating">★ {trade.rating}</span>
              </div>
              <h3>{trade.title}</h3>
              <p>
                <strong>{trade.user}</strong> is offering: {trade.offer}
              </p>
              <p>Wants: {trade.wants}</p>
              <div className="card-footer">
                <span className="status-badge">{trade.trust}</span>
                <button className="primary-btn small">Make Offer</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split-panel">
          <div>
            <p className="eyebrow">Built for safety</p>
            <h2>Trust layers that actually protect people.</h2>
            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="safety-card">
            <h3>Important platform note</h3>
            <p>
              LootLink does not automatically transfer game items. If an official game
              system, marketplace, or account support flow does not support the transfer,
              it is not automatically processed by the platform.
            </p>
            <div className="inline-note">
              <span className="dot" />
              Trades are carried out by users with platform safeguards, not by automatic item movement.
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Verification</p>
            <h2>Tooling for safer negotiation</h2>
          </div>
        </div>
        <div className="info-grid">
          <div className="info-card">
            <h3>Private chat moderation</h3>
            <p>
              Messages are monitored for harassment, slurs, threats, and inappropriate
              language, with user reporting and block enforcement built in.
            </p>
          </div>
          <div className="info-card">
            <h3>Scam transparency</h3>
            <p>
              The Scam Hall only includes moderator-confirmed scammers with evidence,
              reasons, dates, appeals, and public moderation logs. Accusations alone remain private.
            </p>
          </div>
          <div className="info-card">
            <h3>Price guide review</h3>
            <p>
              Suggested values are submitted with evidence and only become public after a
              moderator approves them.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';

const listings = [
  {
    game: 'Roblox',
    title: 'Rare Pet Combo + Limited Area',
    user: 'qwertyquest',
    offer: '2 rare pets, 1 accessory bundle',
    wants: 'Fortnite cosmetics or VALORANT weapon skins',
    status: 'Trusted Trader',
  },
  {
    game: 'Minecraft / Donut SMP',
    title: 'Custom Realm Build Pack',
    user: 'pixelpalace',
    offer: 'Legendary build collection + custom tools',
    wants: 'Roblox limiteds or other cosmetic bundles',
    status: 'Verified',
  },
  {
    game: 'Fortnite',
    title: 'OG Skin + Back Bling Swap',
    user: 'loopmaster',
    offer: 'Rare skin set + locker cosmetics',
    wants: 'Steal a Brainrot pet line or custom account items',
    status: 'Trusted Trader',
  },
  {
    game: 'VALORANT',
    title: 'Collectible Gun Skin Trade',
    user: 'aimagency',
    offer: 'Premium bundle skins',
    wants: 'Roblox items or Minecraft rare cosmetics',
    status: 'Moderator Verified',
  },
];

export default function BrowsePage() {
  return (
    <main className="container">
      <section className="page-hero">
        <p className="eyebrow">Browse trades</p>
        <h1>Discover listings across games.</h1>
        <p className="subtle">Search by game, item type, wanted items, and platform trust level.</p>
      </section>

      <section className="grid-layout">
        <div className="site-card">
          <div className="row-actions" style={{ marginBottom: '18px' }}>
            <span className="tag">All games</span>
            <span className="tag">Roblox</span>
            <span className="tag">Fortnite</span>
            <span className="tag">VALORANT</span>
            <span className="tag">Minecraft</span>
          </div>
          <div className="trade-grid" style={{ gridTemplateColumns: '1fr' }}>
            {listings.map((listing) => (
              <article key={listing.title} className="trade-card">
                <div className="card-topline">
                  <span className="chip">{listing.game}</span>
                  <span className="status-badge">{listing.status}</span>
                </div>
                <h3>{listing.title}</h3>
                <p><strong>{listing.user}</strong></p>
                <p>Offering: {listing.offer}</p>
                <p>Wants: {listing.wants}</p>
                <div className="card-footer">
                  <button className="primary-btn small">Make Offer</button>
                  <button className="secondary-btn">Report Trade</button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="site-card">
          <h3>Search filters</h3>
          <div className="note-box">
            <strong>Game:</strong> All games<br />
            <strong>Item type:</strong> Cosmetics, pets, bundles, accounts<br />
            <strong>Trust:</strong> Verified / Trusted Trader / Moderator Approved
          </div>
          <div style={{ marginTop: '18px' }}>
            <Link href="/create-trade" className="primary-btn">Create a trade</Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

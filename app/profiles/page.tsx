const scamCases = [
  {
    name: 'gamerguy42',
    reason: 'Fake middleman escrow and disappearing account drops',
    evidence: '2 separate moderator-confirmed cases',
    date: '2026-09-12',
    status: 'Confirmed scammer',
  },
  {
    name: 'lootghost',
    reason: 'Created fake listings and pressured users for upfront money',
    evidence: 'User reports + account logs',
    date: '2026-09-28',
    status: 'Appeal pending',
  },
];

export default function ScamHallPage() {
  return (
    <main className="container">
      <section className="page-hero">
        <p className="eyebrow">Scam hall</p>
        <h1>Moderator-confirmed scam activity only.</h1>
      </section>

      <section className="grid-layout">
        <div className="site-card">
          <div className="mod-list">
            {scamCases.map((entry) => (
              <div key={entry.name} className="mod-row">
                <div className="mod-meta">
                  <strong>{entry.name}</strong>
                  <span className="subtle">{entry.reason}</span>
                  <span className="subtle">Evidence: {entry.evidence}</span>
                  <span className="subtle">Date: {entry.date}</span>
                </div>
                <span className="alert-tag">{entry.status}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="site-card">
          <h3>Policy reminder</h3>
          <div className="note-box">
            Accusations do not automatically become public. A moderator must verify evidence before a
            user appears on the Scam Hall. Appeals and moderation logs remain visible to the review team.
          </div>
        </aside>
      </section>
    </main>
  );
}

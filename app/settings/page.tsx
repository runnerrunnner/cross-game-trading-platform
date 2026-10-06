const profiles = [
  {
    name: 'brainrotbrawler',
    role: 'Trusted Trader',
    joined: 'Joined Sep 2024',
    completed: '132 completed trades',
    rating: '4.9 / 5',
  },
  {
    name: 'pixelpalace',
    role: 'Member',
    joined: 'Joined Jan 2025',
    completed: '84 completed trades',
    rating: '4.8 / 5',
  },
  {
    name: 'mod-aurora',
    role: 'Moderator',
    joined: 'Joined Nov 2023',
    completed: '270 moderation reviews',
    rating: '5.0 / 5',
  },
];

export default function ProfilesPage() {
  return (
    <main className="container">
      <section className="page-hero">
        <p className="eyebrow">Profiles</p>
        <h1>Trader reputation, reviews, and trust history.</h1>
      </section>

      <section className="trade-grid">
        {profiles.map((profile) => (
          <article key={profile.name} className="profile-card site-card">
            <div className="profile-meta">
              <strong>{profile.name}</strong>
              <span className="status-badge">{profile.role}</span>
            </div>
            <p>{profile.joined}</p>
            <p>{profile.completed}</p>
            <p>Rating: {profile.rating}</p>
            <button className="primary-btn small">View profile</button>
          </article>
        ))}
      </section>
    </main>
  );
}

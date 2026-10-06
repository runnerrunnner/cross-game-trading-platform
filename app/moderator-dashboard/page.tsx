export default function SettingsPage() {
  return (
    <main className="container">
      <section className="page-hero">
        <p className="eyebrow">Settings</p>
        <h1>Account preferences and protection controls.</h1>
      </section>

      <section className="grid-layout">
        <div className="site-card form-panel">
          <label>
            Username
            <input type="text" defaultValue="brainrotbrawler" />
          </label>
          <label>
            Email
            <input type="email" defaultValue="user@example.com" />
          </label>
          <label>
            Password recovery email
            <input type="email" defaultValue="backup@example.com" />
          </label>
          <button className="primary-btn">Save changes</button>
        </div>

        <aside className="site-card">
          <h3>Privacy and safety</h3>
          <div className="note-box">
            Users can control blocking, notification rules, profile visibility, and message filters.
            Private emails are protected and only used for recovery and moderation contact when needed.
          </div>
        </aside>
      </section>
    </main>
  );
}

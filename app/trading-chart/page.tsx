const chats = [
  { title: 'Trade chat with pixelpalace', status: 'Active', severity: 'Low risk' },
  { title: 'Middleman coordination', status: 'Middleman added', severity: 'Checked' },
  { title: 'Roblox bundle negotiation', status: 'Blocked user', severity: 'Blocked' },
];

export default function MessagesPage() {
  return (
    <main className="container">
      <section className="page-hero">
        <p className="eyebrow">Messages</p>
        <h1>Private trade rooms and safety checks.</h1>
      </section>

      <section className="grid-layout">
        <div className="chat-panel site-card">
          <div className="chat-list">
            {chats.map((chat) => (
              <div key={chat.title} className="chat-row">
                <div className="chat-meta">
                  <strong>{chat.title}</strong>
                  <span className="subtle">Last message 4 minutes ago</span>
                </div>
                <div className="row-actions">
                  <span className="chat-badge">{chat.status}</span>
                  <span className={chat.severity === 'Blocked' ? 'alert-tag' : 'level-badge'}>{chat.severity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="site-card">
          <h3>Safety automations</h3>
          <div className="note-box">
            Private trade chats automatically detect inappropriate language, threats, slurs, and
            harassment. Users can report messages, block other traders, and stop a user from being
            mentioned, added to chats, or contacted if they are blocked.
          </div>
        </aside>
      </section>
    </main>
  );
}

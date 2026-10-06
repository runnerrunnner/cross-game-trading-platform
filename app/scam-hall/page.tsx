const submissions = [
  { item: 'Rare Roblox pet', value: '2,400', evidence: '3 recent sales + trade logs', status: 'Approved' },
  { item: 'Fortnite emote set', value: '1,100', evidence: 'Verified historical offers', status: 'Pending review' },
  { item: 'Steal a Brainrot legendary pet', value: '3,500', evidence: 'Moderator evidence reviewed', status: 'Rejected' },
];

export default function TradingChartPage() {
  return (
    <main className="container">
      <section className="page-hero">
        <p className="eyebrow">Trading chart</p>
        <h1>Approved values only.</h1>
      </section>

      <section className="table-card site-card">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Suggested value</th>
              <th>Evidence</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((entry) => (
              <tr key={entry.item}>
                <td>{entry.item}</td>
                <td>{entry.value}</td>
                <td>{entry.evidence}</td>
                <td><span className={entry.status === 'Approved' ? 'level-badge' : entry.status === 'Rejected' ? 'alert-tag' : 'chat-badge'}>{entry.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

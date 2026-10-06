export default function CreateTradePage() {
  return (
    <main className="container">
      <section className="page-hero">
        <p className="eyebrow">Create trade</p>
        <h1>List what you are trading and what you want.</h1>
      </section>

      <section className="grid-layout">
        <div className="form-panel site-card">
          <form>
            <label>
              Trade title
              <input type="text" placeholder="Rare pet bundle + limited set" />
            </label>
            <label>
              Game
              <select defaultValue="minecraft">
                <option value="minecraft">Minecraft / Donut SMP</option>
                <option value="roblox">Roblox</option>
                <option value="fortnite">Fortnite</option>
                <option value="valorant">VALORANT</option>
                <option value="brainrot">Steal a Brainrot</option>
              </select>
            </label>
            <label>
              What are you offering?
              <textarea placeholder="List the exact items, skins, pets, or account content you are offering." />
            </label>
            <label>
              What do you want in return?
              <textarea placeholder="List the exact trades, items, or account content you want to receive." />
            </label>
            <label>
              Upload photos
              <input type="file" multiple />
            </label>
            <button type="submit" className="primary-btn">Submit for moderation</button>
          </form>
        </div>

        <aside className="site-card">
          <h3>Posting rules</h3>
          <div className="note-box">
            Uploaded photos require moderator approval before becoming public. All listings are
            reviewed for clear item details, compliance, and safety. You must not publicly accuse a
            user of scam behavior without moderator review.
          </div>
        </aside>
      </section>
    </main>
  );
}

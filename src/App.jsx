function App() {
  return (
    <main className="coming-soon">
      <div className="coming-soon-media">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-storefront.jpg`}
          alt=""
          aria-hidden="true"
        />
        <div className="coming-soon-scrim" />
      </div>

      <div className="coming-soon-content">
        <p className="eyebrow">A Stone Arts Destination · New York City</p>
        <h1 className="coming-soon-title">
          Stone <em>Union</em>
        </h1>
        <img
          className="coming-soon-mark"
          src={`${import.meta.env.BASE_URL}images/tools-icon-2.jpg`}
          alt=""
          aria-hidden="true"
        />
        <p className="coming-soon-tag">Studios&nbsp;+&nbsp;Gallery&nbsp;+&nbsp;Café</p>
        <p className="tag coming-soon-badge">Coming in 2027</p>
      </div>
    </main>
  );
}

export default App;

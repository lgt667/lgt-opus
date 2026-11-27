export default function SectionHead({ index, label, title, aside, titleId }) {
  return (
    <header className="section-head" data-reveal>
      <div className="section-head__meta">
        <span className="section-head__index">{index}</span>
        <span className="eyebrow">{label}</span>
      </div>
      <div className="section-head__main">
        <h2 id={titleId}>{title}</h2>
        {aside ? <p className="section-head__aside">{aside}</p> : null}
      </div>
    </header>
  )
}

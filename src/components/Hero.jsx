import { profile } from '../data/content'
import { ArrowDown, ArrowUpRight } from './Icons'
import './hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-poster.webp"
          tabIndex={-1}
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__veil" />
        <div className="hero__grid grid-lines" />
      </div>

      <div className="hero__inner container">
        <div className="hero__top" data-reveal>
          <p className="eyebrow eyebrow--ink">LU GUANTONG — CLOUD &amp; NETWORK OPS</p>
          <div className="hero__top-meta">
            <span>PORTFOLIO / 2026</span>
            <span>GUILIN · CN</span>
          </div>
        </div>

        <div className="hero__main">
          <div className="hero__headline" data-reveal style={{ '--reveal-delay': '80ms' }}>
            <div className="hero__role-row">
              <span className="hero__role-dot" aria-hidden="true" />
              <p>
                {profile.name} / {profile.role} · 2027 届
              </p>
            </div>
            <h1 id="hero-title">
              <span className="hero__line">系统要稳</span>
              <span className="hero__line">问题要清</span>
            </h1>
          </div>

          <aside className="hero__rail" aria-hidden="true">
            <span>SRE / CLOUD OPS / 2027</span>
            <span className="hero__rail-line" />
            <span>AVAILABLE</span>
          </aside>
        </div>

        <div className="hero__lower">
          <div className="hero__intro" data-reveal style={{ '--reveal-delay': '160ms' }}>
            <p className="hero__intro-main">
              用 Linux、容器与监控把服务从「能跑」做到「可控」，也用 Git 让每次改动可追溯。
              我喜欢沿着请求链路拆解问题，并把排障过程写成复盘。
            </p>
            <div className="hero__intro-sub">
              <span>3 个完整实战项目</span>
              <span>网络工程师（软考中级备考中）</span>
              <span>ACA 阿里云初级认证</span>
            </div>
          </div>
          <div className="hero__actions" data-reveal style={{ '--reveal-delay': '220ms' }}>
            <a className="btn" href="#projects">
              查看项目
              <span className="btn__icon">
                <ArrowDown size={17} />
              </span>
            </a>
            <a className="btn btn--ghost" href="mailto:3082840750@qq.com">
              联系我
              <span className="btn__icon">
                <ArrowUpRight size={17} />
              </span>
            </a>
          </div>
        </div>

        <div className="hero__stats" data-reveal style={{ '--reveal-delay': '280ms' }}>
          {profile.stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <span className="hero-stat__value">{stat.value}</span>
              <span className="hero-stat__label">{stat.label}</span>
            </div>
          ))}
          <div className="hero__scroll">
            <a href="#profile" aria-label="向下浏览个人经历">
              <span>SCROLL</span>
              <span className="hero__scroll-line" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

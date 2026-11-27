import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from './Icons'
import './project-modal.css'

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const panel = panelRef.current
    if (panel) panel.scrollTop = 0

    const focusableSelector =
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panel) return
      const nodes = Array.from(panel.querySelectorAll(focusableSelector)).filter(
        (node) => node.offsetParent !== null,
      )
      if (!nodes.length) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    const timer = window.setTimeout(() => closeRef.current?.focus(), 30)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(timer)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [onClose, project.id])

  const { detail } = project

  const evidenceGroups = detail.evidence.reduce((groups, item) => {
    const key = item.group || 'evidence'
    if (!groups[key]) groups[key] = []
    groups[key].push(item)
    return groups
  }, {})

  const evidenceMeta = {
    verify: {
      title: '验证与运行证据',
      note: '从终端、浏览器与 HAProxy 后台确认结果真实发生。',
    },
    incident: {
      title: '故障与高可用证据',
      note: '从故障现场和健康检查结果，反推排查路径。',
    },
    git: {
      title: 'Git 版本化证据',
      note: '从暂存区到远程仓库，再到 ECS 只读拉取。',
    },
    platform: {
      title: '平台部署与运行',
      note: 'Nginx、5 个业务容器与 AI 生成的前后端代码。',
    },
    monitor: {
      title: '监控与告警',
      note: '主机与容器指标进入 Prometheus，再由 Grafana 展示。',
    },
    docker: {
      title: '部署与运行',
      note: 'Nginx + WordPress + MySQL 的 7 个容器。',
    },
    evidence: {
      title: '过程证据',
      note: '',
    },
  }

  const evidenceNumber = detail.git ? '07' : '06'

  return createPortal(
    <div
      className="case-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="case-study"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        ref={panelRef}
      >
        <header className="case-study__bar">
          <div className="case-study__bar-title">
            <span>{project.index}</span>
            <span>{project.kicker}</span>
          </div>
          <button
            className="case-study__close"
            type="button"
            onClick={onClose}
            ref={closeRef}
            aria-label="关闭案例详情"
          >
            <CloseIcon size={22} />
          </button>
        </header>

        <div className="case-study__hero">
          <figure className="case-study__figure">
            <img src={project.image} alt={project.imageAlt} />
            <figcaption>FIG. {project.id.toUpperCase()} — SYSTEM ARCHITECTURE</figcaption>
          </figure>
          <div className="case-study__intro">
            <p className="eyebrow">{project.year} / CASE STUDY</p>
            <h2 id="case-study-title">{project.title}</h2>
            <p className="case-study__subtitle">{project.subtitle}</p>
            <p className="case-study__summary">{project.summary}</p>
            <div className="case-study__metrics">
              {project.metrics.map((metric) => (
                <div className="case-study-metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="case-study__tags tag-list">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="case-study__body">
          <section className="case-section">
            <div className="case-section__head">
              <span>01</span>
              <h3>项目背景</h3>
            </div>
            <p>{detail.background}</p>
          </section>

          <div className="case-study__split">
            <section className="case-section">
              <div className="case-section__head">
                <span>02</span>
                <h3>我做了什么</h3>
              </div>
              <ol className="case-list case-list--numbered">
                {detail.actions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            <section className="case-section">
              <div className="case-section__head">
                <span>03</span>
                <h3>结果与验证</h3>
              </div>
              <ul className="case-list">
                {detail.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="case-incident">
            <div className="case-incident__label">
              <span>04</span>
              <span className="eyebrow">INCIDENT REVIEW / 故障复盘</span>
            </div>
            <h3>{detail.incident.title}</h3>
            <p>{detail.incident.text}</p>
          </section>

          <section className="case-section case-section--reflection">
            <div className="case-section__head">
              <span>05</span>
              <h3>复盘与下一步</h3>
            </div>
            <p>{detail.reflection}</p>
          </section>

          {detail.git ? (
            <section className="case-git">
              <div className="case-section__head">
                <span>06</span>
                <h3>Git 版本化 / 项目上 Git</h3>
              </div>
              <div className="case-git__grid">
                <div className="case-git__lead">
                  <p className="eyebrow">{detail.git.eyebrow}</p>
                  <h4>{detail.git.title}</h4>
                  <p>{detail.git.intro}</p>
                  <div className="case-git__stats">
                    {detail.git.stats.map((item) => (
                      <div key={item.label}>
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <ol className="case-git__steps">
                  {detail.git.actions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            </section>
          ) : null}

          {detail.evidence.length ? (
            <section className="case-evidence">
              <div className="case-evidence__head">
                <div className="case-section__head">
                  <span>{evidenceNumber}</span>
                  <h3>过程证据</h3>
                </div>
                <span className="case-evidence__count">
                  {detail.evidence.length} FRAMES / 点击查看原图
                </span>
              </div>

              {Object.entries(evidenceGroups).map(([groupKey, items], groupIndex) => {
                const meta = evidenceMeta[groupKey] || evidenceMeta.evidence
                const code = String.fromCharCode(65 + groupIndex)
                return (
                  <div className="case-evidence__group" key={groupKey}>
                    <div className="case-evidence__group-head">
                      <span className="case-evidence__group-code">{code}</span>
                      <h4>{meta.title}</h4>
                      <span className="case-evidence__group-count">{items.length} 张</span>
                    </div>
                    {meta.note ? <p className="case-evidence__group-note">{meta.note}</p> : null}

                    <div className="case-evidence__grid">
                      {items.map((item) => (
                        <figure className={item.wide ? 'is-wide' : undefined} key={item.src}>
                          <a
                            className="case-evidence__thumb"
                            href={item.src}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`查看原图：${item.label || item.alt}`}
                          >
                            <img src={item.src} alt={item.alt} loading="lazy" />
                            <span className="case-evidence__zoom">VIEW FULL SIZE</span>
                          </a>
                          <figcaption>
                            <span className="case-evidence__label">
                              {item.label || '过程截图'}
                            </span>
                            <span className="case-evidence__caption">
                              {item.caption || item.alt}
                            </span>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )
              })}
            </section>
          ) : null}

          <footer className="case-study__footer">
            <span>END OF CASE / {project.index}</span>
            <button type="button" onClick={onClose}>
              返回项目列表
            </button>
          </footer>
        </div>
      </div>
    </div>,
    document.body,
  )
}

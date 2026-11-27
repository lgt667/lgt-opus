import { projects } from '../data/content'
import { ArrowUpRight } from './Icons'
import SectionHead from './SectionHead'
import './projects.css'

export default function Projects({ onOpen }) {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          index="02"
          label="SELECTED WORK / 精选项目"
          title={
            <>
              三个项目，
              <br />
              把系统跑稳。
            </>
          }
          aside="分别回答高可用、交付效率与可观测性。每个项目都能从架构讲到一次具体故障，而不只是几张截图。"
          titleId="projects-title"
        />

        <div className="projects__list">
          {projects.map((project, position) => (
            <article
              className={`project${position % 2 === 1 ? ' project--reverse' : ''}`}
              key={project.id}
              data-reveal
            >
              <button
                className="project__media"
                type="button"
                onClick={() => onOpen(project)}
                aria-label={`打开${project.title}案例详情`}
              >
                <span className="project__chrome">
                  <span className="project__chrome-dot" aria-hidden="true" />
                  <span>EVIDENCE / {project.id.toUpperCase()}</span>
                  <span className="project__chrome-right">ARCHITECTURE</span>
                </span>
                <span className="project__image-wrap">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </span>
                <span className="project__media-hint" aria-hidden="true">
                  OPEN CASE
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <div className="project__content">
                <div className="project__meta">
                  <span className="project__index">{project.index}</span>
                  <span className="project__year">{project.year}</span>
                </div>
                <p className="eyebrow project__kicker">{project.kicker}</p>
                <h3>{project.title}</h3>
                <p className="project__subtitle">{project.subtitle}</p>
                <p className="project__summary">{project.summary}</p>

                <div className="project__tags tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.detail.evidence.length ? (
                  <p className="project__evidence">
                    <span className="project__evidence-dot" aria-hidden="true" />
                    <span>{project.detail.evidence.length} 张过程证据 · 点击打开案例查看</span>
                  </p>
                ) : null}

                <div className="project__metrics">
                  {project.metrics.map((metric) => (
                    <div className="project-metric" key={metric.label}>
                      <span className="project-metric__value">{metric.value}</span>
                      <span className="project-metric__label">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <button className="project__open" type="button" onClick={() => onOpen(project)}>
                  <span>打开案例</span>
                  <span className="project__open-icon">
                    <ArrowUpRight size={18} />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

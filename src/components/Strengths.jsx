import { learning, strengths } from '../data/content'
import SectionHead from './SectionHead'
import './strengths.css'

export default function Strengths() {
  return (
    <section className="section section--soft strengths" id="strengths" aria-labelledby="strengths-title">
      <div className="container">
        <SectionHead
          index="03"
          label="CAPABILITIES / 个人优势"
          title="工具会过时，排障方法不会。"
          aside="我更愿意展示「能做什么、怎么验证」，而不是罗列一串熟悉的软件名。每一项能力背后，都有一个做过、坏过、修好的项目。"
          titleId="strengths-title"
        />

        <div className="strengths__grid">
          {strengths.map((item, index) => (
            <article
              className={`strength-card${item.accent ? ' is-accent' : ''}`}
              key={item.num}
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <div className="strength-card__top">
                <span className="strength-card__num">{item.num}</span>
                <span className="strength-card__proof">{item.proof}</span>
              </div>
              <div className="strength-card__body">
                <h3>{item.title}</h3>
                <p className="strength-card__lede">{item.lede}</p>
                <p className="strength-card__copy">{item.body}</p>
              </div>
              <div className="strength-card__tags tag-list">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="strengths__next" data-reveal>
          <div className="strengths__next-copy">
            <span className="eyebrow">NEXT / 正在补强</span>
            <p>把单机能力推进到集群与自动化，是我下一阶段的主线。</p>
          </div>
          <div className="strengths__next-tags">
            {learning.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

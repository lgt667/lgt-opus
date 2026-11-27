import { credentials, experience, profile } from '../data/content'
import { contactIcons } from './Icons'
import SectionHead from './SectionHead'
import './profile.css'

function ContactItem({ item }) {
  const Icon = contactIcons[item.icon]
  const content = (
    <>
      <span className="profile-contact__icon">
        <Icon size={17} />
      </span>
      <span className="profile-contact__text">
        <span className="profile-contact__label">{item.label}</span>
        <span className="profile-contact__value">{item.value}</span>
      </span>
    </>
  )

  if (!item.href) {
    return <div className="profile-contact">{content}</div>
  }

  return (
    <a className="profile-contact" href={item.href}>
      {content}
    </a>
  )
}

export default function Profile() {
  return (
    <section className="section profile" id="profile" aria-labelledby="profile-title">
      <div className="container">
        <SectionHead
          index="01"
          label="PROFILE / 个人经历"
          title="工程思维，动手落地。"
          aside="土木与水利工程的系统训练给了我结构化的思考方式；Linux、云与容器，是我选择动手解决问题的地方。"
          titleId="profile-title"
        />

        <div className="profile__layout">
          <figure className="profile__portrait" data-reveal>
            <div className="profile__portrait-frame">
              <img
                src="/media/portrait.svg"
                alt="卢冠彤的抽象几何人物肖像，由黑色扫描线、红色方块和网格构成"
                width="840"
                height="1040"
              />
            </div>
            <figcaption>
              <span>FIG. 01 — IDENTITY STUDY</span>
              <span>PORTRAIT / 2026</span>
            </figcaption>
          </figure>

          <div className="profile__body">
            <div className="profile__intro" data-reveal>
              <p className="profile__lead">
                我是{profile.name}，一名把「让服务稳定运行」当作核心目标的运维方向本科生。
              </p>
              <p className="profile__copy">{profile.intro}</p>
              <p className="profile__copy">{profile.introSecondary}</p>
            </div>

            <div className="profile__contacts" data-reveal>
              {profile.contacts.map((item) => (
                <ContactItem item={item} key={item.label} />
              ))}
            </div>

            <div className="profile__stats" data-reveal>
              {profile.stats.map((stat) => (
                <div className="profile-stat" key={stat.label}>
                  <span className="profile-stat__value">{stat.value}</span>
                  <span className="profile-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="profile__timeline" data-reveal>
              <div className="profile__subhead">
                <span className="eyebrow">EXPERIENCE / 经历</span>
                <span className="mono profile__subhead-note">2023 — 2026</span>
              </div>
              <ol>
                {experience.map((item) => (
                  <li className="timeline-item" key={`${item.period}-${item.org}`}>
                    <span className="timeline-item__period">{item.period}</span>
                    <div className="timeline-item__main">
                      <div className="timeline-item__heading">
                        <h3>{item.org}</h3>
                        <span>{item.role}</span>
                      </div>
                      <ul className="timeline-item__points">
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="profile__credentials" data-reveal>
              <div className="profile__subhead">
                <span className="eyebrow">CERTIFICATES / AWARDS</span>
                <span className="mono profile__subhead-note">05 ITEMS</span>
              </div>
              <div className="credential-list">
                {credentials.map((item) => (
                  <div className="credential" key={item.label}>
                    <span className="credential__label">{item.label}</span>
                    <span className="credential__note">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/content'
import { ArrowUp, ArrowUpRight, CheckIcon, CopyIcon } from './Icons'
import './contact.css'

function useLocalTime() {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('zh-CN', {
      timeZone: 'Asia/Shanghai',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    const update = () => setTime(formatter.format(new Date()))
    update()
    const timer = window.setInterval(update, 30000)
    return () => window.clearInterval(timer)
  }, [])

  return time
}

export default function Contact() {
  const time = useLocalTime()
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef(0)

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      const area = document.createElement('textarea')
      area.value = profile.email
      area.setAttribute('readonly', '')
      area.style.position = 'fixed'
      area.style.opacity = '0'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
    }
    setCopied(true)
    window.clearTimeout(resetTimer.current)
    resetTimer.current = window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__marquee" aria-hidden="true">
        <div className="contact__marquee-track">
          <span>OPEN TO WORK</span>
          <span>2027 CAMPUS</span>
          <span>CLOUD OPS</span>
          <span>NETWORK OPS</span>
          <span>SRE INTERNSHIP</span>
        </div>
      </div>

      <div className="contact__main container">
        <div className="contact__meta" data-reveal>
          <span className="contact__number">04</span>
          <span className="eyebrow">CONTACT / 联系</span>
          <span className="contact__meta-note">LET&apos;S BUILD SOMETHING STABLE.</span>
        </div>

        <div className="contact__grid">
          <div className="contact__lead" data-reveal>
            <h2 id="contact-title">
              <span>一起把系统</span>
              <span className="contact__line">做得更稳</span>
            </h2>
            <p className="contact__intro">
              2027 届，寻找云计算 / 网络运维 / SRE 实习。
              如果你在找一个愿意从日志和链路里找答案的人，我们可以聊聊。
            </p>
            <div className="contact__availability">
              <span className="availability__dot" aria-hidden="true" />
              <span>可在毕业前实习 · 接受出差</span>
            </div>
          </div>

          <div className="contact__panel" data-reveal style={{ '--reveal-delay': '90ms' }}>
            <div className="contact__panel-head">
              <span className="eyebrow">PRIMARY CHANNEL / 邮箱</span>
              <span className="mono contact__panel-note">OPEN FOR A CHAT</span>
            </div>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              <span>{profile.email}</span>
              <ArrowUpRight size={24} />
            </a>
            <button className="copy-button" type="button" onClick={copyEmail}>
              {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
              <span>{copied ? '已复制邮箱' : '复制邮箱'}</span>
              <span className="copy-button__state" aria-live="polite">
                {copied ? 'COPIED' : ''}
              </span>
            </button>

            <dl className="contact__rows">
              <div>
                <dt>电话</dt>
                <dd>
                  <a href={profile.phoneHref}>{profile.phone}</a>
                </dd>
              </div>
              <div>
                <dt>地点</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>求职方向</dt>
                <dd>云计算 / 网络运维 / SRE 实习</dd>
              </div>
              <div>
                <dt>学校</dt>
                <dd>{profile.school} · {profile.degree}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <footer className="contact__footer container">
        <span>© 2026 卢冠彤</span>
        <span className="mono">
          LOCAL TIME {time} <span className="contact__cst">CST</span>
        </span>
        <span>DESIGNED &amp; BUILT WITH REACT + VITE</span>
        <a href="#top">
          回到顶部
          <ArrowUp size={15} />
        </a>
      </footer>
    </section>
  )
}

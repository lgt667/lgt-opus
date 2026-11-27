import { useEffect, useRef, useState } from 'react'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { ArrowUpRight, CloseIcon, MenuIcon } from './Icons'
import './header.css'

const NAV_ITEMS = [
  { id: 'profile', index: '01', label: '经历' },
  { id: 'projects', index: '02', label: '项目' },
  { id: 'strengths', index: '03', label: '优势' },
  { id: 'contact', index: '04', label: '联系' },
]

const NAV_IDS = NAV_ITEMS.map((item) => item.id)

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const menuButtonRef = useRef(null)
  const active = useScrollSpy(NAV_IDS)

  useLockBodyScroll(open)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(y > 16)
      setProgress(max > 0 ? Math.min(1, y / max) : 0)
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const menu = document.getElementById('mobile-menu')
    const links = menu ? Array.from(menu.querySelectorAll('a[href]')) : []
    const firstLink = links[0]
    const focusables = [menuButtonRef.current, ...links].filter(Boolean)
    const focusTimer = window.setTimeout(() => firstLink?.focus(), 60)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="site-header__inner container">
          <a className="brand" href="#top" aria-label="卢冠彤作品集首页">
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__type">
              <span className="brand__name">LGT</span>
              <span className="brand__sub">OPS / PORTFOLIO</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="主导航">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className={`site-nav__link${active === item.id ? ' is-active' : ''}`}
                href={`#${item.id}`}
                aria-current={active === item.id ? 'location' : undefined}
              >
                <span className="site-nav__index">{item.index}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__aside">
            <span className="availability">
              <span className="availability__dot" aria-hidden="true" />
              <span>OPEN TO WORK</span>
            </span>
            <a className="header-cta" href="#contact">
              联系我
              <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            ref={menuButtonRef}
          >
            {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      </header>

      <div
        className={`mobile-menu${open ? ' is-open' : ''}`}
        id="mobile-menu"
        aria-hidden={!open}
      >
        <div className="mobile-menu__inner">
          <p className="eyebrow mobile-menu__eyebrow">INDEX / 2026</p>
          <nav className="mobile-menu__nav" aria-label="移动端导航">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className={active === item.id ? 'is-active' : undefined}
              >
                <span>{item.index}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu__footer">
            <a href="mailto:3082840750@qq.com" tabIndex={open ? 0 : -1}>
              3082840750@qq.com
            </a>
            <a href="tel:+8614777763531" tabIndex={open ? 0 : -1}>
              147 7776 3531
            </a>
            <p>桂林 · 中国 / 2027 届</p>
          </div>
        </div>
      </div>
    </>
  )
}

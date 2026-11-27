import { useCallback, useState } from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import ProjectModal from './components/ProjectModal'
import Projects from './components/Projects'
import Strengths from './components/Strengths'
import { useLockBodyScroll } from './hooks/useLockBodyScroll'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)
  useReveal()
  useLockBodyScroll(Boolean(activeProject))

  const openProject = useCallback((project) => setActiveProject(project), [])
  const closeProject = useCallback(() => setActiveProject(null), [])

  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Profile />
        <Projects onOpen={openProject} />
        <Strengths />
        <Contact />
      </main>
      {activeProject ? (
        <ProjectModal project={activeProject} onClose={closeProject} />
      ) : null}
    </>
  )
}

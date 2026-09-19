import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { SocialSidebar } from './components/SocialSidebar'
import { About } from './sections/About'
import { Hero } from './sections/Hero'
import { Contact } from './sections/Contact'
import { Data } from './sections/Data'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Salesforce } from './sections/Salesforce'

function App() {
  return (
    <>
      <CustomCursor />
      <SocialSidebar />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Aller au contenu principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Salesforce />
        <Data />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App

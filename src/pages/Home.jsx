import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import EventStatus from '../components/EventStatus.jsx'
import Stats from '../components/Stats.jsx'
import About from '../components/About.jsx'
import WhyInternal from '../components/WhyInternal.jsx'
import Timeline from '../components/Timeline.jsx'
import EventJourney from '../components/EventJourney.jsx'
import Registration from '../components/Registration.jsx'
import ProblemStatements from '../components/ProblemStatements.jsx'
import Submission from '../components/Submission.jsx'
import Resources from '../components/Resources.jsx'
import Evaluation from '../components/Evaluation.jsx'
import Judging from '../components/Judging.jsx'
import FAQ from '../components/FAQ.jsx'
import Announcements from '../components/Announcements.jsx'
import Committee from '../components/Committee.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Smart India Hackathon 2026 | SIET Nilokheri</title>
        <meta
          name="description"
          content="Official portal for the Smart India Hackathon 2026 Internal Hackathon at State Institute of Engineering & Technology, Nilokheri — registration, timeline, problem statements, evaluation and more."
        />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <EventStatus />
        <Stats />
        <About />
        <WhyInternal />
        <Timeline />
        <EventJourney />
        <Registration />
        <ProblemStatements />
        <Submission />
        <Resources />
        <Evaluation />
        <Judging />
        <FAQ />
        <Announcements />
        {/* <Committee /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

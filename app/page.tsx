import Header from './components/sections/Header';
import Projects from './components/sections/Projects';
import WorkExperiences from './components/sections/WorkExperience';
import Experiences from './components/sections/Experiences';
import Footer from './components/sections/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <WorkExperiences />
      <Projects />
      <Experiences />
      <Footer />
    </>
  );
}
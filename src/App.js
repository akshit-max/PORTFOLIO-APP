
import './App.css';
import Layout from './components/Layout';
import Head from './components/Head/Head'
import About from './components/About/About';
import Education from './components/Education/Education'
import Tech from './components/Tech/Tech';
import Projects from './components/Projectss/Project';
import WorkExp from './Work/Work';
import Contact from './contact/contact';
import Skills from './skills/skills';
import Mobilee from './components/Mobilee/Mobilee';
import Scroll from './components/Scroll/Scroll';

function App() {
  return (
    <>
   <Layout/>
   <div className="">
    <Mobilee/>
    <Head/>
    <About/>
    <Education/>
    <Skills/>
    <Tech/>
    <Projects/>
    <WorkExp/>
    <Contact/>
    <Scroll/>
   </div>
    </>
  );
}

export default App;

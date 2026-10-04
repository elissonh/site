import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import PresentationSection from './components/Presentation/Presentation';
import AboutSection from './components/About/About';
import StackSection from './components/Stack/Stack';
import GithubSection from './components/Github/Github';
import ProjectsSection from './components/Projects/Projects';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
        <PresentationSection />
        <AboutSection id="sobre" />
        <StackSection id="tecnologias" />
        <GithubSection id="github" />
        <ProjectsSection id="projetos" />
      </main>
      <Footer></Footer>
    </div>
  );
}
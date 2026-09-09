import { Nav } from '@/components/layout/nav';
import Footer from '@/components/layout/footer';
import { ContactForm } from '@/features/contact/contact-section';
import { GitHubAnalytics } from '@/features/github/analytics';
import { Hero } from '@/features/home/hero';
import About from '@/features/profile/about';
import Achievements from '@/features/profile/achievements';
import Experience from '@/features/profile/experience';
import Skills from '@/features/profile/skills';
import Projects from '@/features/projects/project-list';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubAnalytics />
      <Experience />
      <Achievements />
      <ContactForm />
      <Footer />
    </main>
  );
}

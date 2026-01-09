import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="container max-w-3xl">
          <div className="divider" />
        </div>
        <ProjectsSection />
        <div className="container max-w-3xl">
          <div className="divider" />
        </div>
        <AboutSection />
        <div className="container max-w-3xl">
          <div className="divider" />
        </div>
        <SkillsSection />
        <div className="container max-w-3xl">
          <div className="divider" />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

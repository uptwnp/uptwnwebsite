import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkingAreas from '@/components/WorkingAreas';
import FeaturedProjects from '@/components/FeaturedProjects';
import { WhyWorkWithUs, SocialCommunity, TeamSection } from '@/components/NewSections';
import Reviews from '@/components/Reviews';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkingAreas />
      <FeaturedProjects />
      <WhyWorkWithUs />
      <Reviews />
      <SocialCommunity />
      <TeamSection />
      <CTA />
    </>
  );
}
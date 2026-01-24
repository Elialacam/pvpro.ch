import Hero from '@/components/Hero';
import SolarForm from '@/components/SolarForm';
import HowItWorks from '@/components/HowItWorks';
import SwissMap from '@/components/SwissMap';
import USP from '@/components/USP';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import FAQ from '@/components/FAQ';

export default function ItalianHomePage() {
  return (
    <>
      <Hero />
      <div id="formular">
        <SolarForm />
      </div>
      <HowItWorks />
      <SwissMap />
      <USP />
      <Testimonials />
      <TeamSection />
      <FAQ />
    </>
  );
}

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsInjective from "@/components/WhatIsInjective";
import CorePrinciples from "@/components/CorePrinciples";
import EcosystemOverview from "@/components/EcosystemOverview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <WhatIsInjective />
      <CorePrinciples />
      <EcosystemOverview />
      <Footer />
    </main>
  );
};

export default Index;

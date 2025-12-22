import Navigation from "@/components/Navigation";
import LearningPathHero from "@/components/LearningPathHero";
import FoundationPath from "@/components/FoundationPath";
import CoreConceptsPath from "@/components/CoreConceptsPath";
import EcosystemPath from "@/components/EcosystemPath";
import LearningResources from "@/components/LearningResources";
import Footer from "@/components/Footer";

const LearningPath = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <LearningPathHero />
      <FoundationPath />
      <CoreConceptsPath />
      <EcosystemPath />
      <LearningResources />
      <Footer />
    </main>
  );
};

export default LearningPath;

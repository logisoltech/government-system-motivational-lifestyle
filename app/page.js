import BuiltFutureSection from "./Cx/BuiltFutureSection";
import FeaturesGridSection from "./Cx/FeaturesGridSection";
import FlyerDesignSection from "./Cx/FlyerDesignSection";
import Footer from "./Cx/Footer";
import GovernmentTechSection from "./Cx/GovernmentTechSection";
import Hero from "./Cx/Hero";
import JoinMovementCTA from "./Cx/JoinMovementCTA";
import ProblemGovSection from "./Cx/ProblemGovSection";
import ProjectIntroBar from "./Cx/ProjectIntroBar";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-neutral-900">
      <Hero />
      <div className="bg-white text-neutral-900">
        <GovernmentTechSection />
        <ProjectIntroBar />
        <FeaturesGridSection />
        <FlyerDesignSection
          title="Old vs New"
          imageSrc="/flyer.png"
          imageAlt="Old versus new voting comparison"
          sectionId="old-vs-new"
        />
        <BuiltFutureSection />
        <ProblemGovSection />
        <JoinMovementCTA />
        <Footer />
      </div>
    </div>
  );
}

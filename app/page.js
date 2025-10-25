'use client';

import ModernHeader from "./components/ModernHeader";
import ModernHero from "./components/ModernHero";
import ModernAbout from "./components/ModernAbout";
import ModernServices from "./components/ModernServices";
import ModernProjects from "./components/ModernProjects";
import ModernContact from "./components/ModernContact";
import ModernFooter from "./components/ModernFooter";

export default function HomePage() {
  return (
    <>
      <ModernHeader />
      <ModernHero />
      <ModernAbout />
      <ModernServices />
      <ModernProjects />
      <ModernContact />
      <ModernFooter />
    </>
  );
}
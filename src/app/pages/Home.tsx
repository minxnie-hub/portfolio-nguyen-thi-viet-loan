import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Summary } from "../components/Summary";
import { Interests } from "../components/Interests";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Summary />
      <Interests />
    </>
  );
}

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import ProcessCard from "@/components/ui/ProcessCard";
export default function Home() {
  return (
    <div className="flex flex-col  items-center  ">
      <Navbar />
      <Hero />
      <Services />
      <SelectedWork />
      <Process />
    </div>
  );
}

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
export default function Home() {
  return (
    <div className="flex flex-col  items-center  ">
      <Navbar />
      <Hero />
      <Services />
      <SelectedWork />
    </div>
  );
}

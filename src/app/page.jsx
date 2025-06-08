import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
export default function Home() {
  return (
    <div className="flex flex-col  items-center h-[350vh]  ">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

import React from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { ServiceCard } from "./ui/ServiceCard";

const Services = () => {
  return (
    <div className="grid grid-cols-1 gap-5 desktop:grid-cols-3 items-center justify-center w-[90vw] tablet:p-10 desktop:p-20">
      <ServiceCard
        cardNumber="01"
        title="Web Design"
        description="Creating visually appealing and user-friendly websites that enhance user experience and engagement."
        btnText="Learn More"
        btnLink="#"
      />
      <ServiceCard
        cardNumber="02"
        title="Web Development"
        description="Building robust and scalable web applications using the latest technologies and best practices."
        btnText="Learn More"
        btnLink="#"
      />
      <ServiceCard
        cardNumber="03"
        title="SEO Optimization"
        description="Implementing effective SEO strategies to improve website visibility and drive organic traffic."
        btnText="Learn More"
        btnLink="#"
      />
    </div>
  );
};

export default Services;

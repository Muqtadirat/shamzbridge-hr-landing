"use client";

import { about1 } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const About = () => {
  return (
    <div
      id="about"
      className="py-16 lg:mt-16 px-6 lg:px-16 bg-white text-center"
    >
      <h2 className="text-3xl lg:text-6xl font-bold text-primary-blue/80 mb-6 lg:mb-20">
        About Us
      </h2>
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 mx-auto">
          <p className="text-sm lg:text-lg text-primary-slate max-w-[900px] mb-6">
            Our journey began with a simple yet ambitious goal: to provide
            service beyond compare. Over the years, we have evolved and grown,
            expanding our offerings to meet the diverse needs of our clients.
            From tailored solutions to comprehensive consultations, we leverage
            our extensive knowledge and experience to drive transformative
            change and help our clients succeed in today's dynamic business
            environment.
          </p>
          <p className="text-sm lg:text-lg text-primary-slate max-w-[900px]">
            hat sets us apart is our commitment to understanding our clients'
            unique challenges and goals. We take a collaborative approach,
            working closely with each client to develop customized strategies
            that address their specific needs and objectives. Our team of
            seasoned professionals brings together a wealth of expertise from
            various industries, ensuring that we can provide insights and
            solutions that are both innovative and effective.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image src={about1} alt="about" />
        </div>
      </div>

      {/* Mission and Vision  */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="border border-primary-blue p-8 rounded-lg"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold text-primary-blue mb-4">
            Our Vision
          </h3>
          <p className="text-sm lg:text-lg text-primary-slate">
            To become a premier organization dedicated to enhancing both
            personal and professional capacities of individuals and businesses,
            fostering efficiency, heightened productivity, and innovation.
          </p>
        </motion.div>

        <motion.div
          className="border border-primary-blue p-8 rounded-lg"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold text-primary-blue mb-4">
            Our Mission
          </h3>
          <p className="text-sm lg:text-lg text-primary-slate">
            Our mission is to cultivate an empowering atmosphere for skill
            acquisition and capacity enhancement that heralds holistic growth
            and development for individuals and organizations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

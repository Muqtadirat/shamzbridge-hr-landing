import PrimaryButton from "../components/PrimaryButton";

const Hero = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl lg:text-8xl leading-none font-bold text-center">
        Building blocks for a great culture where <br />
        <span className="bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-start bg-clip-text text-transparent">
          {""} every voice matters
        </span>
      </h1>
      <p className="mx-auto pt-6 text-sm lg:text-lg text-center text-primary-slate max-w-[348px] md:max-w-[828px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugiat
        nemo sed sint ipsum natus iste sit eligendi exercitationem impedit
        repudiandae hic tempore eos amet magni dignissimos omnis voluptas
        accusamus cumque. Corporis et doloremque impedit tempore quas esse,
        facilis dolor.
      </p>
      <div className="flex justify-center pt-6">
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </div>
  );
};
export default Hero;

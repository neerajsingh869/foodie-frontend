import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="w-full flex justify-center items-center py-20"
      style={{
        background:
          "linear-gradient(166deg, rgba(59,130,246,1) 50%, rgba(245, 245, 245, 1) 50%)",
      }}
    >
      <img
        src={heroImg}
        alt="Hero Image"
        className="max-h-[600px] w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] object-contain"
      />
    </div>
  );
};

export default Hero;

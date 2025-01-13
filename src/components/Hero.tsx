import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center h-80 sm:h-[420px] md:h-[470px] lg:h-[506px] bg-gradient-to-br from-blue-500 to-gray-100 dark:from-blue-700 dark:to-gray-900">
      <img
        src={heroImg}
        alt="Hero Image"
        className="max-h-[80%] w-[260px] sm:w-[300px] md:w-[350px] lg:w-[400px] object-contain rounded-[48px]"
      />
    </div>
  );
};

export default Hero;

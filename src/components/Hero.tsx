import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center sm:py-[120px] py-20 bg-gradient-to-br from-blue-500 to-gray-100 dark:from-blue-700 dark:to-gray-900">
      <img
        src={heroImg}
        alt="Hero Image"
        className="max-h-[600px] w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] object-contain rounded-[48px]"
      />
    </div>
  );
};

export default Hero;

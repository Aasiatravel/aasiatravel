import Image from "next/image";
import Header from "./Header";
import Demoimg2 from "../../public/assets/images/topsection.png";

const TopSection = () => {
  return (
    <section className="relative  h-[100vh] w-full ">
      {/* Background Image */}
      <Image
        src={Demoimg2}
        alt="Nature travel"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative z-20 flex w-full items-center  justify-center h-full text-white px-4">
        <div className=" flex  flex-col gap-1 lg:gap-3  text-center">
          <h1 className="text-2xl lg:text-4xl font-semibold  leading-6.5   ">
            Turn Your Dreams into Destinations
          </h1>
          <h2 className="text-base lg:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
            Every journey begins with a dream—let us help you bring it to life
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent  to-slate-700 z-30" />
    </section>
  );
};

export default TopSection;

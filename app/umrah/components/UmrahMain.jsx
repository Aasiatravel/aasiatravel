import Image from "next/image";

import coupleMob from "../../../public/assets/images/coupleMob.png";
import coupleDesk from "../../../public/assets/images/coupledesk.png";

const UmrahMain = () => {
  return (
    <section className="relative h-[100vh] w-full">
      {/* Mobile Image */}
      <Image
        src={coupleMob}
        alt="Umrah travel mobile"
        fill
        className="object-cover block lg:hidden"
        priority
      />

      {/* Desktop Image */}
      <Image
        src={coupleDesk}
        alt="Umrah travel desktop"
        fill
        className="object-cover hidden lg:block"
        priority
      />

      {/* Content */}
      <div className="relative z-20 flex w-full items-center justify-center h-full text-white px-4">
        <div className="flex flex-col gap-1 lg:gap-3 text-center">
          {/* text  */}
        </div>
      </div>

      {/* Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-slate-700 z-30" />
    </section>
  );
};

export default UmrahMain;

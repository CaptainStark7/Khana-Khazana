import { TypeAnimation } from "react-type-animation";
import banner from "../assets/img/5th.avif";
const Banner = () => {
  return (
    <div
      className="w-full h-32 py-[54px] px-1 sm:h-60 sm:py-16 sm:px-4 lg:h-[270px] lg:p-16"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="font-mono text-sm text-white sm:text-xl lg:text-2xl xl:text-3xl">
        <TypeAnimation
          sequence={[
            "One Stop DELICIOUS Food Place",
            2000,
            "It's not just a Food. It's an Experience",
            2000,
            "Eat Today LIVE Another Day",
            2000,
          ]}
          cursor={true}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Banner;

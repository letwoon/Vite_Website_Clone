import { useContext } from "react";
import tailwindLogo from "../../assets/icon/tailwindcss.svg";
import { motion } from "framer-motion";

function SponsorCardSmall() {

  return (
    <div
      className={`dark:bg-dark_secondary dark:hover:bg-white/90 bg-light_secondary hover:bg-gray-200 flex justify-center group h-32 w-full transition-colors duration-200`}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 100, scale: 1 }}
        className={`w-48 object-contain grayscale group-hover:grayscale-0 dark:invert group-hover:invert-0 transition-all duration-500 ease-out`}
        src={tailwindLogo}
        alt=""
      />
    </div>
  );
}
export default SponsorCardSmall;

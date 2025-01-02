
import CustomButton from "./ui/CustomButton";
import { FaLocationArrow } from "react-icons/fa";


// Footer section
const Footer = () => {


  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    // Creating footer main div
    <footer 
      className="mt-8 sm:mt-8 md:mt-12 lg:mt-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-[url('/images/footer-grid.svg')] bg-cover bg-center"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-[3.2rem] lg:text-4xl xl:text-[3rem] font-poppins font-extralight text-white text-center mt-12 sm:mt-16 leading-snug">
        Ready to take
        <span className="block text-cyan-300 mt-3 sm:mt-5 sm:leading-snug">
          your outside digital presence
        </span>
      </h1>

      {/* Footer Sub Div */}
      <div className="text-white mt-8 sm:mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8 sm:gap-10">
        <div className="w-full max-w-sm text-center sm:text-left">
          <p className="text-lg sm:text-xl text-white-200 my-5">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <div className="flex justify-center sm:justify-center items-center">
            <a href="mailto:raiyanalsultan@gmail.com">
              <CustomButton text="Let's get in touch" icon={<FaLocationArrow />} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-slate-300 text-sm sm:text-base md:text-[1.2rem] lg:text-[1rem] xl:text-[1rem] font-poppins font-extralight text-center mt-5 mb-3 sm:mt-10">
        Copyright © {currentYear} by Raiyan Al Sultan
      </div>
    </footer>
  );
};

// Exporting footer
export default Footer;

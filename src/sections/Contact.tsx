import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div
          className="relative overflow-hidden bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 
          py-8 px-10 rounded-3xl text-center md:text-left"
        >
          {/* pointer-events-none を付けることでクリックイベントを透過 */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&rsquo;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&rsquo;s connect
                and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ryotma14@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

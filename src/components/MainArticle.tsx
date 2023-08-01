import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";

const MainArticle = () => {
  return (
    <section className="mb-12">
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="main article image" />
      </picture>

      <div className="sm:flex">
        <div className="flex-1 pt-6">
          <h2 className="text-[40px] w-[290px] font-bold mt-3 leading-none sm:text-[58px]">The Bright Future of Web 3.0?</h2>
        </div>

        <div className="flex-1 pt-4 sm:pt-[50px]">
          <p className="text-[14px] mb-10 text-gray-500 sm:text-[15px]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite font-bold hover:bg-VeryDarkBlue transition-all">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default MainArticle;

import Header from "./header";
import Image from "../assets/short.jpg";

const TxtImage = () => {
  return (
    <>
      <Header/>
      <section className="flex mt-4 h-screen w-full justify-center items-center">
        <div className="flex gap-6 w-9/12 h-8/12  mx-auto ">
          <div className="h-full w-fit">
            <img src={Image} loading="lazy" className="h-full w-full" />
          </div>
          <div className="h-full flex gap-y-9 flex-col justify-center w-1/2 text-white p-5">
            <div className="flex flex-col gap-y-1">
              <h1 className="font-heading font-thin text-5xl text-secondary">
                Image and Text
              </h1>
            </div>
            <p className="font-sans text-[18px] text-base">
            A car is more than just a vehicle—it’s freedom, style, and performance combined. Whether you're cruising through the city, hitting the highway, or exploring new roads, the right car enhances every journey. With advanced technology, powerful engines, and sleek designs, today’s cars offer comfort, safety, and excitement for every driver.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TxtImage;

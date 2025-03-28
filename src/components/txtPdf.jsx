import Header from "./header";
import Pdf from "../assets/bently.pdf"

const TxtPdf = () => {
  return (
    <>
      <Header />
      <section className="flex mt-4 h-screen w-full justify-center items-center">
        <div className="flex gap-6 w-9/12 h-8/12  mx-auto ">
          <div className="h-full w-fit">
            <iframe
              src={Pdf}
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="h-full flex gap-y-9 flex-col justify-center w-1/2 text-white p-5">
            <div className="flex flex-col gap-y-1">
              <h1 className="font-heading font-thin text-5xl text-secondary">
                Pdf and Text
              </h1>
            </div>
            <p className="font-sans text-[18px] text-base">
            A detailed document provides all the essential information about a car, from its design and features to performance and safety. It offers a clear breakdown of specifications, helping you understand engine power, fuel efficiency, interior comfort, and advanced technology. With high-quality images and well-organized details, it becomes easier to explore and compare different models before making a choice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TxtPdf;


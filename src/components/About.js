import React from "react";
import Image1 from "../assets/img/Image2.png";
import Image2 from "../assets/img/Image1.avif";
import Image3 from "../assets/img/Image3.jpeg";
import Image4 from "../assets/img/Image4.png";

const AboutBusinessPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          About Our Business
        </h1>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div
              className="w-32 h-32 sm:w-60 sm:h-60 lg:w-[400px] lg:h-[270px] bg-cover bg-center bg-no-repeat rounded-lg mb-6"
              style={{
                backgroundImage: `url(${Image1})`,
              }}
            ></div>

            <div className="md:w-1/2 md:order-2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt nulla eu eros porttitor, sed interdum nisi
                consectetur. Donec tincidunt dolor justo, non placerat elit
                consectetur eu. Suspendisse in tellus eget tortor placerat
                ultrices. Quisque volutpat vitae risus sed varius.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <div
              className="w-32 h-32 sm:w-60 sm:h-60 lg:w-[400px] lg:h-[270px] bg-cover bg-center bg-no-repeat rounded-lg mb-6"
              style={{
                backgroundImage: `url(${Image2})`,
              }}
            ></div>
            <div className="md:w-1/2 md:order-2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700">
                Phasellus viverra consequat ullamcorper. Sed tempus est in
                convallis consectetur. Mauris cursus condimentum interdum. Nulla
                facilisi. Maecenas at sollicitudin turpis. Nam in risus augue.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div
              className="w-32 h-32 sm:w-60 sm:h-60 lg:w-[400px] lg:h-[270px] bg-cover bg-center bg-no-repeat rounded-lg mb-6"
              style={{
                backgroundImage: `url(${Image3})`,
              }}
            ></div>
            <div className="md:w-1/2 md:order-2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-700">
                Vestibulum interdum mauris at lorem auctor, ut pulvinar orci
                faucibus. Sed at maximus enim. Donec interdum, risus sed
                facilisis viverra, nisl nisl faucibus justo, ut tincidunt arcu
                mi eu nunc.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <div
              className="w-32 h-32 sm:w-60 sm:h-60 lg:w-[400px] lg:h-[270px] bg-cover bg-center bg-no-repeat rounded-lg mb-6"
              style={{
                backgroundImage: `url(${Image4})`,
              }}
            ></div>
            <div className="md:w-1/2 md:order-2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-gray-700">
                Curabitur gravida nisi ut aliquet scelerisque. Duis feugiat
                commodo ullamcorper. Sed fermentum malesuada lectus, id faucibus
                felis feugiat sed. Sed at velit arcu. Sed feugiat ultrices
                dolor, eget maximus turpis interdum vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBusinessPage;

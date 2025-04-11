import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { useState } from "react";

export const ContactSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenCalenderBooking = () => {
    setOpenModal(true);
  };

  const handleCloseCalenderBooking = () => {
    setOpenModal(false);
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss. I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button
                // onClick={() =>
                //   window.open("https://calendly.com/anthonydourado111")
                // }
                onClick={handleOpenCalenderBooking}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* modal */}
        {openModal && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
            onClick={handleCloseCalenderBooking}
          >
            <Card
              className="bg-white rounded-lg p-6 text-black"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4">
                Schedule Meeting with me
              </h2>
              <p>
                Welcome to my scheduling page. Please follow the instructions to
                add an event to my calendar.
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

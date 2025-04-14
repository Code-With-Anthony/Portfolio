import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CertificationSectionHeader } from "@/constants/CertificationsConstant";
import { CertificationsData } from "@/data/CertificationsData";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";

export const Certifications = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="CertificationContainer">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <SectionHeader
            eyebrow={CertificationSectionHeader.certifications.eyebrow}
            title={CertificationSectionHeader.certifications.title}
            description={CertificationSectionHeader.certifications.description}
          />
        </motion.div>

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, ind) => (
              <Fragment key={ind}>
                {CertificationsData.map((cert) => (
                  <a
                    key={cert.certification}
                    href={cert.link} // Navigate to the HackerRank certificate page
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security best practices
                    className="group" // Add a hover effect for the entire card
                  >
                    <Card
                      key={cert.certification}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image
                            src={cert.avatar}
                            alt={cert.name}
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{cert.name}</div>
                          <div className="text-sm text-white/40">
                            {cert.certification}
                          </div>
                        </div>
                      </div>

                      {/* Show the Description */}
                      <p className="mt-4 md:mt-6 text-sm md:text-base text-justify line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {cert.description}
                      </p>

                      {/* Show the PNG Image */}
                      <div className="mt-4 md:mt-6">
                        <Image
                          src={cert.image}
                          alt={`${cert.certification} Certificate`}
                          width={400}
                          height={200}
                          className="rounded-md border border-white/10"
                          priority
                        />
                      </div>
                    </Card>
                  </a>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

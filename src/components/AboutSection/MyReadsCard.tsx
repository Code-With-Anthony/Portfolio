"use client";

import bookImage from "@/assets/images/book-cover.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { AboutSectionConstant } from "@/constants/AboutConstant";
import { motion } from "framer-motion";
import Image from "next/image";

export const MyReadsCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="md:col-span-2 lg:col-span-1"
  >
    <Card className="h-[320px]">
      <CardHeader
        title={AboutSectionConstant.MyReadsCard.title}
        description={AboutSectionConstant.MyReadsCard.description}
      />
      <div className="w-40 mx-auto mt-2 md:mt-0">
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 3,
            transition: { duration: 0.5 },
          }}
        >
          <Image src={bookImage} alt="Book cover" />
        </motion.div>
      </div>
    </Card>
  </motion.div>
);

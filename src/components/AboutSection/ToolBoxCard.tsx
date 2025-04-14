"use client";

import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { AboutSectionConstant } from "@/constants/AboutConstant";
import { ToolboxMarquee } from "./ToolboxMarquee";

export const ToolboxCard = () => (
  <Card className="h-[320px] md:col-span-3 lg:col-span-2">
    <CardHeader
      title={AboutSectionConstant.ToolboxCard.title}
      description={AboutSectionConstant.ToolboxCard.description}
    />
    <ToolboxMarquee />
  </Card>
);

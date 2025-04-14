import { ToolboxItems } from "@/components/ToolboxItems";
import { toolBoxItems } from "@/data/AboutData";

export const ToolboxMarquee = () => (
  <div>
    <ToolboxItems
      items={toolBoxItems}
      itemsWrapperClassName="animate-move-left [animation-duration:30s]"
    />
    <ToolboxItems
      items={toolBoxItems}
      className="mt-6"
      itemsWrapperClassName="animate-move-right [animation-duration:15s]"
    />
  </div>
);

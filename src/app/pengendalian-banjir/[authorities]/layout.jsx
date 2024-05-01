import FloodControlMenu from "@/components/FloodControlMenu";
import { Separator } from "@/components/ui/separator";

const FloodControlLayout = ({ children }) => {
  return (
    <>
      <FloodControlMenu />
      <Separator
        orientation="vertical"
        className="w-[3px] rounded-full bg-primary/30"
      />
      {children}
    </>
  );
};

export default FloodControlLayout;

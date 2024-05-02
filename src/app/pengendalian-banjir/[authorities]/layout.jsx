import FloodControlMenu from "@/modules/FloodControl/FloodControlMenu";
import { Separator } from "@/components/ui/separator";

const FloodControlLayout = ({ children }) => {
  return (
    <>
      <div className="my-8 hidden h-[600px] w-full gap-5 rounded-xl bg-primary/10 p-5 md:flex">
        <FloodControlMenu />
        <Separator
          orientation="vertical"
          className="w-[3px] rounded-full bg-primary/30"
        />
        {children}
      </div>

      <div className="md:hidden">{children}</div>
    </>
  );
};

export default FloodControlLayout;

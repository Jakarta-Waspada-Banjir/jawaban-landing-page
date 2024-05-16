import { Separator } from "@/components/ui/separator";
import FloodControlMenu from "@/modules/FloodInformation/FloodControlMenu";

const FloodControlLayout = ({ children }) => {
  return (
    <>
      <div className="my-8 hidden w-full gap-5 rounded-xl border-2 p-5 md:flex">
        <FloodControlMenu />
        <Separator
          orientation="vertical"
          className="h-auto w-[3px] rounded-full bg-primary"
        />
        {children}
      </div>

      <div className="md:hidden">{children}</div>
    </>
  );
};

export default FloodControlLayout;

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithLabel({ label, placeholder, id }) {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Textarea placeholder={placeholder} id={id} className="border-black" />
    </div>
  );
}

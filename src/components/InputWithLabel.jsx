import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function InputWithLabel({ label, id, placeholder }) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="text"
        id={id}
        placeholder={placeholder}
        className="border-black"
      />
    </div>
  );
}

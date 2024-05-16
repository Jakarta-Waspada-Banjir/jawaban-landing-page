import { Input, Label } from "@/components/ui";
import { cn } from "@/lib/utils";

export function InputWithLabel({
  label,
  id,
  placeholder,
  className,
  error,
  ...props
}) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="text"
        id={id}
        placeholder={placeholder}
        className={cn(className)}
        aria-invalid={!!error}
        {...props}
      />
      {error && <p className="text-sm text-danger-500">{error}</p>}
    </div>
  );
}

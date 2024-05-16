import { Label, Textarea } from "@/components/ui";
import { cn } from "@/lib/utils";

export function TextareaWithLabel({
  label,
  placeholder,
  id,
  className,
  error,
  ...props
}) {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        placeholder={placeholder}
        id={id}
        className={cn(className)}
        aria-invalid={!!error}
        {...props}
      />
      {error && <p className="text-sm text-danger-500">{error}</p>}
    </div>
  );
}

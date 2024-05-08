import { EyeIcon, EyeOffIcon } from "@/components/icons";
import { Toggle } from "@/components/ui";

export const ToggleableMarker = ({ icon, label, isActive, onToggle }) => {
  return (
    <div className="flex items-center justify-between space-x-2 border-b border-gray-100 py-1">
      <div className="flex items-center">
        {icon}
        <p className="ml-2 text-xs font-medium text-gray-600 sm:text-sm">
          {label}
        </p>
      </div>
      <Toggle onClick={onToggle}>
        {isActive ? (
          <EyeIcon className="h-4 w-4 text-primary" />
        ) : (
          <EyeOffIcon className="h-4 w-4 text-gray-500" />
        )}
      </Toggle>
    </div>
  );
};

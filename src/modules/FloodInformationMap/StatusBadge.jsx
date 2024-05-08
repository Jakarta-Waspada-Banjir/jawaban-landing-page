import { Badge } from "@/components/ui";
import {
  earlyWarningStatus,
  earlyWarningStatusCode,
} from "@/data/EarlyWarningData";

export const StatusBadge = ({ status }) => {
  let variant = "light";
  let status_code = "-";

  switch (status) {
    case earlyWarningStatus.STANDBY1:
      variant = "destructive";
      status_code = earlyWarningStatusCode.STANDBY1;
      break;
    case earlyWarningStatus.STANDBY2:
      variant = "orange";
      status_code = earlyWarningStatusCode.STANDBY2;
      break;
    case earlyWarningStatus.STANDBY3:
      variant = "warning";
      status_code = earlyWarningStatusCode.STANDBY3;
      break;
    case earlyWarningStatus.NORMAL:
      variant = "success";
      status_code = earlyWarningStatusCode.NORMAL;
      break;
    default:
      variant = "light";
      status_code = "-";
      break;
  }

  return <Badge variant={variant}>{status_code}</Badge>;
};

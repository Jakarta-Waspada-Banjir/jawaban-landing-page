import { format } from "date-fns";
import { id } from "date-fns/locale";

export const formatDate = (date, formatString) => {
  const dateObject = new Date(date);
  return format(dateObject, formatString, { locale: id });
};

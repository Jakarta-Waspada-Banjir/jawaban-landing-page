import { format } from "date-fns";
import { id } from "date-fns/locale";

export const formatDate = (date, formatString) => {
  const dateObject = new Date(date);
  return format(dateObject, formatString, { locale: id });
};

export const cleanPhoneNumber = (phoneNumber) => {
  return phoneNumber.endsWith("'") ? phoneNumber.slice(0, -1) : phoneNumber;
};

export const convertNumberToThousand = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const removeWord = (name, word) => {
  if (!name) "-"; // Return '-' if the name is not available or falsy

  // Create a regex dynamically to match the word globally (g) and case-insensitively (i)
  const regex = new RegExp(`\\b${word}\\b`, "gi");

  // Replace all occurrences of 'word' in the name
  return name.replace(regex, "").trim();
};

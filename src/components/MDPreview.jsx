"use client";

import DOMPurify from "dompurify";

export const MDPreview = ({ value = "" }) => {
  const purify = DOMPurify(window);
  const sanitizedHTML = purify.sanitize(value);
  return (
    <div
      className="prose w-full"
      dangerouslySetInnerHTML={{
        __html: sanitizedHTML,
      }}
    />
  );
};

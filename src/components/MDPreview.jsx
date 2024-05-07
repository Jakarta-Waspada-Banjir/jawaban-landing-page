"use client";

export const MDPreview = ({ value = "" }) => {
  return (
    <div
      className="prose w-full"
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    />
  );
};

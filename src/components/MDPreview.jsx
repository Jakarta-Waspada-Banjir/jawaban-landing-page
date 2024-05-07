"use client";

export const MDPreview = ({ value = "" }) => {
  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    />
  );
};

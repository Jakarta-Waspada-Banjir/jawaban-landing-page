export const Banner = ({ children }) => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center space-y-1.5 bg-secondary/70 px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      {children}
    </section>
  );
};

const Paragraph = ({ children, className, light }) => {
  return (
    <p
      className={`${
        light ? light : "text-neutral-700 dark:text-neutral-100"
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;

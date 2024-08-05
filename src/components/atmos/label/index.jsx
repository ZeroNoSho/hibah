const Label = ({ children, className, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-neutral-700 dark:text-neutral-100 ${className}`}
    >
      {children}
    </label>
  );
};
export default Label;

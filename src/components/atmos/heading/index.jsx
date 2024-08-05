const Heading = ({ level, children, className, light }) => {
  const Tag = `h${level}`;
  return (
    <Tag
      className={`${
        light ? "text-neutral-100" : "text-neutral-700 dark:text-neutral-100"
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;

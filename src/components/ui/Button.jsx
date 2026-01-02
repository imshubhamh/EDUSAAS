const CustomButton = ({
  children,
  SvgIcon,
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <div className="flex shrink-0">
      <button
        onClick={onClick}
        type={type}
        className="button"
        disabled={disabled}
      >
        {SvgIcon && <SvgIcon />}
        <p className="text-sm">{children}</p>
      </button>
    </div>
  );
};

export default CustomButton;

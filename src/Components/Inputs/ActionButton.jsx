const ActionButton = ({
  label,
  classnames,
  btnIcon,
  onClick,
  disabled,
  loading,
  type,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        onClick={() => onClick()}
        className={`${classnames} `}
      >
        {label} {btnIcon}
        {/* {btnIcon && (
          <img src={btnIcon} alt="icon" className="ml-2 group-hover:ml-4" />
        )} */}
      </button>
    </>
  );
};

export default ActionButton;

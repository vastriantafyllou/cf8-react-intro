type ButtonProps = {
  onClick: () => void;
  label: string;
  addClasses?: string;
  disabled?: boolean;
}

const CounterButton =({onClick, label, addClasses = "", disabled = false}: ButtonProps) => {
  return (
    <>
      <button className={`bg-cf-dark-gray text-white py-2 px-4 ` + addClasses}
      onClick={onClick}
      disabled={disabled}
      >
        {label}
      </button>
    </>
  )
}

export default CounterButton;
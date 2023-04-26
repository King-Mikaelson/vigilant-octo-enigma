type ButtonProps = {
  text: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  disabled?: boolean;
};

export default function Button({
  text,
  onclick,
  isLoading,
  disabled,
}: ButtonProps) {
  return (
    <button className="button__element" onClick={onclick} disabled={disabled}>
      {isLoading ? <span>Loading...</span> : text}
    </button>
  );
}

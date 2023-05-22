type ButtonProps = {
  text: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ text, onclick }: ButtonProps) {
  return (
    <button
      className="button__element"
      type="submit"
      onClick={(e) => {
        onclick?.(e);
      }}
    >
      {text}
    </button>
  );
}

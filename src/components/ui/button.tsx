type ButtonProps = {
  text: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  changePage?: () => void;
};

export default function Button({ text, onclick, changePage }: ButtonProps) {
  return (
    <button
      className="button__element"
      onClick={(e) => {
        onclick?.(e);
        changePage?.();
      }}
    >
      {text}
    </button>
  );
}

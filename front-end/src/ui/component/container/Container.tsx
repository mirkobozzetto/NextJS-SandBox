interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return <div className="max-w-6xl py-10 mx-auto space-y-5">{children}</div>;
};

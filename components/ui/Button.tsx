export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="
      px-6
      py-3
      rounded-xl
      bg-violet-600
      hover:bg-violet-500
      transition-all
      duration-300
      font-medium
      "
    >
      {children}
    </button>
  );
}
export default function Payload({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
      {children}
    </div>
  );
}

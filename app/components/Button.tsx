export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="h-[46px] bg-black text-white py-2 px-5 rounded-sm hover:bg-neutral-700 transition duration-75 flex gap-2 justify-center items-center">
      {children}
    </button>
  );
}

export default function Loader({ className = "", children }) {
  return (
    <div className={`flex w-full items-center justify-center  ${className} `}>
      <span className="loader mr-4"></span>
      {children}
    </div>
  );
}

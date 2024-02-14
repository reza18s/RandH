function Logo() {
  return (
    <div className="flex items-center gap-1 font-semibold">
      <img
        src="/public/7gwmUX01.svg"
        className="fixed left-[28%] top-[10px] h-8  sm:relative sm:left-0 sm:top-0"
      ></img>
      <h1 className="hidden text-white sm:flex">
        Reza<span className="text-primary-500">&</span>Hamze
      </h1>
    </div>
  );
}
export default Logo;

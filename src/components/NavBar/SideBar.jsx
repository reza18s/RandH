import { pageLinks } from "../../../array";

function SideBar() {
  return (
    <nav className="bg-sb bg-dark-200 absolute flex h-full w-[100px] flex-col items-center sm:w-[150px] md:w-[250px] ">
      <ul>
        {pageLinks.map((i) => (
          <li key={i.Url}>
            <a href={i.Url}> {i.Url}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default SideBar;

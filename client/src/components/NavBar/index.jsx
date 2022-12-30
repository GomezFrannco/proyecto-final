import "./index.scss"

const NavMenu = ({ items }) => (
  <ul className="flex flex-row justify-between">
    {items.map((item, index) => (
      <li className="menu__item bg-white px-[35px] py-[5px] rounded-md font-bold" key={index}>{item}</li>
    ))}
  </ul>
);

function NavBar() {
  return (
    <nav className="bg-black px-[80px] py-[25px]">
      <div className="flex justify-between">
        <a href="#">
        </a>
        <NavMenu items={["HOME", "GALLERY", "ONLY TODAY", "USED"]}/>
      </div>
    </nav>
  )
}

export default NavBar;


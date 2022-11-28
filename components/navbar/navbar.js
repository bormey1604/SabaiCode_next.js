import Link from "next/link";
import classes from "./navbar.module.css";

const Navbar = () => {
  const arrays = [
    { id: 1, link: "/stores", name: "Stores" },
    { id: 2, link: "/cart", name: "Cart" },
    { id: 3, link: "/aboutus", name: "About us" },
    { id: 4, link: "/contact", name: "Contact" },
  ];
  return (
    <>
      <div className={classes.container}>
        <span style={{ padding: "0px 15px" }}>Logo</span>
        <ul className={classes.ul}>
          {arrays.map((item, index) => {
            return (
              <li key={index} className={classes.li}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

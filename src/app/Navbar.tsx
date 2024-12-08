import Link from "next/link"
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";


function Navbar(){
    return(
    <div className="nav">
<div className="links">
<Link href='/'>Home</Link>
 <Link href='/shop'>Shop</Link>
  <Link href='/about'>About</Link>
  <Link href='/contact'>Contact</Link>
      </div>
      <div className="icons">
      <IoMdContact />
      <FaSearch />
      <FaRegHeart />
      <MdOutlineShoppingCart />
      </div>
</div>
      )
      }
      export default Navbar;
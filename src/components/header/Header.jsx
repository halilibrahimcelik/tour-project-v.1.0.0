import  styles from  "./header.module.scss";
import Navbar from "../navbar/Navbar";
function Header(){

    return ( <header className={styles}>

        <Navbar/>

    </header> )
}

export default Header;
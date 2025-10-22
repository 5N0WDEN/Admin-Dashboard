import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";




const Header = () => {
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid width-100">
                    <div className="row d-flex align-items-center w-100">
                        {/*Logo Wrapper */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} className="logo"/>
                                <span className="ml-2">UTIFY</span>
                            </Link>
                        </div>


                        <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                            <Button className="rounded-circle mr-3"><MdOutlineMenuOpen/></Button>
                            <SearchBox/>
                        </div>


                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3 pl-4">
                            <Button className="rounded-circle mr-3"><MdOutlineLightMode/></Button>
                            <Button className="rounded-circle mr-3"><IoCartOutline/></Button>
                            <Button className="rounded-circle mr-3"><MdOutlineMailOutline/></Button>
                            <Button className="rounded-circle mr-3"><FaRegBell/></Button>


                            <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center">
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp">
                                            </img>
                                        </span>
                                    </div>


                                    <div className="userInfo">
                                        <h4>Utkarsh Mhatre</h4>
                                        <p className="mb-0">@utakrsh007</p>
                                    </div>

                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
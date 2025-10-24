import React, { useState } from "react";
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { IoShieldHalfSharp } from "react-icons/io5";






const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMyAcc = Boolean(anchorEl);
    const handleOpenMyAccDr = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDr = () => {
        setAnchorEl(null);
    };

    const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
    const openNotifications = Boolean(isOpennotificationDrop);
    const handleisOpennotificationDrop = () =>{
        setisOpennotificationDrop(true);
    };
    const handleClosenotificationDrop = () => {
        setisOpennotificationDrop(false);
    }


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
                            
                            <div className=" dropDownWrapper position-relative">
                                <Button className="rounded-circle mr-3"
                                onClick={handleisOpennotificationDrop}
                                >
                                    <FaRegBell/>
                                </Button>
                                <Menu
                                    anchorEl={isOpennotificationDrop}
                                    className="notifications dropdown_list"
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleClosenotificationDrop}
                                    onClick={handleClosenotificationDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <div className='head pl-3 pb-2'>
                                        <h4>Orders (12)</h4>
                                    </div>
                                    <Divider className="mb-3"/>
                                    <MenuItem onClick={handleClosenotificationDrop}>
                                        <div className="d-flex align-items-center">
                                            <span className="rounded-circle">
                                                <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp">
                                                </img>
                                            </span>
                                        </div>
                                    </MenuItem>
                                </Menu>
                            </div>

                            <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center"
                                onClick={handleOpenMyAccDr}
                                >
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
                                <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={openMyAcc}
                                onClose={handleCloseMyAccDr}
                                onClick={handleCloseMyAccDr}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleCloseMyAccDr}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                My Account
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccDr}>
                                <ListItemIcon>
                                    <IoShieldHalfSharp />
                                </ListItemIcon>
                                Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccDr}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                                </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
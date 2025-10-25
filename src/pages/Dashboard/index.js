import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { Chart } from "react-google-charts";


export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  'backgroundColor':'transparent',
  'chartArea': {'width':'100%', 'height':'100%'},
};

const Dashboard = () =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle/>} grow={true}/>
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart/>} grow={false}/>
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag/>} grow={false}/>
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack/>} grow={false}/>
                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center w-100 bottomEle">
                                <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                                <Button className="ml-auto toggleIcon">
                                    <div>
                                        <IconButton
                                            aria-label="more"
                                            id="long-button"
                                            aria-controls={open ? 'long-menu' : undefined}
                                            aria-expanded={open ? 'true' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            className="dropdown_menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            slotProps={{
                                            paper: {
                                                style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                                },
                                            },
                                            list: {
                                                'aria-labelledby': 'long-button',
                                            },
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer/>Last Day    
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer/>Last Week
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer/>Last Month
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer/>Last Year
                                            </MenuItem> 
                                        </Menu>
                                    </div>
                                </Button>
                            </div>

                            <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                            <p>$3,578.90 in last month</p>
                            <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"180px"}
                            />
                        </div>
                    </div>
                </div>


                <div className="card shadow border-0 p-3">
                    <h3 className="hd">Best Selling Products</h3>

                
                
                </div>



            </div>
        </>
    )
}

export default Dashboard;
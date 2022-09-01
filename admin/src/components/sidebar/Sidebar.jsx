import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Dev NiN</span>
        </Link>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/">
            <li className="sidebtn">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LIST</p>
          <Link to="/users">
            <li className="sidebtn ">
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li className="sidebtn">
              <CreditCardOutlinedIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/products">
            <li className="sidebtn">
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li className="sidebtn">
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFULL</p>
          <li className="sidebtn">
            <InsertChartIcon className="icon" />
            <span>Status</span>
          </li>
          <li className="sidebtn">
            <NotificationsNoneOutlinedIcon className="icon" />
            <span>Notification</span>
          </li>
          <li className="sidebtn">
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>

          <p className="title">USER</p>
          <li className="sidebtn">
            <SettingsApplicationsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <li className="sidebtn">
            <AccountCircleOutlinedIcon className="icon" />
            <span>Prifile</span>
          </li>
          <li className="sidebtn">
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:'LIGHT'})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:'DARK'})}></div>
      </div>
    </div>
  );
};

export default Sidebar;

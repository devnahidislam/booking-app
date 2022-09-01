import {
  ChatBubbleOutline,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import './navbar.scss';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wraper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" onClick={()=>dispatch({type:'TOGGLE'})}/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className="icon" />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="https://ik.imagekit.io/nahidislam/My_Image/20201002_171423_ntXHgfxqQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652866343232"
              alt="Avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

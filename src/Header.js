import React from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
        <div className="header__left">
          <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.LFI4JJ0jsbkLTDoc8b3g-wHaHa%26pid%3DApi&f=1" 
            alt=""
          />
          <div className="header__input">
            <SearchIcon />
            <input placeholder="Search Facebook" type="text" />
          </div>
        </div>
        <div className="header__middle">
          <div className="header__option header__option--active">
            <HomeIcon fontSize="large" />
          </div>
          <div className="header__option">
            <FlagIcon fontSize="large" />
          </div>
          <div className="header__option">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div className="header__option">
            <StorefrontOutlinedIcon fontSize="large" />
          </div>
          <div className="header__option">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </div>
        <div className="header__right">
            <div className="header__info">
              <Avatar src={user.photoURL}/>
              <h4>{user.displayName}</h4>
            </div>

            <IconButton>
              <AddIcon />
            </IconButton>
            <IconButton>
              <ForumIcon />
            </IconButton>
            <IconButton>
              <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
        </div>
    </div>
    
  );
}

export default Header;

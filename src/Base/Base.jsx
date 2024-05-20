import { NavLink, useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../Base/Navbar.css";
import image from "../UI/Rechakra.png";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useState } from "react";

const Base = () => {
  let Navigate = useNavigate();

  // Menu Item datas for User
  const userMenu = [
    {
      Name: "Home",
      path: "",
    },
    {
      Name: "Category",
      path: "history",
    },
    {
      Name: "Orders",
      path: "/history",
    },
    {
      Name: "Cart",
      Path: "/cart",
    },
  ];

  // Seller menu details
  const sellerMenu = [
    {
      Name: "Home",
      path: "/sellerHome",
    },
    {
      Name: "Category",
      path: "history",
    },
    {
      Name: "Sold Product",
      path: "/soldProductDetails",
    },
    {
      Name: "Post Product",
      path: "/post-product",
    },
  ];

  // Logout
  function logout() {
    localStorage.removeItem("token");
    Navigate("/login");
  }

  // Account Setting Content
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <NavLink to="/" className="nav__logo">
            {/* Navigation Bar */}
            <img src={image} alt="Logo" className="h-auto max-w-lg mx-auto" />
          </NavLink>

          <div className={"nav__menu"} id="nav-menu">
            <ul className="nav__list">
              {/* User Menu */}
              {userMenu.map((val, idx) => (
                <li className="nav__item" key={idx}>
                  <NavLink to={val.path} className="nav__link">
                    {val.Name}
                  </NavLink>
                </li>
              ))}
              {/* Seller Menu */}
              {/* {
            sellerMenu.map((val,idx) => (
              <li className="nav__item" key={idx}>
              <NavLink to={val.path} className="nav__link">
                {val.Name}
              </NavLink>
            </li>
            ))
          } */}
              <li className="nav__item">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar
                        sx={{ width: 32, height: 32 }}
                        src="/static/images/avatar/1.jpg"
                        alt="Anitha"
                      ></Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
              </li>
              <li className="nav__item" onClick={logout}>
                <NavLink to="/get-started" className="nav__link nav__cta">
                  Logout
                </NavLink>
              </li>
            </ul>
            <div className="nav__close" id="nav-close">
              <IoClose />
            </div>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <IoMenu />
          </div>
        </nav>
      </header>

      {/* User Setting Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Base;

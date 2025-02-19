import { useState } from "react";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Typography,
  Tooltip,
  IconButton,
  Divider,
  ListItemIcon,
  MenuItem,
  Menu,
  Avatar,
  Box,
  Toolbar,
  AppBar,
  Button,
} from "@mui/material";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebsae.config";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Circle,
  Home,
  Info,
  Subscriptions,
  TrendingDown,
  TrendingUp,
} from "@mui/icons-material";
function Nav(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState("");
  const open = Boolean(anchorEl);
  const history = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  const login_btn = () => {
    history.push("/login");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
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
                    mr: -0.5,
                    ml: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 14,
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
              {user != null ? (
                <>
                  <MenuItem>
                    <Home sx={{ marginRight: "10px" }} />{" "}
                    <Link to="/">
                      <Typography
                        color={props.darkMode == true ? "white" : "darkgray"}
                      >
                        Home
                      </Typography>
                    </Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <TrendingUp sx={{ marginRight: "10px" }} />{" "}
                    <Link to="/Trending">
                      <Typography
                        color={props.darkMode == true ? "white" : "darkgray"}
                      >
                        Trending
                      </Typography>
                    </Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <Subscriptions />
                    </ListItemIcon>
                    <Link to="/Subscriptions">
                      <Typography
                        color={props.darkMode == true ? "white" : "darkgray"}
                      >
                        Subscriptions
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Info />
                    </ListItemIcon>
                    <Link to="/about">
                      <Typography
                        color={props.darkMode == true ? "white" : "darkgray"}
                      >
                        About
                      </Typography>
                    </Link>
                  </MenuItem>
                  <Divider />
                  {/* <MenuItem>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem> */}
                  <MenuItem
                    onClick={() => {
                      signOut(auth)
                        .then(() => {
                          toast.success("🦄 Logged out sucessfully", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                        })
                        .catch((error) => {
                          toast.error("🦄 Logout failed", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                        });
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>{" "}
                </>
              ) : (
                <h1></h1>
              )}
            </Menu>
            {/* Brand Name starts */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              HyperCube
            </Typography>
            {/* Brand Name end */}
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                props.settheme(!props.darkmode);
              }}
              color="inherit"
            >
              {props.darkMode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            {/* Appbar Account start */}

            {user ? (
              <>
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
                      <Avatar sx={{ width: 32, height: 32 }}>B</Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
              </>
            ) : (
              <Button variant="contained">
                <Link to="/login">
                  <Typography
                    color={props.darkMode == true ? "white" : "black"}
                  >
                    Login
                  </Typography>
                </Link>
              </Button>
            )}
            {/* Appbar Account end */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Nav;

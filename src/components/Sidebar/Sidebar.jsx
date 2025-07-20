import { Avatar, Button, Card, Divider, Menu, MenuItem } from "@mui/material";
import { navigationMenu } from "./SidebarNavigation";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  
  const { auth } = useSelector((state) => state);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleNavigate = (item) => {
    if (item.title === "Profile") {
      navigate(`/profile/${auth.user.id}`);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className="card h-screen flex flex-col justify-between py-5">
      <div className="space-y-8 pl-5">
        <div>
          <span className="logo font-bold text-xl">Social Web</span>
        </div>
        <div className="space-y-8 ">
          {navigationMenu.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavigate(item)}>
              <item.Icon />
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />
        <div className="pl-5 pt-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww" />
            <div>
              <p className="font-bold">
                {auth.user?.firstName + " " + auth.user?.lastName}
              </p>
              <p className="opacity-70">
                @
                {(auth.user?.firstName).toLowerCase() +
                  "_" +
                  (auth.user?.lastName).toLowerCase()}
              </p>
            </div>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}>
            <MoreVertIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Card>
  );
}

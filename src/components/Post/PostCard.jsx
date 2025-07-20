import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavouriteIcon from "@mui/icons-material/Favorite";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBublbleIcon from "@mui/icons-material/ChatBubble";
import BookMarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useState } from "react";

export default function PostCard({ item }) {

  const [showComments, setShowComments] = useState(false);
  
  const handleShowComment = () => setShowComments(!showComments);

  return (
    <Card className="">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.user?.firstName + " " + item.user?.lastName}
        subheader={
          "@" +
          (item.user?.firstName).toLowerCase() +
          " " +
          (item.user?.lastName).toLowerCase()
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={item?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item?.caption}
        </Typography>
      </CardContent>

      <CardActions className="flex justify-between" disableSpacing>
        <div>
          <IconButton>
            {true ? <FavouriteIcon /> : <FavouriteBorderIcon />}
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton onClick={handleShowComment}>
            <ChatBublbleIcon  />
          </IconButton>
        </div>
        <div>
          <IconButton>
            {true ? <BookMarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>
      {showComments && <section>
        <div className="flex items-center space-x-5 mx-3 my-5">
          <Avatar />
          <input
            onKeyPress={(e) => {
              if(e.key == "Enter") console.log("Enter pressed...", e.target.value);
            }}
            className="w-full outline-none bg-transparent border border-[#3b4050] rounded-full px-5 py-2"
            type="text"
            placeholder="Write your comment..."
          />
        </div>
        <Divider />
        <div className="mx-3 space-y-2 my-5 text-xs">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-5">
              <Avatar sx={{ height: "2rem", width: "2rem", fontSize: ".8rem"}} >C</Avatar>
              <p>nice image</p>
            </div>
          </div>
        </div>
      </section>}
    </Card>
  );
}

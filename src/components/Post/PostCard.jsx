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
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction, likePostsAction } from "../../redux/post/post.action";
import { isLikedByUser } from "../../utls/isLikedByUser";

export default function PostCard({ item }) {

  const [showComments, setShowComments] = useState(false);

  const dispatch = useDispatch();

  const { post, auth } = useSelector((store) => store);

  const handleShowComment = () => setShowComments(!showComments);

  const handleCreateComment = (content) => {
    const reqData = {
      postId: item.id,
      data: { content },
    };
    dispatch(createCommentAction(reqData));

  };

  const handleLikePost = () => {
    dispatch(likePostsAction(item.id));

  }

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
          <IconButton onClick={handleLikePost}>
            {isLikedByUser(auth.user.id, item) ? <FavouriteIcon /> : <FavouriteBorderIcon />}
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton onClick={handleShowComment}>
            <ChatBublbleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            {true ? <BookMarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>
      {showComments && (
        <section>
          <div className="flex items-center space-x-5 mx-3 my-5">
            <Avatar />
            <input
              onKeyPress={(e) => {
                if (e.key === "Enter") handleCreateComment(e.target.value);
              }}
              className="w-full outline-none bg-transparent border border-[#3b4050] rounded-full px-5 py-2"
              type="text"
              placeholder="Write your comment..."
            />
          </div>
          <Divider />
          <div className="mx-3 space-y-2 my-5 text-xs">
            {item?.comments.map((comment) => (
              <div key={comment?.id} className="flex items-center space-x-5">
                <Avatar
                  sx={{ height: "2rem", width: "2rem", fontSize: ".8rem" }}>
                  {comment?.user?.firstName[0]}
                </Avatar>
                <p>{comment?.content}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </Card>
  );
}

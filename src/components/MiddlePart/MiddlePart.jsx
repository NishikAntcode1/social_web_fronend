import { Avatar, Card, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
import { useEffect, useState } from "react";
import CreatePostModal from "../CreatePost/CreatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction, getAllPostAction } from "../../redux/post/post.action";

const story = [1, 2, 3, 4, 5];
export default function MiddlePart() {

  const [open, setOpen] = useState(false);
  const handleOpenCreatePostModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const { post } = useSelector(store => store);

  useEffect(() => {
    dispatch(getAllPostAction())
  
  }, [post.newComment])
  

  return (
    <div className="px-20">
      {/* stories section */}
      <section className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "5rem", height: "5rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((_, index) => (
          <StoryCircle key={index} />
        ))}
      </section>

      {/* create post section */}
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            type="text"
            className="w-[90%] px-5 bg-transparent border-[#3b4054] border rounded-full outline-none"
            readOnly
          />
        </div>

        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ImageIcon />
            </IconButton>
            <span>Media</span>
          </div>
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <VideocamIcon />
            </IconButton>
            <span>Video</span>
          </div>
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ArticleIcon />
            </IconButton>
            <span>Write Article</span>
          </div>
        </div>
      </Card>

      {/* posts section */}
      <div className="mt-5 space-y-5 ">
        {post.posts?.map((item) => <PostCard key={item.id} item={item} />)}
      </div>

      {/* Create Post Modal */}
      <div>
        <CreatePostModal open={open} handleClose={handleClose} />
      </div>
    </div>
  );
}

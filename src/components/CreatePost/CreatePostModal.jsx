import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { uploadTOCloudinary } from "../../utls/uploadToCloudinary";
import { useDispatch } from "react-redux";
import { createPostAction } from "../../redux/post/post.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: ".6rem",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

export default function CreatePostModal({ open, handleClose }) {

  const [selecledImage, setSelectedImage] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    const imgUrl = await uploadTOCloudinary(event.target.files[0], "image");
    setSelectedImage(imgUrl);
    setIsLoading(false);
    formik.setFieldValue("image", imgUrl);
  };

  const handleSelectVideo = async (event) => {
    setIsLoading(true);
    const videoUrl = await uploadTOCloudinary(event.target.files[0], "image");
    setSelectedVideo(videoUrl);
    setIsLoading(false);
    formik.setFieldValue("video", videoUrl);
  };

  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: "",
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
      dispatch(createPostAction(values));
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="flex space-x-4 items-center">
              <Avatar />
              <div>
                <p className="font-bold text-lg">Nishikant</p>
                <p className="text-sm">Nishikant</p>
              </div>
            </div>
            <textarea
              className="w-full mt-5 p-2 bg-transparent border-[#3b4054] border rounded-sm outline-none"
              name="caption"
              id="caption"
              placeholder="Write caption"
              value={formik.values.caption}
              onChange={formik.handleChange}
              rows={4}></textarea>
            <div className="flex space-x-5 items-center mt-5">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  style={{ display: "none" }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton color="primary" component="span">
                    <ImageIcon />
                  </IconButton>
                </label>
                <span>Image</span>
              </div>
              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleSelectVideo}
                  style={{ display: "none" }}
                  id="video-input"
                />
                <label htmlFor="video-input">
                  <IconButton color="primary" component="span">
                    <VideoCallIcon />
                  </IconButton>
                </label>
                <span>Video</span>
              </div>
            </div>
            {selecledImage && (
              <div>
                <img
                  src={selecledImage}
                  className="h-[10rem]"
                  alt="Selected Image"
                />
              </div>
            )}
            <div className="flex w-full justify-end">
              <Button
                variant="contained"
                type="submit"
                sx={{ borderRadius: "1.5rem" }}>POST</Button>
            </div>
          </div>
        </form>
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={isLoading}
          onClick={handleClose}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Modal>
  );
}

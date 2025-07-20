import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
import UserReelsCard from "../../components/Reels/UserReelsCard";
import { useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";

const tabs = [
  { value: "posts", label: "Posts" },
  { value: "reels", label: "Reels" },
  { value: "saved", label: "Saved" },
  { value: "repost", label: "Repost" },
];

const posts = [1, 2, 3, 4, 5];
const reels = [1, 2, 3, 4, 5];
const savePosts = [1, 2, 3, 4, 5];
export default function Profile() {
  const { id } = useParams();

  const auth = useSelector((state) => state.auth);

  const [value, setValue] = useState("posts");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md object-cover"
            src="https://media.istockphoto.com/id/1370742380/vector/cityscape-on-dark-blue-background-with-bright-glowing-neon-technology-city-background.jpg?s=612x612&w=0&k=20&c=Oq4p5kMY72j-XIdImQw9nxel-e3nJw1J_EOAjReGs0k="
            alt="profile background"
          />
        </div>
        <div className="h-[5rem] flex justify-between items-start px-5  mt-5">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
          />
          {true ? (
            <Button
              onClick={handleOpen}
              sx={{ borderRadius: "20px" }}
              variant="outlined">
              Edit Profile
            </Button>
          ) : (
            <Button variant="outlined">Follow</Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-x1">
              {auth.user?.firstName + " " + auth.user?.lastName}
            </h1>
            <p>
              @
              {(auth.user?.firstName).toLowerCase() +
                "_" +
                (auth.user?.lastName).toLowerCase()}
            </p>
          </div>
          <div className="flex gap-5 items-center py-3">
            <span>41 posts</span>
            <span>35 followers</span>
            <span>5 followings</span>
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, deserunt.
            </p>
          </div>
        </div>

        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example">
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  value={tab.value}
                  label={tab.label}
                  wrapped
                />
              ))}
            </Tabs>
          </Box>

          <div className="flex justify-center">
            {value === "posts" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((_, index) => (
                  <div
                    className="border border-slate-100 rounded-md"
                    key={index}>
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex flex-wrap gap-2 my-10">
                {reels.map((_, index) => (
                  <UserReelsCard key={index} />
                ))}
              </div>
            ) : value === "saved" ? (
              <div className="space-y-5 w-[70%] my-10">
                {savePosts.map((_, index) => (
                  <div
                    className="border border-slate-100 rounded-md"
                    key={index}>
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : (
              <div>Repost</div>
            )}
          </div>
        </section>
      </div>

      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
    </Card>
  );
}

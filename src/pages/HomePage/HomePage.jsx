import { Grid } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import MiddlePart from "../../components/MiddlePart/MiddlePart";
import Reel from "../../components/Reels/Reel";
import CreateReelForm from "../../components/Reels/CreateReelForm";
import Profile from "../Profile/Profile";
import HomeRight from "../../components/HomeRight/HomeRight";
import { useSelector } from "react-redux";

export default function HomePage() {

  const location = useLocation();

  const auth = useSelector((state) => state.auth);

  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid size={{ xs: 0, lg: 3 }}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>
        <Grid
          className="px-5 flex justify-center"
          size={{ xs: 12, lg: location.pathname === "/" ? 6 : 9 }}>
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="/reels" element={<Reel />} />
            <Route path="/create-reels" element={<CreateReelForm />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>
        {location.pathname === "/" && (
          <Grid size={{ xs: 0, lg: 3 }} className="relative">
            <div className="sticky top-0 w-full">
              <HomeRight />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

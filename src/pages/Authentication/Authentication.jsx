import { Card, Grid } from "@mui/material";
import SocialBanner from "../../assets/social-media-3846597_1280.webp";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";

export default function Authentication() {
  return (
    <div>
      <Grid container>
        <Grid className="h-screen overflow-hidden" size={7}>
          <img className="h-full w-full" src={SocialBanner} alt="Side Image" />
        </Grid>
        <Grid size={5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center">Social-Web</h1>
                <p className="text-center text-sm w-[70&]">Connecting Lives, Sharing Stories: Your Social World, Your Way</p>
              </div>
              <Routes>
                <Route index element={<Login />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
              </Routes>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

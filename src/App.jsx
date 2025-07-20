import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./pages/Authentication/Authentication";
import Message from "./pages/Message/Message";
import HomePage from "./pages/HomePage/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "./redux/auth/auth.action";
import { useEffect } from "react";

function App() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      dispatch(getProfileAction(jwt));
    }
  }, [dispatch]);

  return (
    <div className="">
      <Routes>
        <Route
          path="/*"
          element={auth.user ? <HomePage /> : <Authentication />}></Route>
        <Route path="/message" element={<Message />}></Route>
        <Route path="/*" element={<Authentication />}></Route>
      </Routes>
    </div>
  );
}

export default App;

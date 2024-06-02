import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./HomePage/Home";
import About from "./AboutPage/About";
import Explore from "./ExplorePage/Explore";
import MyNavbar from "./Navbar/MyNavbar";
import LatestNews from "./LatestPage/LatestNews";
import Sign_up from "./HomePage/Sign_up";
import Error_404 from "./ErrorPage_404/Error_404";
import RandomUsers from "./ExplorePage/RandomUsers/RandomUsers";
import RandomImages from "./ExplorePage/RandomImages/RandomImages";
import NoteState from "./UseContext/notes/NoteState";
import Blog from "./BlogPage/Blog";
import ShowNotes from "./BlogPage/AllNotes/ShowNotes";
import CreateNote from "./BlogPage/CreateNotes/CreateNote";
import Sign_in from "./HomePage/Sign_in";

function MainPage() {
  return (
    // This Project is Made in Bootstrap Framework
    <>
      <NoteState>
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore/" element={<Explore />}>
              <Route path="RandomUsers" element={<RandomUsers />} />
              <Route path="RandomImages" element={<RandomImages />} />
            </Route>

            <Route path="/Signup" element={<Sign_up />} />
            <Route path="/Signin" element={<Sign_in />} />
            <Route path="/LatestNews" element={<LatestNews />} />
            <Route path="/*" element={<Error_404 />} />

            <Route path="/blogpage/" element={<Blog />}>
              <Route path="ShowNotes" element={<ShowNotes />} />
              <Route path="CreateNote" element={<CreateNote />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default MainPage;

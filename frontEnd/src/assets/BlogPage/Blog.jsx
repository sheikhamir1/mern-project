import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Blog.css";

// import NoteContext from "../UseContext/notes/NoteContext";

function Blog() {
  return (
    <>
      <div className="SetupBlog">
        <Link className="LinkSetup" as={Link} to="CreateNote">
          Create New Notes
        </Link>

        <Link className="LinkSetup" as={Link} to="ShowNotes">
          Go to All Notes
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Blog;

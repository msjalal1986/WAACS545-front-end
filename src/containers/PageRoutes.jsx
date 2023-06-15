import { Routes, Route } from "react-router";
import Posts from './Posts';
import PostDetails from "../components/PostDetails";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/post-details/:id" element={<PostDetails />} />
    </Routes>
  );
}

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/middlewares/postMiddleware";
const Posts = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);
  const isLoading = useSelector((state) => state.post.isLoading);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <h2>Danh sách bài viết</h2>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        postList.map(({ id, title, body }) => (
          <div key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;

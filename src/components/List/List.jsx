import Post from "../Post/Post";
import "./List.scss";

export default function List({ data = [] }) {
  return (
    <div className="list">
      {data.map((i) => (
        <Post post={i} />
      ))}
    </div>
  );
}

import "./PostContent.scss";

export default function PostContent({ caption, img }) {
  return (
    <div className="post-content">
      <p className="post-content__text">{caption}</p>
      <img className="post-content__img" alt="Content image" src={img} />
    </div>
  );
}

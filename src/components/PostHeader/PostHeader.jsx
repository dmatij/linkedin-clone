import "./PostHeader.scss";

export default function PostHeader({
  avatar = " https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg ",
  fullname,
  title,
}) {
  return (
    <div className="post-header">
      <img className="post-header__img" alt="Profile pic" src={avatar}></img>
      <div className="post-header__text-container">
        <span className="post-header__title">{fullname}</span>
        <span className="post-header__subtitle">{title}</span>
      </div>
    </div>
  );
}

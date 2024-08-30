export default ({ photo, title }) => {
  return (
    <div className="overflow-hidden rounded-full w-36 h-36 ">
      <img src={photo} alt={title} />
    </div>
  );
};

function ImageCard(props) {
  return (
    <div
      className={`px-[20px] py-[10px] rounded-xl ${props.class}`}
      style={{
        backgroundImage: `url(${props.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {props.children}
    </div>
  );
}

export default ImageCard;

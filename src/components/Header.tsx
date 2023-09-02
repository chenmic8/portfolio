interface HeaderText {
  title: string;
  text: string;
  subtext: string;
  image: string;
}

const Header = ({ title, text, subtext, image }: HeaderText) => {
  return (
    <>
      <div>
        <div>
            
        <h1>{title}</h1>
        <h5>{text}</h5>
        <p>{subtext}</p>
        </div>
        <div>
            <img src={image} alt={title} />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Header;

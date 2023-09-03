interface HeaderText {
  title: string;
  text: string;
  subtext: string;
  image: string;
}

const Header = ({ title, text, subtext, image }: HeaderText) => {
  return (
    <>
      <section className='px-8 pt-8 text-text shadow-lg bg-crust'>
        <div className='flex flex-row w-full justify-center align-start'>
          <div className='flex flex-col justify-start align-center pt-8 pr-8'>
            <h1 className='mb-6 text-5xl font-bold'>{title}</h1>
            <h5 className='text-xl'>{text}</h5>
            <p className='text-subtext0'>{subtext}</p>
          </div>
          <div>
            <img src={image} alt={title} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

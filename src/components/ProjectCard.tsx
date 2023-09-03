interface ProjectCardContent {
  link: string;
  image: string;
  title: string;
  description: string;
}

const ProjectCard = ({
  link,
  image,
  title,
  description,
}: ProjectCardContent) => {
  return (
    <>
      <a href={link} className='flex flex-col bg-crust rounded-md p-2'>
        <img src={image} alt={title} className="rounded-md" />
        <div className="px-4 py-2">

        <h5 className='text-text text-lg'>{title}</h5>
        <p className='text-subtext0'>{description}</p>
        </div>
      </a>
    </>
  );
};

export default ProjectCard;

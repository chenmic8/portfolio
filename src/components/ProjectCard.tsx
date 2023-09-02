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
      <a href={link}>
        <img src={image} alt={title} />
        <h5>{title}</h5>
        <p>{description}</p>
      </a>
    </>
  );
};

export default ProjectCard;

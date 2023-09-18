import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

const landingPage = {
  title: "<Programmer>",
  text: "Developer who writes clean, elegant and efficient code",
  subtext:
    "I'm a Full Stack web developer based in Troy, Michigan. Since 2022, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me rock climbing, pumping metal, or playing video games.",
  titleImage:
    "https://c4.wallpaperflare.com/wallpaper/480/585/181/iu-k-pop-hd-wallpaper-preview.jpg",
};

const landingProjects = [
  {
    title: "Programming Startup Simulator",
    description: "Idle game",
    image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
  },
  {
    title: "Project Management",
    description: "Side project",
    image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
  },
  {
    title: "Car Share",
    description: "Side project",
    image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
  },
];

const Landing = () => {
  return (
    <>
      <Header
        title={landingPage.title}
        text={landingPage.text}
        subtext={landingPage.subtext}
        image={landingPage.titleImage}
      />
      <div className='flex flex-row px-20 py-16 gap-5'>
        {landingProjects.map((project) => (
          <ProjectCard
            link={"https://www.adhamdannaway.com/"}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
};

export default Landing;

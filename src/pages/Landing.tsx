import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

const Landing = () => {
  return (
    <>
      <Header
        title={"Landing"}
        text={"text"}
        subtext={"subtext"}
        image='https://c4.wallpaperflare.com/wallpaper/480/585/181/iu-k-pop-hd-wallpaper-preview.jpg'
      />
      <div>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <ProjectCard
          link={"https://www.adhamdannaway.com/"}
          image={
            "https://www.celoxis.com/cassets/img/pmc/project-management.png"
          }
          title={"Project Title"}
          description={"short project description"}
        />
        <ProjectCard
          link={"https://www.adhamdannaway.com/"}
          image={
            "https://www.celoxis.com/cassets/img/pmc/project-management.png"
          }
          title={"Project Title"}
          description={"short project description"}
        />
        <ProjectCard
          link={"https://www.adhamdannaway.com/"}
          image={
            "https://www.celoxis.com/cassets/img/pmc/project-management.png"
          }
          title={"Project Title"}
          description={"short project description"}
        />
      </div>
    </>
  );
};

export default Landing;

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
      <div className="flex flex-row px-20 py-16 gap-5">
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

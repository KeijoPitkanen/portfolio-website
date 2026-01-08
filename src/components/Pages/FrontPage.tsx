import "../Styles/FrontPage.css";
import "../Styles/SharedStyles.css";
import TEXT from "../../assets/TextContent.json";
import PROJECTS from "../../assets/Projects.json";
import type { JSX } from "react";
import ProjectCard from "../ProjectCard";
import type { ProjectInterface } from "../Interfaces/ProjectInterface";

/**
 *
 * @returns Frontpage element
 */
function FrontPage() {
  /////////////////////////////////////////////////////// Functions
  /**
   *
   * @returns all projects in the ProjectCard form
   */
  function renderAllProjects(): JSX.Element {
    return (
      <>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            projectText={project.projectText}
            imagePath={project.imagePath}
            link={project.link}
            linkText={project.linkText}
            usedTechnologies={project.usedTechnologies}
          />
        ))}
      </>
    );
  }

  /**
   *
   * @param index of the project in the PROJECTS array
   * @returns one project card of the parameter index
   */
  function renderProject(index: number): JSX.Element {
    const project: ProjectInterface = PROJECTS[index];
    return (
      <ProjectCard
        title={project.title}
        description={project.description}
        projectText={project.projectText}
        imagePath={project.imagePath}
        link={project.link}
        linkText={project.linkText}
        usedTechnologies={project.usedTechnologies}
      />
    );
  }

  /**
   *
   * @param header Header for the list
   * @param list interests
   * @returns list of all interests with header
   */
  function renderInterestList(header: string, list: string[]) {
    return (
      <div className="interest-list">
        <h5>{header}</h5>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  /////////////////////////////////////////////////////// Main Return
  return (
    <div className="page-container">
      <div className="content-box-large">
        <h5>{TEXT.frontPage.aboutMeHeader1}</h5>
        <p>{TEXT.frontPage.aboutMeBoxText1}</p>
        <h5>{TEXT.frontPage.aboutMeHeader2}</h5>
        <p>{TEXT.frontPage.aboutMeBoxText2}</p>
        <div className="interest-list-container">
          {renderInterestList(
            TEXT.frontPage.aboutMeListHeader1,
            TEXT.frontPage.aboutMeList1
          )}
          {renderInterestList(
            TEXT.frontPage.aboutMeListHeader2,
            TEXT.frontPage.aboutMeList2
          )}
        </div>
        <h5>{TEXT.frontPage.aboutMeHeader3}</h5>
        <p>{TEXT.frontPage.aboutMeBoxText3}</p>
      </div>
      <div className="content-box-container">
        <div className="content-box-medium">
          <h5>{TEXT.frontPage.projectBoxHeader}</h5>
          <p>{TEXT.frontPage.projectBoxText1}</p>
          <p>{TEXT.frontPage.projectBoxText2}</p>
          <p>{TEXT.frontPage.projectBoxText3}</p>
        </div>
        {renderProject(0)}
        {renderProject(3)}
      </div>
      <div className="content-box-large">
        <h5>{TEXT.frontPage.aboutMeHeader4}</h5>
        <p>{TEXT.frontPage.aboutMeBoxText4}</p>
      </div>
      <div className="projects-grid">{renderAllProjects()}</div>
    </div>
  );
}

export default FrontPage;

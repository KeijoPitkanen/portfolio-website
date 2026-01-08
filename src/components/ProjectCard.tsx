import { useState, type JSX } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import type { ProjectInterface } from "./Interfaces/ProjectInterface";
import "./Styles/ProjectCard.css";
import TEXT from "../assets/TextContent.json";

//TODO: Fix project card not rendering in correct color when using waterfox. Test other browsers as well

/**
 *
 * @param project
 * @returns A card about about the parameter project. When clicked will open a modal with more info about the project
 */
function ProjectCard(project: ProjectInterface): JSX.Element {
  /////////////////////////////////////////////////////// Variables
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /////////////////////////////////////////////////////// Functions
  /**
   * opens the projects github page on a new tab
   */
  function handleClick(): void {
    if (project.link) {
      window.open(project.link);
    }
  }

  /**
   *
   * @returns button for github link if the github link is not null
   */
  function renderGithubLink(): JSX.Element | null {
    if (project.link != null) {
      return (
        <Button variant="primary" onClick={() => handleClick()}>
          {project.linkText}
        </Button>
      );
    } else {
      return null;
    }
  }

  /////////////////////////////////////////////////////// Main Return
  return (
    <>
      <Modal show={show} onHide={handleClose} x>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{project.description}</p>
          <p>{project.projectText}</p>
          <b>{TEXT.projectCard.usedTechnologies}:</b> {project.usedTechnologies}
        </Modal.Body>
        <Modal.Footer>{renderGithubLink()}</Modal.Footer>
      </Modal>

      <Card className="project-card" onClick={handleShow}>
        <Card.Img
          variant="top"
          src={project.imagePath}
          className="card-image"
        />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Card.Text>
            <b>{TEXT.projectCard.usedTechnologies}:</b>{" "}
            {project.usedTechnologies}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default ProjectCard;

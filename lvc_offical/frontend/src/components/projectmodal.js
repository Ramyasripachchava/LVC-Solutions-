import '../style.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <div className="modal-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="modal-info">
          <h2>{project.title}</h2>
          <p className="modal-description">{project.description}</p>
          <div className="modal-details">
            <h3>Key Features:</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
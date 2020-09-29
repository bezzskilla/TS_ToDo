import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>ToDo on TypeScript && React</h1>
      <h3>Тут будет какая то инфа</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ea
        laboriosam sint omnis accusamus. Possimus eum nulla voluptatum veritatis
        ipsum.
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        К списку дел
      </button>
    </>
  );
};

export default AboutPage;

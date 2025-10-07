import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

//React.FC: TypeScript type provided by React to define a functional component.
const ThoughtlyApiDocs: React.FC = () => {
  return (
    <SwaggerUI url="https://registry.scalar.com/@revcloud/apis/thoughtly-destination-connection-api/latest/openai.yaml" />
  );
};

export default ThoughtlyApiDocs;

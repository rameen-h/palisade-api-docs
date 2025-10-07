import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

//React.FC: TypeScript type provided by React to define a functional component.
const BlacklistAllianceApiDocs: React.FC = () => {
  return (
    <SwaggerUI url="https://registry.scalar.com/@revcloud/apis/blacklist-alliance-destination-connection-api/latest/openapi.yaml" />
  );
};

export default BlacklistAllianceApiDocs;

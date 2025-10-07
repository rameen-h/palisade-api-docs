import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

//React.FC: TypeScript type provided by React to define a functional component.
const FileOnboardingApiDocs: React.FC = () => {
  return (
    <SwaggerUI url="https://registry.scalar.com/@revcloud/apis/file-onboarding-source-management-api/latest/openapi.yaml" />
  );
};

export default FileOnboardingApiDocs;

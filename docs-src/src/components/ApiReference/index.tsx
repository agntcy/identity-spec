import type { ReactNode } from "react";
import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";

export default function ApiReference(): ReactNode {
  return (
    <ApiReferenceReact
      configuration={{
        url: "/api/openapi/v1alpha1/openapi.yaml",
      }}
    />
  );
}

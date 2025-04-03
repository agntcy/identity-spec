import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import ApiReference from "@site/src/components/ApiReference";

export default function OpenApi(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Agtncy ${siteConfig.title}`}
      description="Agent Identity by Agntcy"
    >
      <main>
        <ApiReference />
      </main>
    </Layout>
  );
}

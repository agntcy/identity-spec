import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Decentralized Identity Management",
    description: (
      <>
        PyramID is crafted to seamlessly manage decentralized identities across
        multiple platforms. Our system ensures secure and efficient identity
        management, allowing users to access services and applications with
        ease.
      </>
    ),
  },
  {
    title: "Effortless Integration",
    description: (
      <>
        Connect your existing platforms effortlessly with PyramID-Engine's
        support for custom sources like Splunk, Meraki, Jira, Salesforce, and
        Stripe. Our system uses OpenAPI specifications to ensure smooth data
        source integration without hassle.
      </>
    ),
  },
  {
    title: "Customizable and Extensible",
    description: (
      <>
        With the "Bring your own tool" functionality, PyramID-Engine allows
        administrators to add custom tools and extend existing source
        capabilities. Tailor your environment to meet specific needs with ease,
        ensuring maximum utility and flexibility.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

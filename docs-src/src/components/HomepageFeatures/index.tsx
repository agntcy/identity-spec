import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Decentralized Identity",
    description: (
      <>
        Unlock the power of self-sovereign identity and learn how to create and
        manage your decentralized identifiers.
      </>
    ),
  },
  {
    title: "Agent Identity Solutions",
    description: (
      <>
        Explore comprehensive guides and best practices for implementing
        decentralized identity management for agents.
      </>
    ),
  },
  {
    title: "Internet of Agents",
    description: (
      <>
        The AGNTCY is where we are building the Internet of Agents to be
        accessible for all.
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

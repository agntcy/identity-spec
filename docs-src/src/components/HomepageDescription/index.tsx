import type { ReactNode } from "react";
import styles from "./styles.module.css";

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>Welcome to PyramID</h1>
      </div>
      <div className="container" style={{ paddingTop: "2rem" }}>
        <h3>How it Works</h3>
      </div>
      <div className="container" style={{ paddingTop: "2rem" }}>
        <h3>Use Cases</h3>
      </div>
      <div className="container" style={{ paddingTop: "2rem" }}>
        <h3>Under the Hood</h3>
        <p>
          Explore the workings of PyramID with our simplified architecture
          diagram.
        </p>
      </div>
      <div
        className="container"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <h3>Get Started</h3>
        <p>
          Ready to experience the benefits of PyramID? Check out our{" "}
          <a href="/docs/intro">quick tutorial</a> to get started in just 5
          minutes!
        </p>
      </div>
    </section>
  );
}

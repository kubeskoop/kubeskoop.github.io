import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const Intro = {
    img: require('@site/static/img/kubeskoop_features.png').default,
    descriptions: [
      (<><Translate>
        Network DataPath Diagnose
        </Translate></>),
      (<><Translate>
        Network Deep Monitor
      </Translate></>),
      (<><Translate>
        Anomy Network Event Tracing
      </Translate></>)
    ],
}

const FeatureList = [
  {
    title: <Translate>One-Shot Diagnose</Translate>,
    img: require('@site/static/img/kubeskoop_oneshot.png').default,
    description: (
      <>
        <ul>
          <li>
            <Translate>
              Diagnose in-cluster traffic between Pod,Service,Node and Ingress/Egress Traffic.
            </Translate>
          </li>
          <li>
            <Translate>
              Cover whole linux network stack: Socket,Bridge,Veth,Netfilter,sysctls…
            </Translate>
          </li>
          <li>
            <Translate>
              Support IAAS network probe for cloud providers.
            </Translate>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <Translate>In-Depth Kernel Monitor</Translate>,
    img: require('@site/static/img/monitoring.png').default,
    description: (
      <>
        <ul>
          <li>
            <Translate>
              eBPF seamless kernel monitor
            </Translate>
          </li>
          <li>
            <Translate>
              CO-RE scripts on series kernel by BTF
            </Translate>
          </li>
          <li>
            <Translate>
              export metrics to standard Prometheus metric API
            </Translate>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <Translate>Network Anomaly Event</Translate>,
    img: require('@site/static/img/loki_tracing.png').default,
    description: (
      <>
        <ul>
          <li>
            <Translate>
              support dozens of anomy scenes recognition
            </Translate>
          </li>
          <li>
            <Translate>
              export anomy event to Grafana Loki
            </Translate>
          </li>
        </ul>
      </>
    ),
  },
];

function Feature({Svg, title, description, img}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureImage)}>
        <img role="img" src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div className="text--left">
        {description}
        </div>
      </div>
    </div>
  );
}

const IntroKeys = () => {
  return (
    <div className={styles.introRightCol}>
      <h2>
        <Translate>
          What is KubeSkoop?
        </Translate>
      </h2>
      <ul>
        {
          Intro.descriptions.map(
            (description, key) => (
              <li className={clsx("text--semibold", styles.featUL)} key={key}>
                {description}
              </li>
            )
          )
        }
      </ul>
    </div>

  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx("container")}>
        <div className={clsx("row", styles.intro)}>
          <img src={Intro.img} className={styles.introLeftCol} />
          <IntroKeys />
        </div>
        <div className={clsx("row")}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

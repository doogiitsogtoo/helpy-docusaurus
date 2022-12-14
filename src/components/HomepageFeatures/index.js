import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Глориа Стэйнем',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        "Бидний хамгийн эхний асуудал бол сурахгүй байгаа явдал биш, сурсан хэрэггүй зүйлээ гээх явдал юм."
      </>
    ),
  },
  {
    title: 'Жон Холт',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        "Сурах нь заалгасны үр дүн бус, суралцагчийн өөрийнх нь идэвх зүтгэлийн үр дүн билээ."
      </>
    ),
  },
  {
    title: 'Абигайл Адамс',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        "Хүн хэзээ ч юмыг санаандгүйгээр сурдаггүй. Аливааг сурахын тулд тэмүүлж, хичээнгүйлэх ёстой."
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

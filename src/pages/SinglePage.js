import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const aboutData = [
    {
      slug: 'about-app',
      title: 'About the App',
      description:
      'In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.',
    },
    {
      slug: 'about-author',
      title: 'About the Author',
      description:
      'Passion-driven Full-stack (Front-End & back-End) Cloud and Web Applications developer. I enjoy building; business & cloud-based systems, Payments platforms, API integrations, CRM software systems and Automation tools. I love collaborating with teams in solving; community, business, and real global problems using lines of code.<br><br> So go ahead and connect with Blessed Jason Mwanza on Twitter @mwanzabj.',
    },
  ];

  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;

  return (
    <div className="main__content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
export default SinglePage;
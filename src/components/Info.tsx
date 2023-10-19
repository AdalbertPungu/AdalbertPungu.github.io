import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

import MailTo from './MailTo';
import imgProfile from '../assets/profile.jpg';

const Info: React.FC = () => {
  return (
    <>
      <img src={imgProfile} alt="Adalbert Pungu Profile" />
      <section className="section-info">
        <h2 className="name">Adalbert Pungu</h2>
        <p className="stack">Software Developer</p>
        <button className="btn">
          <a
            href="https://adalbertpungu.tech/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Know more
          </a>
        </button>
        <div className="contact">
          <MailTo
            email="adalbertpungu@hotmail.com"
            subject="Let's Talk"
            body="Hey, Adalbert!"
          >
            <FaEnvelope className="icon" />
            <span>Email</span>
          </MailTo>
          <a
            href="https://linkedin.com/in/AdalbertPungu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5714 2H3.42411C2.63839 2 2 2.64732 2 3.44196V20.558C2 21.3527 2.63839 22 3.42411 22H20.5714C21.3571 22 22 21.3527 22 20.558V3.44196C22 2.64732 21.3571 2 20.5714 2ZM8.04464 19.1429H5.08036V9.59821H8.04911V19.1429H8.04464ZM6.5625 8.29464C5.61161 8.29464 4.84375 7.52232 4.84375 6.57589C4.84375 5.62946 5.61161 4.85714 6.5625 4.85714C7.50893 4.85714 8.28125 5.62946 8.28125 6.57589C8.28125 7.52679 7.51339 8.29464 6.5625 8.29464ZM19.1562 19.1429H16.192V14.5C16.192 13.3929 16.1696 11.9688 14.6518 11.9688C13.1071 11.9688 12.8705 13.1741 12.8705 14.4196V19.1429H9.90625V9.59821H12.75V10.9018H12.7902C13.1875 10.1518 14.1563 9.36161 15.5982 9.36161C18.5982 9.36161 19.1562 11.3393 19.1562 13.9107V19.1429Z"
                fill="white"
              />
            </svg>
            <span>Linkedin</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Info;

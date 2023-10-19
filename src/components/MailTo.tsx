import React from "react";

interface MailtoProps {
  email: string;
  subject?: string;
  body?: string;
  children: React.ReactNode;
}

const Mailto: React.FC<MailtoProps> = ({ email, subject = '', body = '', children }) => {
  const params = new URLSearchParams({ subject, body }).toString();
  const mailtoLink = `mailto:${email}?${params}`;

  return (
    <a href={mailtoLink} className="mail">
      {children}
    </a>
  );
};

export default Mailto;

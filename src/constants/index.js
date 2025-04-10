import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    cpp,
    nextjs,
    meta,
    starbucks,
    tesla,
    shopify,
    aiInterview,
    chatApp,
    ecommerce,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "AI developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Modern UI-Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Next.js",
      icon: nextjs,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "A learned learner",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Been developing since 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Node.js Developer",
      company_name: "Heavily tested developer",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "Been developing since 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Complete developer",
      icon: threejs,
      iconBg: "#383E56",
      date: "Learning since 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "AI Developer",
      company_name: "Big Fan",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Was and Will always be learning",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "A great deal of progress has been made by Aradhya in the past few months.",
      name: "Abhinav Parashar",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Learned and showed a lot of experience lately with my project.",
      name: "Anubhav Sharma",
      designation: "Owner",
      company: "StageLife India",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Aradhya has been a great help to me in the past few months and has been a great learner.",
      name: "Saket Sharma",
      designation: "Manager",
      company: "Sapid Blue Tech",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI based interview platform",
      description:
        "Web application that enables users to take AI based interviews and get the results with ease in their specific fields. Also, able to analyze the results and give suggestions to the user.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "Google Gemini",
          color: "pink-text-gradient",
        },
      ],
      image: aiInterview,
      source_code_link: "https://ai-interview-next-js-git-master-sharmaaradhyajis-projects.vercel.app/sign-in",
    },
    {
      name: "Ecommerce",
      description:
        "Web application that enables users to find the best products at the best price which includes admin dashboard and user dashboard. Finally add their favourite products to the cart and checkout with payment options.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://forever-forntend.vercel.app/",
    },
    {
      name: "Realtime Chat App",
      description:
        "Developed a real-time chat application using MERN stack and Socket.IO, deployed on Render. Allowed to change themes, send messages, see online users, and receive notifications.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: chatApp,
      source_code_link: "https://chatapprender-1-spdh.onrender.com/login",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
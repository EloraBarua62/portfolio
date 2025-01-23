import styles from './SkillsSet.module.scss';
import PreviousSkill from '../PreviousSkill/PreviousSkill';

const SkillsSet = () => {
  const learnings = [
    {
      title: "Competitive Programming",
      short_description:
        "This journey started in 2017 when I discover a interesting fact of participating in a compitition. This helps my to think fast and search for optimized solution under pressure. Think about corner cases and edge cases, Read others code for self-improvement",
      language: "Language: C++",
      learning:
        "Time and space complexity reduction, Choose greedy approach, Check all possible cases",
    },
    {
      title: "Web Development",
      short_description:
        "I actively have started working on web technology focused on Javascript frameworks for full-stack. I started my web development journey back in 2022 and still learning new things everyday. My main focus is to understand the working process of a web application from server to client and how JavaScript engine works, manipulate data.",
      language: "Language: Javascript",
      technology: [
        {
          section: "Front End",
          tech_title: "React, Redux, Next",
        },
        {
          section: "Back End",
          tech_title: "Node, Express",
        },
        {
          section: "Database",
          tech_title: "MySQL, MongoDB",
        },
      ],
      learning:
        "API, Data flow and integration, Server working process, Security, Error handling",
    },
    {
      title: "UI Design",
      short_description: "A preliminary knowledge of create a design",
      tools: "Tools: Figma",
      learning:
        "A standard measurement and sizing to place elements in a web page",
    },
    {
      title: "Data Science",
      tools: "Tools: Google Colab, Jupyter Notebook",
      short_description:
        "I have staring learning data science to understand the data and make a decision based on that. Besides, I have started working on a project to undestand the how Panda library, Numpy, Matplotlib, Seaborn works.",
      language: "Language: Python",
      learning: "Web Scriping, Data Analysis and Cleaning, Data Visualization",
    },
    {
      title: "Project Course",
      short_description:
        " A project of similarity search between text and image frames using vector embeddings and cosine similarity formula where a video will be converted to image frames to extract results among them.",
      language: "Language: Python",
      learning:
        "CLIP model, Voxel51 computer vision tool, Pinecone vector database, Docker",
    },
    {
      title: "Artificial Intelligence",
      short_description:
        "A preliminary knowledge of algorithms to apply on greedy problems and decision making. Additionally, I short introduction with generative AI which is the main interting part of this leaning.",
      language: "Language: Python",
      learning:
        "A process making best decision amoung anormous possible states, optimized approch",
    },
  ];

  console.log(learnings.length)
    return (
      <div className={styles.skillset_section}>
        <PreviousSkill myskill={[...learnings.slice(0,3)]} side={'left'}/>
        <PreviousSkill myskill={[...learnings.slice(3,6)]} side={'right>'}/>
        {/* <h4 style={{color: 'white'}}>elora</h4>
        {learnings.map((learn, idx) => <h4 key={idx}>{learn.title}</h4>)} */}
      </div>
    );
};

export default SkillsSet;
import styles from './SkillsSet.module.scss';
import PreviousSkill from '../PreviousSkill/PreviousSkill';

const SkillsSet = () => {
  const learnings = [
    {
      title: "Competitive Programming",
      short_description:
        "This journey started in 2017 when I discover a interesting fact of participating in a compitition. This helps my to think fast and search for optimized solution under pressure.",
      language: "C++",
      learning: "Time and space complexity reduction",
    },
    {
      title: "Web Development",
      short_description:
        "I actively have started working on web technology focused on Javascript frameworks for full-stack.",
      language: "Javascript",
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
      tools: "Figma",
      learning:
        "A standard measurement and sizing to place elements in a web page",
    },
    {
      title: "Data Science",
      short_description:
        "This journey started in 2017 when I discover a interesting fact of participating in a compitition. This helps my to think fast and search for optimized solution under pressure.",
      language: "C++",
      learning: "Time and space complexity reduction",
    },
    {
      title: "Data Science",
      short_description:
        "This journey started in 2017 when I discover a interesting fact of participating in a compitition. This helps my to think fast and search for optimized solution under pressure.",
      language: "C++",
      learning: "Time and space complexity reduction",
    },
    {
      title: "UI Design",
      short_description: "A preliminary knowledge of create a design",
      tools: "Figma",
      learning:
        "A standard measurement and sizing to place elements in a web page",
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
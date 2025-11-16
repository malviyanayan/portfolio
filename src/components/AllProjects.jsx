import React from "react";
import { Tabs } from "antd";
import "antd/dist/reset.css";
import MyProject from "./MyProject";
import { useSelector } from "react-redux";
import "../css/all_projects.css";

const { TabPane } = Tabs;

const AllProjects = () => {
  const theme = useSelector((state) => state.theme.value); // true = light, false = dark

  const projects = [
    {
      title: "E Learning Platform",
      url: "https://learnify-8pya.onrender.com/",
      image: "projects/learnify.png",
      subtitle: "Full-stack course platform",
      description:
        "This project is a comprehensive e-learning platform that allows students to enroll in courses, track their individual progress, and take notes while learning.",
    },
    {
      title: "DoFocus",
      url: "https://dofocus.netlify.app/",
      image: "projects/dofocus.png",
      tech: {
        frontend: ["React", "Bootstrap"],
        backend: ["Advanced Java"],
        database: [],
        other: "",
      },
      subtitle: "Daily challenge tracker with to-do list and personal notes.",
      description:
        "DoFocus is a productivity-focused tool designed to help users build daily habits and monitor personal progress. It includes a challenge-based tracker system, customizable to-do list, and personal notes section. Built using React and styled with Bootstrap, the app supports local storage and smooth transitions for better usability. Ideal for self-discipline and routine-building enthusiasts looking to stay organized.",
    },
  ];

  return (
    <div className={theme ? "allprojects-light" : "allprojects-dark"}>
  <Tabs
    defaultActiveKey="0"
    tabPosition="top"
    type="line"
    size="large"
    style={{ overflowX: "auto"}}
  >
    {projects.map((project, index) => (
      <TabPane tab={project.title} key={index.toString()}>
        <div style={{ marginTop: "20px" }}> {/* Extra space for images/content */}
          <MyProject project={project} />
        </div>
      </TabPane>
    ))}
  </Tabs>
</div>

  );
};

export default AllProjects;


import AddTask from "../components/Task/TaskAdd";
import TaskList from "../components/Task/TaskList";
import React from "react";
import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Gerenciador de Tarefas</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default HomePage;

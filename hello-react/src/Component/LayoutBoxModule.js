import styles from "./LayoutBoxModule.module.css";

function LayoutBoxModule(props) {
  return (
    <div className={styles.box}>
      <h3 className={styles.title}>{props.title}</h3>
      {props.children}
    </div>
  );
}

export default LayoutBoxModule;

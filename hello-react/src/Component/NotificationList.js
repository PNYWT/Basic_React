import styles from "./NotificationList.module.css";
import styled from "styled-components";

function NotificationList(props) {
  return (
    <div className={styles.boxModule}>
      <h3 className={styles.titleModule}>{props.title}</h3>
      <p>{props.description}</p>
      <p>
        <a>Clsoe Alert Notificatino</a>
      </p>
    </div>
  );
}
export default NotificationList;

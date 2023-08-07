import styles from "./index.module.css";

export const Button = (props) => (
	<button onClick={props.onclick} className={styles.button}>{props.content}</button>
);
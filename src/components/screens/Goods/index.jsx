import styles from "./index.module.css";
import { Button } from "../../base/Button";

const Card = (props) => (
	<div className={styles.item}>
		<div className={styles.image}>
			<img src={props.image} />
			<h3>{props.title}</h3>
		</div>
		<div className={styles.buy}>
			<div className={styles.price}><span>{props.price}</span></div>
			<Button content="Купить" />
		</div>
	</div>
)

export const Goods = (props) => (
	<div className="container">
		<h2>Гробы на заказ</h2>
		<div className={styles.cards}>
			<Card title='Гроб обыкновенный' price='100' image='/grob-1.jpeg' />
			<Card title='Гроб обыкновенный' price='100' image='/grob-1.jpeg' />
			<Card title='Гроб обыкновенный' price='100' image='/grob-1.jpeg' />
		</div>
	</div>
)
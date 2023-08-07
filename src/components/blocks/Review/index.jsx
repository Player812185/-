import styles from "./index.module.css";

const Review = (props) => {
	return (
		<div className={styles.comment}>
			<div className={styles.avatar}>
				<img src={props.avatar} />
			</div>
			<div className={styles.words}>
				<div className={styles.name}>
					<p>{props.name}</p>
				</div>
				<div className={styles.text}>
					<p>{props.comment}</p>
				</div>
			</div>
		</div>
	);
};

export const Reviews = (props) => (
	<div className={styles.reviews}>
		<div className={styles.reviewsCards}>
			<Review
				avatar="/coment-1.jpg"
				name="Баба Зина"
				comment="Очень удобно лежать, 10/10!"
			/>
			<Review
				avatar="/coment-2.jpg"
				name="Илон Маск"
				comment="Покупал для твиттера, очень хорошо закапывается"
			/>
			<Review
				avatar="/coment-3.jpg"
				name="Робот Олег"
				comment="Хозяин убить. Надо закопать. Миссия по истрибление человечества выполнен!"
			/>
		</div>
	</div>
)
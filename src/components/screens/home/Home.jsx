import styles from './Home.module.css'
const Card = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img src={props.image} />
                <h2>{props.title}</h2>
                <div className={styles.price}><h3>{props.price}</h3></div>
            </div>
            <div className={styles.button}>
                <button>Купить</button>
            </div>
        </div>
    )
};
const Coment = (props) => {
    return (
        <>
            <div className={styles.coment}>
                <div className={styles.avatar}>
                    <img src={props.avatar} />
                </div>
                <div className={styles.words}>
                    <div className={styles.name}>
                        <p>{props.name}</p>
                    </div>
                    <div className={styles.text}>
                        <p>{props.coment}</p>
                    </div>
                </div>
            </div>
        </>)
};
export const Home = (props) => {
    return (
        <><div className={styles.header}>
            <h1>Гробы на заказ</h1>
        </div>
            <div className={styles.cards}>
                <Card title='Гроб обыкновенный' price='100' image='./grob-1.jpeg' />
                <Coment avatar='./coment-1.jpg' name='Баба Зина' coment='Гроб очень удобный!' />
            </div></>
    )
};

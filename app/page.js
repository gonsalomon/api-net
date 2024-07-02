import styles from "./page.module.css";
import Header from "./_components/Header";
import Lyrics from "./_components/Lyrics";

export default async function Home() {
  const csv = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQql9v2KI5J1MalrR1YxsNEBWU2twAUY4mA_7afBeG4uFKMVlMExURrOpY-EqACb2ctJk4RwbTxiwVK/pub?output=csv')
    .then((res)=> res.text());

    const letras = csv
    .split('/n')
    .slice(1)
    .map((tema)=>{
      const elem = tema.split(',')
      return elem
    })

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Header/>
        Letras:
        {letras.map((tema)=>{
          return(<p>{tema}</p>)
        })}
      </div>
    </main>
  );
}

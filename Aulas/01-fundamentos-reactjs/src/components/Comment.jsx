import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment () {
return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/MarcosJhonata.png" alt="" />

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                <strong>Marcos Jhonata</strong>
                <time title="11 de janeiro às 20:34" dateTime="2024-01-11 20:34:00">Cerca de 1h atrás</time>
                </div>

                <button title="Deletar comentário">
                    <Trash size={24}/>
                </button>
            </header>
            <p>
              Muito bom Marcos, parabéns!! 👏👏
            </p>
        </div>

        <footer>
           <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
           </button>
        </footer>

        </div>             
    </div>
)

}
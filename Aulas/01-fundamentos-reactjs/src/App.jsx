import { Post } from './components/Post';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
     <div>
      <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
      author="Marcos jhonata"
      content="Treinamento react"
     />
     <Post 
      author="Thais Amanda"
      content="Treinamento react"
     />
      </main>
     </div>
     </div>
  
  )
}



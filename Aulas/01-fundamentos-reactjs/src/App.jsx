import { Post } from './Post';
import { Header } from './components/Header';
import './style.css';
export function App() {
  return (
     <div>
      <Header />
     <Post 
     author="Marcos jhonata"
     content="Treinamento react"
     />
     </div>
  
  )
}



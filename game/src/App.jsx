import Header from './components/Header'
import Play from './pages/play'
import Footer from './components/footer'
import Modal from './components/modal'
import { useState } from 'react'




export default function App() {
  const [score, setScore] = useState(0)
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <>
      <Header score={score} />
      <Play />
      <Footer onOpenModal={() => setModalAberto(true)}/> 
      <Modal isOpen={modalAberto} onClose={() => setModalAberto(false)}/>
    </>
  )
}
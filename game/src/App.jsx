import Header from './components/Header'
import Play from './pages/play'
import Footer from './components/footer'
import Modal from './components/modal'
import { useState } from 'react'
import Game from './pages/game'
import './App.css'

export default function App() {
  const [score, setScore] = useState(0) // Pontuação
  const [modalAberto, setModalAberto] = useState(false)
  const [player1, setPlayer1] = useState(null) // Jogador1
  const [player2, setPlayer2] = useState(null) // Jogador2
  const [resultado, setResultado] = useState(null) // Resultado

  const opcoes = ["pedra", "papel", "tesoura"] // opções de escolha

  function handlePlay(escolhaPlayer1){ // Recebe a escolha do jogador
    const opcoes = ["pedra", "papel", "tesoura"]
    const escolhaDaMaquina = opcoes[Math.floor(Math.random() * 3)]

    setPlayer1(escolhaPlayer1) // Salva a escolha do Player1
    setPlayer2(escolhaDaMaquina) // Salva a escolha do Player2

    if(escolhaPlayer1 == "pedra" && escolhaDaMaquina == "tesoura"){
      setResultado("WIN")
      setScore(prev => prev + 1)
    } else if(escolhaPlayer1 == "tesoura" && escolhaDaMaquina == "papel"){
      setResultado("WIN")
      setScore(prev => prev + 1)
    } else if(escolhaPlayer1 == "papel" && escolhaDaMaquina == "pedra"){
      setResultado("WIN")
      setScore(prev => prev + 1)
    } else if(escolhaPlayer1 == "pedra" && escolhaDaMaquina == "papel"){
      setResultado("LOSE")
    } else if(escolhaPlayer1 == "tesoura" && escolhaDaMaquina == "pedra"){
      setResultado("LOSE")
    } else if(escolhaPlayer1 == "papel" && escolhaDaMaquina == "tesoura"){
      setResultado("LOSE")
    } else{
      setResultado("DRAW")
    }
  }

  return (
    <div className="app-container">
      <Header score={score} />
      <main className="game-main">
        <Game player1={player1} player2={player2} resultado={resultado}/>
        <Play onChoice={handlePlay}/>
      </main>
      <Footer onOpenModal={() => setModalAberto(true)}/>
      <Modal isOpen={modalAberto} onClose={() => setModalAberto(false)}/>
    </div>
  )
}
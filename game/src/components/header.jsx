export default function Header({ score }){
  return (
    <header className="game-header">
      <h1>Pedra, Papel e Tesoura</h1>
      <div className="score-badge">
        <span>Score: </span>
        <span className="score-value">{score}</span>
      </div>
    </header>
  )
}
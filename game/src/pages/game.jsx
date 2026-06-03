export default function Game({player1, player2, resultado}){
  if (!player1 || !player2) return null;

  return (
    <div className="game-result-container">
      <div className="result-display">
        <div className="choice-box">
          <span className="choice-label">Você</span>
          <span className="choice-value">{player1 === 'pedra' ? '✊' : player1 === 'papel' ? '✋' : '✌️'}</span>
        </div>
        <div className="vs-badge">VS</div>
        <div className="choice-box">
          <span className="choice-label">Máquina</span>
          <span className="choice-value">{player2 === 'pedra' ? '✊' : player2 === 'papel' ? '✋' : '✌️'}</span>
        </div>
      </div>
      <div className="final-result">
        <span className={`result-text ${resultado?.toLowerCase()}`}>
          {resultado === 'WIN' ? 'Você Venceu! 🎉' : resultado === 'LOSE' ? 'Você Perdeu! 😢' : 'Empate! 🤝'}
        </span>
      </div>
    </div>
  )
}
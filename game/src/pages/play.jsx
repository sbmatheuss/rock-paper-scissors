export default function Play({onChoice}){
  return(
    <div className="play-container">
      <button className="choice-button" onClick={() => onChoice("pedra")}>
        <span className="emoji">✊</span>
        <span className="label">Pedra</span>
      </button>
      <button className="choice-button" onClick={() => onChoice("papel")}>
        <span className="emoji">✋</span>
        <span className="label">Papel</span>
      </button>
      <button className="choice-button" onClick={() => onChoice("tesoura")}>
        <span className="emoji">✌️</span>
        <span className="label">Tesoura</span>
      </button>
    </div>
  )
}
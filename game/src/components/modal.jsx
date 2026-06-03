export default function Modal({isOpen, onClose}){
  if(!isOpen) return null

  return(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Regras do Jogo</h2>
        <ul>
          <li>✊ Pedra ganha de Tesoura</li>
          <li>✌️ Tesoura ganha do Papel</li>
          <li>✋ Papel ganha da Pedra</li>
          <li>⚠️ Não é permitido jogar Pedra duas vezes seguidas</li>
        </ul>
        <button className="close-button" onClick={onClose}>Fechar</button>
      </div>
    </div>
  )
}
export default function Modal({isOpen, onClose}){
  if(!isOpen) return null

  return(
    <div>
      <button onClick={onClose}>Fechar</button>
      <ul>
        <li>Pedra ganha de Tesoura</li>
        <li>Tesoura ganha do Papel</li>
        <li>Papel ganha da Pedra</li>
        <li>Não é permitido jogar Pedra duas vezes seguidas</li>
      </ul>
    </div>
  )
}
export default function Footer({onOpenModal}){

  return(
    <footer className="game-footer">
      <button className="rules-button" onClick={onOpenModal}>Regras</button>
    </footer>
  )
}
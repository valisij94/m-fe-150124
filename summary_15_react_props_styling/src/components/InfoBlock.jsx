export const DIALOG_TYPES = {
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
}

function InfoBlock( { headerText = 'Default header', contentText = 'Default text', dialogType } ) {

  return (
    <div className={`infoBlock ${dialogType}`}>
      <h3 className="infoBlockHeader">{headerText}</h3>
      <p className="infoBlockContent">{contentText}</p>
      {
        dialogType === DIALOG_TYPES.ERROR ? <p>You cannot dismiss this message!</p> : <button>Okej!</button>
      }
    </div>
  )
}

export default InfoBlock;
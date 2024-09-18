function CardWallet(props) {
    console.log(props, 'props')
  
    return (
      <fieldset>
        <legend>
          {props.title}
        </legend>
  
        <div>
          {props.children}
        </div>
      </fieldset>
    )
  }

  export default CardWallet;
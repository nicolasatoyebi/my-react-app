

const Button = (props) => {
  return (
    <div>
        <button onclick={props.handleEdit} className={props.style}>{props.name} </button>
    </div>
  )
}

export default Button
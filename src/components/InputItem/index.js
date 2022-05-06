import './index.css'

const InputItem = props => {
  const {itemDetails} = props
  const {chara, lengthOfChara} = itemDetails

  return (
    <li>
      <p>
        {chara} : {lengthOfChara}
      </p>
    </li>
  )
}

export default InputItem

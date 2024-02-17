// Компонент отвечает за куры валют и т.д.

interface CurrencyItemType {
  name: string;
  amount: string;
  change: string;
}

const CurrencyItem: React.FC<CurrencyItemType> = ({name, amount, change}) => {
  return (
    <li className="currency-item">
      <div className="currency-name">{name}</div>
      <div className="currency-amount">{amount}</div>
      <div className="currency-change">{change}</div>
    </li>
  )
}

export default CurrencyItem;
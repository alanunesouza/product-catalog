type CartItemRowViewProps = {
  item: {
    id: number
    name: string
    category: string
    quantity: number
    total: number
  }
  onIncrease: (productId: number) => void
  onDecrease: (productId: number) => void
  formatCurrency: (value: number) => string
}

export function CartItemRowView({ item, onIncrease, onDecrease, formatCurrency }: CartItemRowViewProps) {
  return (
    <article className="cart-item">
      <header>
        <div>
          <h3>{item.name}</h3>
          <small>{item.category}</small>
        </div>
        <strong>{formatCurrency(item.total)}</strong>
      </header>

      <footer>
        <div className="quantity-control" aria-label={`Quantidade de ${item.name}`}>
          <button type="button" className="quantity-button" onClick={() => onDecrease(item.id)}>
            -
          </button>
          <span className="quantity-value">{item.quantity}</span>
          <button type="button" className="quantity-button" onClick={() => onIncrease(item.id)}>
            +
          </button>
        </div>

        <button type="button" className="ghost-button" onClick={() => onDecrease(item.id)}>
          Remover
        </button>
      </footer>
    </article>
  )
}

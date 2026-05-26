import type { CartItemRowViewProps } from './cart-item-row.types'

export function CartItemRowView({
  item,
  quantityAriaLabel,
  onIncrease,
  onDecrease,
  onRemove,
  formatCurrency,
}: CartItemRowViewProps) {
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
        <div className="quantity-control" aria-label={quantityAriaLabel}>
          <button type="button" className="quantity-button" onClick={onDecrease}>
            -
          </button>
          <span className="quantity-value">{item.quantity}</span>
          <button type="button" className="quantity-button" onClick={onIncrease}>
            +
          </button>
        </div>

        <button type="button" className="ghost-button" onClick={onRemove}>
          Remover
        </button>
      </footer>
    </article>
  )
}

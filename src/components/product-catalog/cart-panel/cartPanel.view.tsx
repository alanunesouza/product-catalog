import { Fragment } from 'react'

import { CartItemRowView } from '../cart-item-row/cartItemRow.view'

type CartPanelViewProps = {
  items: Array<{
    id: number
    name: string
    category: string
    quantity: number
    total: number
  }>
  subtotal: number
  shipping: number
  total: number
  totalItems: number
  onIncrease: (productId: number) => void
  onDecrease: (productId: number) => void
  onClear: () => void
  formatCurrency: (value: number) => string
}

export function CartPanelView({
  items,
  subtotal,
  shipping,
  total,
  totalItems,
  onIncrease,
  onDecrease,
  onClear,
  formatCurrency,
}: CartPanelViewProps) {
  return (
    <aside className="cart-card">
      <div className="section-heading">
        <h2>Carrinho</h2>
        <span>{totalItems} itens</span>
      </div>

      <p>Frete gratis a partir de {formatCurrency(180)}.</p>

      {items.length === 0 ? (
        <p className="empty-state">Seu carrinho esta vazio.</p>
      ) : (
        <Fragment>
          <div className="cart-list">
            {items.map((item) => (
              <CartItemRowView
                key={item.id}
                item={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                formatCurrency={formatCurrency}
              />
            ))}
          </div>

          <div className="summary-box">
            <div className="summary-line">
              <span>Subtotal</span>
              <strong>{formatCurrency(subtotal)}</strong>
            </div>

            <div className="summary-line">
              <span>Frete</span>
              <strong>{shipping === 0 ? 'Gratis' : formatCurrency(shipping)}</strong>
            </div>

            <div className="summary-line summary-total">
              <span>Total</span>
              <strong>{formatCurrency(total)}</strong>
            </div>

            <button type="button" className="ghost-button" onClick={onClear}>
              Limpar carrinho
            </button>
          </div>
        </Fragment>
      )}
    </aside>
  )
}

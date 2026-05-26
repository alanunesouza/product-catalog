import { Fragment } from 'react'

import { CartItemRowContainer } from '../cart-item-row/cart-item-row.container'
import type { CartPanelViewProps } from './cart-panel.types'

export function CartPanelView({
  items,
  subtotal,
  shippingLabel,
  total,
  itemsLabel,
  freeShippingLabel,
  hasItems,
  onIncrease,
  onDecrease,
  onClear,
  formatCurrency,
}: CartPanelViewProps) {
  return (
    <aside className="cart-card">
      <div className="section-heading">
        <h2>Carrinho</h2>
        <span>{itemsLabel}</span>
      </div>

      <p>{freeShippingLabel}</p>

      {!hasItems ? (
        <p className="empty-state">Seu carrinho esta vazio.</p>
      ) : (
        <Fragment>
          <div className="cart-list">
            {items.map((item) => (
              <CartItemRowContainer
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
              <strong>{shippingLabel}</strong>
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

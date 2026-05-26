import { CartPanelView } from './cart-panel.view'

import type { CartPanelContainerProps } from './cart-panel.types'

export function CartPanelContainer({
  items,
  subtotal,
  shipping,
  total,
  totalItems,
  onIncrease,
  onDecrease,
  onClear,
  formatCurrency,
}: CartPanelContainerProps) {
  const hasItems = items.length > 0
  const shippingLabel = shipping === 0 ? 'Gratis' : formatCurrency(shipping)
  const itemsLabel = `${totalItems} itens`
  const freeShippingLabel = `Frete gratis a partir de ${formatCurrency(180)}.`

  return (
    <CartPanelView
      items={items}
      subtotal={subtotal}
      shippingLabel={shippingLabel}
      total={total}
      itemsLabel={itemsLabel}
      freeShippingLabel={freeShippingLabel}
      hasItems={hasItems}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onClear={onClear}
      formatCurrency={formatCurrency}
    />
  )
}

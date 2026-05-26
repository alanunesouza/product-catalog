import { CartItemRowView } from './cart-item-row.view'

import type { CartItemRowContainerProps } from './cart-item-row.types'

export function CartItemRowContainer({
  item,
  onIncrease,
  onDecrease,
  formatCurrency,
}: CartItemRowContainerProps) {
  const quantityAriaLabel = `Quantidade de ${item.name}`

  const handleIncrease = () => onIncrease(item.id)
  const handleDecrease = () => onDecrease(item.id)
  const handleRemove = () => onDecrease(item.id)

  return (
    <CartItemRowView
      item={item}
      quantityAriaLabel={quantityAriaLabel}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      onRemove={handleRemove}
      formatCurrency={formatCurrency}
    />
  )
}

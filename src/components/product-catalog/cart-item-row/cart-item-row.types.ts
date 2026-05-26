export type CartItemRowItem = {
  id: number
  name: string
  category: string
  quantity: number
  total: number
}

export type CartItemRowViewProps = {
  item: CartItemRowItem
  quantityAriaLabel: string
  onIncrease: () => void
  onDecrease: () => void
  onRemove: () => void
  formatCurrency: (value: number) => string
}

export type CartItemRowContainerProps = {
  item: CartItemRowItem
  onIncrease: (productId: number) => void
  onDecrease: (productId: number) => void
  formatCurrency: (value: number) => string
}

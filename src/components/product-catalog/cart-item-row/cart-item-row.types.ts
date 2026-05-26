export type CartItemRowItem = {
  id: number
  name: string
  category: string
  quantity: number
  total: number
}

export type CartItemRowViewProps = {
  item: CartItemRowItem
  onIncrease: (productId: number) => void
  onDecrease: (productId: number) => void
  formatCurrency: (value: number) => string
}

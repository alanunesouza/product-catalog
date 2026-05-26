import type { CartItemRowItem } from '../cart-item-row/cart-item-row.types'

export type CartPanelViewProps = {
  items: CartItemRowItem[]
  subtotal: number
  shippingLabel: string
  total: number
  itemsLabel: string
  freeShippingLabel: string
  hasItems: boolean
  onIncrease: (productId: number) => void
  onDecrease: (productId: number) => void
  onClear: () => void
  formatCurrency: (value: number) => string
}

export type CartPanelContainerProps = {
  items: CartItemRowItem[]
  subtotal: number
  shipping: number
  total: number
  totalItems: number
  onIncrease: (productId: number) => void
  onDecrease: (productId: number) => void
  onClear: () => void
  formatCurrency: (value: number) => string
}

export type ProductCardItem = {
  id: number
  name: string
  category: string
  description: string
  price: number
  tag: string
}

export type ProductCardViewProps = {
  product: ProductCardItem
  onAddToCart: (productId: number) => void
  formatCurrency: (value: number) => string
}

import type { ProductCardItem } from '../product-card/product-card.types'

export type ProductListViewProps = {
  products: ProductCardItem[]
  onAddToCart: (productId: number) => void
  formatCurrency: (value: number) => string
}

import { ProductListView } from './product-list.view'

import type { ProductListContainerProps } from './product-list.types'

export function ProductListContainer({ products, onAddToCart, formatCurrency }: ProductListContainerProps) {
  const hasProducts = products.length > 0
  const resultsLabel = `${products.length} encontrados`

  return (
    <ProductListView
      products={products}
      onAddToCart={onAddToCart}
      formatCurrency={formatCurrency}
      hasProducts={hasProducts}
      resultsLabel={resultsLabel}
    />
  )
}

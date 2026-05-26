import { ProductCardView } from '../product-card/product-card.view'

import type { ProductListViewProps } from './product-list.types'

export function ProductListView({
  products,
  onAddToCart,
  formatCurrency,
  hasProducts,
  resultsLabel,
}: ProductListViewProps) {
  return (
    <div className="products-card">
      <div className="section-heading">
        <h2>Produtos</h2>
        <span>{resultsLabel}</span>
      </div>

      {!hasProducts ? (
        <p className="empty-state">Nenhum produto encontrado com esse filtro.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCardView
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              formatCurrency={formatCurrency}
            />
          ))}
        </div>
      )}
    </div>
  )
}

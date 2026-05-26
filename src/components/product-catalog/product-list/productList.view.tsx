import { ProductCardView } from '../product-card/productCard.view'

type ProductListViewProps = {
  products: Array<{
    id: number
    name: string
    category: string
    description: string
    price: number
    tag: string
  }>
  onAddToCart: (productId: number) => void
  formatCurrency: (value: number) => string
}

export function ProductListView({ products, onAddToCart, formatCurrency }: ProductListViewProps) {
  return (
    <div className="products-card">
      <div className="section-heading">
        <h2>Produtos</h2>
        <span>{products.length} encontrados</span>
      </div>

      {products.length === 0 ? (
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

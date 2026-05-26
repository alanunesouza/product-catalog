import type { ProductCardViewProps } from './product-card.types'

export function ProductCardView({ product, onAddToCart, formatCurrency }: ProductCardViewProps) {
  return (
    <article className="product-card">
      <div className="product-top">
        <div>
          <small>{product.category}</small>
          <h3>{product.name}</h3>
        </div>
        <span className="product-tag">{product.tag}</span>
      </div>

      <p>{product.description}</p>

      <div className="product-footer">
        <span className="price">{formatCurrency(product.price)}</span>
        <button type="button" className="primary-button" onClick={() => onAddToCart(product.id)}>
          Adicionar
        </button>
      </div>
    </article>
  )
}

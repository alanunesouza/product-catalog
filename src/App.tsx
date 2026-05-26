import { Fragment, useState } from 'react'

type Product = {
  id: number
  name: string
  category: 'Decoracao' | 'Papelaria' | 'Bem-estar' | 'Mesa posta'
  description: string
  price: number
  tag: string
}

type Filters = {
  search: string
  category: string
  sortBy: 'featured' | 'price-asc' | 'price-desc'
}

const products: Product[] = [
  {
    id: 1,
    name: 'Vela de Lavanda',
    category: 'Bem-estar',
    description: 'Aroma suave para um ambiente acolhedor e tranquilo.',
    price: 42.9,
    tag: 'Relaxamento',
  },
  {
    id: 2,
    name: 'Caderno Avela',
    category: 'Papelaria',
    description: 'Miolo pontilhado e capa texturizada para uso diario.',
    price: 34.5,
    tag: 'Organizacao',
  },
  {
    id: 3,
    name: 'Caneca Areia',
    category: 'Mesa posta',
    description: 'Ceramica fosca com formato arredondado e alca ampla.',
    price: 39.9,
    tag: 'Casa',
  },
  {
    id: 4,
    name: 'Almofada Nuvem',
    category: 'Decoracao',
    description: 'Tecido macio em tom pastel para compor sofas e poltronas.',
    price: 68.0,
    tag: 'Conforto',
  },
  {
    id: 5,
    name: 'Kit Marca-texto',
    category: 'Papelaria',
    description: 'Cinco cores delicadas para destacar estudos e planejamentos.',
    price: 27.0,
    tag: 'Estudo',
  },
  {
    id: 6,
    name: 'Bandeja Rosada',
    category: 'Mesa posta',
    description: 'Base leve para servir cafe ou organizar pequenos objetos.',
    price: 56.9,
    tag: 'Receber bem',
  },
]

const css = `
  :root {
    color: #e2e5e7;
    background: #1b1d20;
    font-family: "Avenir Next", "Nunito", "Segoe UI", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background:
      radial-gradient(circle at top left, #30343a 0%, #22262b 42%, #15181c 100%);
  }

  button,
  input,
  select {
    font: inherit;
  }

  .catalog-page {
    min-height: 100vh;
    color: #dde1e4;
  }

  .catalog-shell {
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    gap: 24px;
    padding: 32px;
  }

  .catalog-header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: 80px;
    border-radius: 0 0 12px 12px;
    background: rgba(33, 37, 42, 0.9);
    border: 1px solid #4a4f57;
    box-shadow: 0 14px 30px rgba(7, 5, 9, 0.28);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 16px;
  }

  .catalog-title {
    font-size: 2rem;
    text-align: left;
  }

  .filters-card,
  .products-card,
  .cart-card {
    background: rgba(33, 37, 42, 0.9);
    border: 1px solid #4a4f57;
    border-radius: 28px;
    box-shadow: 0 14px 30px rgba(7, 5, 9, 0.28);
  }


  h1 {
    margin: 0;
    font-size: clamp(2rem, 4vw, 3.4rem);
    line-height: 1.05;
    color: #f1f4f6;
  }

  .filters-card {
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 14px;
  }

  .field {
    display: grid;
    gap: 8px;
  }

  .field label {
    font-size: 14px;
    color: #b4bcc3;
  }

  .field input,
  .field select {
    width: 100%;
    border: 1px solid #515760;
    border-radius: 16px;
    padding: 14px 16px;
    background: #2b2f35;
    color: #e8edf0;
    outline: none;
  }

  .field input:focus,
  .field select:focus {
    border-color: #7b848e;
  }

  .content-grid {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(320px, 0.95fr);
    gap: 24px;
    align-items: start;
  }

  .products-card,
  .cart-card {
    padding: 24px;
  }

  .section-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .section-heading h2,
  .cart-card h2 {
    margin: 0;
    font-size: 1.4rem;
    color: #edf1f4;
  }

  .section-heading span,
  .cart-card p {
    margin: 0;
    color: #aeb5bc;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
  }

  .product-card {
    border: 1px solid #464c53;
    border-radius: 24px;
    padding: 18px;
    background: #292d33;
    display: grid;
    gap: 14px;
  }

  .product-top {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 10px;
  }

  .product-card h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #edf1f4;
  }

  .product-card small,
  .product-card p {
    color: #b5bcc3;
  }

  .product-card p {
    margin: 0;
    line-height: 1.5;
  }

  .product-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 7px 10px;
    border-radius: 999px;
    background: #3b4048;
    color: #d2d8dd;
    font-size: 12px;
    white-space: nowrap;
  }

  .product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .price {
    font-weight: 700;
    font-size: 1.15rem;
    color: #dfe4e8;
  }

  .ghost-button,
  .primary-button,
  .quantity-button {
    border: 1px solid #545a62;
    border-radius: 16px;
    background: #32363d;
    color: #e3e7ea;
    cursor: pointer;
    transition: 0.2s ease;
  }

  .ghost-button:hover,
  .primary-button:hover,
  .quantity-button:hover {
    transform: translateY(-1px);
    border-color: #7b838d;
  }

  .ghost-button {
    padding: 10px 14px;
  }

  .primary-button {
    padding: 12px 16px;
    background: #4d555f;
    border-color: #646d78;
    font-weight: 600;
  }

  .cart-list {
    display: grid;
    gap: 12px;
    margin: 20px 0 0;
  }

  .cart-item {
    border: 1px solid #464c53;
    border-radius: 22px;
    padding: 16px;
    background: #292d33;
    display: grid;
    gap: 12px;
  }

  .cart-item header,
  .cart-item footer,
  .summary-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .cart-item h3 {
    margin: 0;
    font-size: 1rem;
  }

  .quantity-control {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px;
    border-radius: 999px;
    background: #3a3f47;
  }

  .quantity-button {
    width: 32px;
    height: 32px;
    border-radius: 999px;
  }

  .quantity-value {
    min-width: 24px;
    text-align: center;
    color: #e3e7ea;
    font-weight: 600;
  }

  .summary-box {
    margin-top: 20px;
    border-top: 1px solid #464c53;
    padding-top: 18px;
    display: grid;
    gap: 12px;
  }

  .summary-total {
    font-size: 1.1rem;
    font-weight: 700;
    color: #edf1f4;
  }

  .empty-state {
    margin: 0;
    padding: 18px;
    border-radius: 20px;
    background: #292d33;
    border: 1px dashed #5a616a;
    color: #b7bec5;
    text-align: center;
  }

  @media (max-width: 920px) {

    .filters-card,
    .content-grid {
      grid-template-columns: 1fr;
    }
  }
`

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function App() {
  const [search, setSearch] = useState<Filters['search']>('')
  const [category, setCategory] = useState<Filters['category']>('Todos')
  const [sortBy, setSortBy] = useState<Filters['sortBy']>('featured')
  const [cart, setCart] = useState<Record<number, number>>({})

  const categories = ['Todos', ...new Set(products.map((product) => product.category))]

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = `${product.name} ${product.description}`
        .toLowerCase()
        .includes(search.trim().toLowerCase())

      const matchesCategory = category === 'Todos' || product.category === category

      return matchesSearch && matchesCategory
    })
    .sort((first, second) => {
      if (sortBy === 'price-asc') return first.price - second.price
      if (sortBy === 'price-desc') return second.price - first.price
      return first.id - second.id
    })

  const cartItems = products
    .filter((product) => cart[product.id] > 0)
    .map((product) => ({
      ...product,
      quantity: cart[product.id],
      total: product.price * cart[product.id],
    }))

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0)
  const shipping = subtotal === 0 || subtotal >= 180 ? 0 : 14
  const total = subtotal + shipping
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const addToCart = (productId: number) => {
    setCart((currentCart) => ({
      ...currentCart,
      [productId]: (currentCart[productId] ?? 0) + 1,
    }))
  }

  const decreaseQuantity = (productId: number) => {
    setCart((currentCart) => {
      const nextQuantity = (currentCart[productId] ?? 0) - 1

      if (nextQuantity <= 0) {
        const nextCart = { ...currentCart }
        delete nextCart[productId]
        return nextCart
      }

      return {
        ...currentCart,
        [productId]: nextQuantity,
      }
    })
  }

  const increaseQuantity = (productId: number) => {
    setCart((currentCart) => ({
      ...currentCart,
      [productId]: (currentCart[productId] ?? 0) + 1,
    }))
  }

  const clearCart = () => setCart({})

  return (
    <>
      <style>{css}</style>

      <header>
        <title>Catálogo de produtos</title>
      </header>

      <main className="catalog-page">
        <div className="catalog-header">
          <h1 className="catalog-title">Minha loja</h1>
        </div>
        <div className="catalog-shell">
          <section className="filters-card" aria-label="Filtros do catalogo">
            <div className="field">
              <label htmlFor="search">Buscar produto</label>
              <input
                id="search"
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Ex.: vela, caderno, caneca"
              />
            </div>

            <div className="field">
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value as Filters['category'])}
              >
                {categories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="sortBy">Ordenar por</label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value as Filters['sortBy'])}
              >
                <option value="featured">Mais relevantes</option>
                <option value="price-asc">Menor preco</option>
                <option value="price-desc">Maior preco</option>
              </select>
            </div>
          </section>

          <section className="content-grid">
            <div className="products-card">
              <div className="section-heading">
                <h2>Produtos</h2>
                <span>{filteredProducts.length} encontrados</span>
              </div>

              {filteredProducts.length === 0 ? (
                <p className="empty-state">Nenhum produto encontrado com esse filtro.</p>
              ) : (
                <div className="products-grid">
                  {filteredProducts.map((product) => (
                    <article key={product.id} className="product-card">
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
                        <button
                          type="button"
                          className="primary-button"
                          onClick={() => addToCart(product.id)}
                        >
                          Adicionar
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            <aside className="cart-card">
              <div className="section-heading">
                <h2>Carrinho</h2>
                <span>{totalItems} itens</span>
              </div>

              <p>Frete gratis a partir de {formatCurrency(180)}.</p>

              {cartItems.length === 0 ? (
                <p className="empty-state">Seu carrinho esta vazio.</p>
              ) : (
                <Fragment>
                  <div className="cart-list">
                    {cartItems.map((item) => (
                      <article key={item.id} className="cart-item">
                        <header>
                          <div>
                            <h3>{item.name}</h3>
                            <small>{item.category}</small>
                          </div>
                          <strong>{formatCurrency(item.total)}</strong>
                        </header>

                        <footer>
                          <div className="quantity-control" aria-label={`Quantidade de ${item.name}`}>
                            <button
                              type="button"
                              className="quantity-button"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <span className="quantity-value">{item.quantity}</span>
                            <button
                              type="button"
                              className="quantity-button"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            className="ghost-button"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            Remover
                          </button>
                        </footer>
                      </article>
                    ))}
                  </div>

                  <div className="summary-box">
                    <div className="summary-line">
                      <span>Subtotal</span>
                      <strong>{formatCurrency(subtotal)}</strong>
                    </div>

                    <div className="summary-line">
                      <span>Frete</span>
                      <strong>{shipping === 0 ? 'Gratis' : formatCurrency(shipping)}</strong>
                    </div>

                    <div className="summary-line summary-total">
                      <span>Total</span>
                      <strong>{formatCurrency(total)}</strong>
                    </div>

                    <button type="button" className="ghost-button" onClick={clearCart}>
                      Limpar carrinho
                    </button>
                  </div>
                </Fragment>
              )}
            </aside>
          </section>
        </div>
      </main>
    </>
  )
}

export default App

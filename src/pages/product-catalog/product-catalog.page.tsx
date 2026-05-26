import { CartPanelContainer } from '../../components/product-catalog/cart-panel/cart-panel.container'
import { HeaderView } from '../../components/shared/header/header.view'
import { FiltersBarView } from '../../components/product-catalog/filters-bar/filters-bar.view'
import { ProductListContainer } from '../../components/product-catalog/product-list/product-list.container'
import { useProductCatalog } from '../../hooks/product-catalog/use-product-catalog.hook'
import type { ProductCatalogPageProps } from './product-catalog.types'

export function ProductCatalogPage({ title = 'Catálogo de produtos' }: ProductCatalogPageProps) {
  const {
    search,
    category,
    sortBy,
    categories,
    filteredProducts,
    cartItems,
    subtotal,
    shipping,
    total,
    totalItems,
    setSearch,
    setCategory,
    setSortBy,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    formatCurrency,
  } = useProductCatalog()

  return (
    <>
      <header>
        <title>{title}</title>
      </header>

      <main className="catalog-page">
        <HeaderView title={title} />
        <div className="catalog-shell">
          <FiltersBarView
            search={search}
            category={category}
            sortBy={sortBy}
            categories={categories}
            setSearch={setSearch}
            setCategory={setCategory}
            setSortBy={setSortBy}
          />

          <section className="content-grid">
            <ProductListContainer
              products={filteredProducts}
              onAddToCart={addToCart}
              formatCurrency={formatCurrency}
            />

            <CartPanelContainer
              items={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              total={total}
              totalItems={totalItems}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onClear={clearCart}
              formatCurrency={formatCurrency}
            />
          </section>
        </div>
      </main>
    </>
  )
}

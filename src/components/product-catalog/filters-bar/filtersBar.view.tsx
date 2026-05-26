type FiltersBarViewProps = {
  search: string
  category: string
  sortBy: 'featured' | 'price-asc' | 'price-desc'
  categories: string[]
  setSearch: (value: string) => void
  setCategory: (value: string) => void
  setSortBy: (value: 'featured' | 'price-asc' | 'price-desc') => void
}

export function FiltersBarView({
  search,
  category,
  sortBy,
  categories,
  setSearch,
  setCategory,
  setSortBy,
}: FiltersBarViewProps) {
  return (
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
        <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
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
          onChange={(event) => setSortBy(event.target.value as 'featured' | 'price-asc' | 'price-desc')}
        >
          <option value="featured">Mais relevantes</option>
          <option value="price-asc">Menor preco</option>
          <option value="price-desc">Maior preco</option>
        </select>
      </div>
    </section>
  )
}

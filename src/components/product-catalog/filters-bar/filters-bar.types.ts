export type SortByOption = 'featured' | 'price-asc' | 'price-desc'

export type FiltersBarViewProps = {
  search: string
  category: string
  sortBy: SortByOption
  categories: string[]
  setSearch: (value: string) => void
  setCategory: (value: string) => void
  setSortBy: (value: SortByOption) => void
}

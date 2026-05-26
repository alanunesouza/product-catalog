import type { HeaderViewProps } from './header.types'

export function HeaderView({ title }: HeaderViewProps) {
  return (
    <div className="catalog-header">
      <h1 className="catalog-title">{title}</h1>
    </div>
  )
}

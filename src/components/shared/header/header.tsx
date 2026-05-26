export function HeaderView({ title }: { title: string }) {
  return (
    <div className="catalog-header">
      <h1 className="catalog-title">{title}</h1>
    </div>
  )
}

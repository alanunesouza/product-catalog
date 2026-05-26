import { useMemo, useState } from 'react'

import type { SortByOption } from '../../components/product-catalog/filters-bar/filters-bar.types'

type Product = {
  id: number
  name: string
  category: 'Decoracao' | 'Papelaria' | 'Bem-estar' | 'Mesa posta'
  description: string
  price: number
  tag: string
}

type CartItem = Product & {
  quantity: number
  total: number
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

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export function useProductCatalog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [sortBy, setSortBy] = useState<SortByOption>('featured')
  const [cart, setCart] = useState<Record<number, number>>({})

  const categories = useMemo(
    () => ['Todos', ...new Set(products.map((product) => product.category))],
    [],
  )

  const filteredProducts = useMemo(() => {
    return products
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
  }, [search, category, sortBy])

  const cartItems = useMemo<CartItem[]>(() => {
    return products
      .filter((product) => cart[product.id] > 0)
      .map((product) => ({
        ...product,
        quantity: cart[product.id],
        total: product.price * cart[product.id],
      }))
  }, [cart])

  const subtotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.total, 0), [cartItems])
  const shipping = useMemo(() => (subtotal === 0 || subtotal >= 180 ? 0 : 14), [subtotal])
  const total = useMemo(() => subtotal + shipping, [subtotal, shipping])
  const totalItems = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

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

  return {
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
  }
}

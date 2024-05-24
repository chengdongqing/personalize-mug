import ProductPreview from '@/components/ProductPreview/ProductPreview.tsx'
import ProductSku from '@/components/ProductSku/ProductSku.tsx'
import { ActionDispatch, createContext, useReducer } from 'react'
import styles from './App.module.css'

interface ProductProps {
  cup: string;
  background: string;
  dogCount: number;
  skinColor: 'light' | 'dark';
  handGesture: 'holdDrink' | 'victory';
  womanName: string;
  fontColor: string;
  fontFamily: string;
}

type DispatchType = { type: 'SET_VALUE'; payload: Partial<ProductProps> }

const defaultValue: ProductProps = {
  cup:
    'https://cdn.teeinblue.com/users/36/products/40269/6258f7cb94c70_large.webp',
  background:
    'https://cdn.teeinblue.com/users/36/cliparts/95/5eb3825ca6932_large.png',
  dogCount: 1,
  skinColor: 'light',
  handGesture: 'holdDrink',
  womanName: '',
  fontColor: '#A55858',
  fontFamily: 'GochiHand'
}

export const ProductContext = createContext<{
  state: ProductProps,
  dispatch?: ActionDispatch<[action: DispatchType]>
}>({ state: defaultValue })

const reducer = (state: ProductProps, action: DispatchType) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, defaultValue)

  return (
    <div className={styles.container}>
      <ProductContext value={{ state, dispatch }}>
        <ProductPreview />
        <ProductSku />
      </ProductContext>
    </div>
  )
}
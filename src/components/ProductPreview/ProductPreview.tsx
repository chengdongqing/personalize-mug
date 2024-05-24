import { ProductContext } from '@/App.tsx'
import OnePet from '@/components/Artworks/1Pet.tsx'
import TwoPets from '@/components/Artworks/2Pets.tsx'
import ThreePets from '@/components/Artworks/3Pets.tsx'
import useElementSize from '@/hooks/useElementSize.ts'
import { useContext, useRef } from 'react'
import styles from './ProductPreview.module.css'

export default function ProductPreview() {
  const { state } = useContext(ProductContext)!

  const backgroundRef = useRef<HTMLImageElement>(null)
  const backgroundSize = useElementSize(backgroundRef, [state.cup])

  function content() {
    switch (state.dogCount) {
      case 1:
        return <OnePet backgroundWidth={backgroundSize.width} />
      case 2:
        return <TwoPets backgroundWidth={backgroundSize.width} />
      case 3:
        return <ThreePets backgroundWidth={backgroundSize.width} />
    }
  }

  return <div className={styles.product_preview}>
    <img alt={''} src={state.cup} className={styles.img_background} ref={backgroundRef} />
    {content()}
  </div>
}
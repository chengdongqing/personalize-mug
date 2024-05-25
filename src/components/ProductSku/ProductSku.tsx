import { ProductContext } from '@/App.tsx'
import ColorRadio from '@/components/ColorRadio/ColorRadio.tsx'
import FormItem from '@/components/FormItem/FormItem.tsx'
import RadioGroup from '@/components/RadioGroup/RadioGroup.tsx'
import { useContext } from 'react'
import styles from './ProductSku.module.css'

export default function ProductSku() {
  const { state, dispatch } = useContext(ProductContext)

  return (
    <div>
      <div className={styles.title}>Woman & Dogs - Personalized Mug</div>
      <div className={styles.price}>$19.00</div>
      <div className={styles.option_item}>
        <div className={styles.title}>color</div>
        <ColorRadio
          value={state.cup}
          onChange={(value) => {
            dispatch?.({
              type: 'SET_VALUE',
              payload: {
                cup: value
              }
            })
          }}
          options={[
            {
              value:
                'https://cdn.teeinblue.com/users/36/products/40269/6258f7cb94c70_large.webp',
              color: 'rgb(65, 51, 103)'
            },
            {
              value:
                'https://cdn.teeinblue.com/users/36/products/40269/6258f7cd73db4_large.webp',
              color: 'rgb(171, 49, 80)'
            },
            {
              value:
                'https://cdn.teeinblue.com/users/36/products/40269/6258f7ca96565_large.webp',
              color: 'rgb(0, 0, 0)'
            },
            {
              value:
                'https://cdn.teeinblue.com/users/36/products/40269/6258f7cc2b782_large.webp',
              color: 'rgb(48, 154, 195)'
            },
            {
              value:
                'https://cdn.teeinblue.com/users/36/products/40269/6258f7ccd4c5e_large.webp',
              color: 'rgb(213, 178, 190)'
            }
          ]}
        />
      </div>

      <div className={styles.form}>
        <FormItem label="Number of Dogs" required>
          <RadioGroup
            value={state.dogCount}
            onChange={(value) => {
              dispatch?.({
                type: 'SET_VALUE',
                payload: {
                  dogCount: value
                }
              })
            }}
            options={[
              {
                icon: 'https://cdn.teeinblue.com/users/36/images/5ebfb8187cf94_large.jpeg',
                value: 1
              },
              {
                icon: 'https://cdn.teeinblue.com/users/36/images/5ebfb80e0e19b_large.jpeg',
                value: 2
              },
              {
                icon: 'https://cdn.teeinblue.com/users/36/images/5ebfb803eefad_large.jpeg',
                value: 3
              }
            ]}
          />
        </FormItem>
        <FormItem label="Change Background">
          <RadioGroup
            value={state.background}
            onChange={(value) => {
              dispatch?.({
                type: 'SET_VALUE',
                payload: {
                  background: value
                }
              })
            }}
            options={[
              {
                icon: 'https://cdn.teeinblue.com/users/36/cliparts/95/5eb3825ca6932_thumbnail.jpg',
                value:
                  'https://cdn.teeinblue.com/users/36/cliparts/95/5eb3825ca6932_large.png'
              },
              {
                icon: 'https://cdn.teeinblue.com/users/36/cliparts/95/5eb38264da0e2_thumbnail.jpg',
                value:
                  'https://cdn.teeinblue.com/users/36/cliparts/95/5eb38264da0e2_large.png'
              },
              {
                icon: 'https://cdn.teeinblue.com/users/36/cliparts/95/5eb382654206d_thumbnail.jpg',
                value:
                  'https://cdn.teeinblue.com/users/36/cliparts/95/5eb382654206d_large.png'
              }
            ]}
          />
        </FormItem>
        <FormItem label="Skin Color" required>
          <RadioGroup
            value={state.skinColor}
            onChange={(value) => {
              dispatch?.({
                type: 'SET_VALUE',
                payload: {
                  // @ts-ignore
                  skinColor: value
                }
              })
            }}
            options={[
              {
                icon: 'https://cdn.teeinblue.com/users/36/cliparts/78044/609d09c1d727e_thumbnail.jpg',
                value: 'light'
              },
              {
                icon: 'https://cdn.teeinblue.com/users/36/cliparts/78044/609d09bb4966b_thumbnail.jpg',
                value: 'dark'
              }
            ]}
          />
        </FormItem>
        <FormItem v-if="modelValue.dogCount === 1" label="Hand Gesture">
          <RadioGroup
            value={state.handGesture}
            onChange={(value) => {
              dispatch?.({
                type: 'SET_VALUE',
                payload: {
                  // @ts-ignore
                  handGesture: value
                }
              })
            }}
            options={[
              {
                icon: 'https://cdn.teeinblue.com/users/36/cliparts/93/5eb395f408ab3_thumbnail.jpg',
                value: 'holdDrink'
              },
              {
                icon: 'https://cdn.teeinblue.com/users/36/cliparts/93/5eb395f65917c_thumbnail.jpg',
                value: 'victory'
              }
            ]}
          />
        </FormItem>
        <FormItem label="Woman Name" required>
          <input
            value={state.womanName}
            onChange={(e) => {
              dispatch?.({
                type: 'SET_VALUE',
                payload: {
                  womanName: e.target.value
                }
              })
            }}
            maxLength={12}
            placeholder="Type a name"
          />
        </FormItem>
        <FormItem label="Choose Font Family">
          <RadioGroup
            value={state.fontFamily}
            onChange={(value) => {
              dispatch?.({
                type: 'SET_VALUE',
                payload: {
                  fontFamily: value
                }
              })
            }}
            options={[
              {
                icon: 'https://cdn.teeinblue.com/user/36/cliparts/424976/62a1bc28afc3d_thumbnail.jpeg',
                value: 'GochiHand'
              },
              {
                icon: 'https://cdn.teeinblue.com/user/36/cliparts/424976/62a1bc40e40f2_thumbnail.jpeg',
                value: 'BubbleBoop'
              },
              {
                icon: 'https://cdn.teeinblue.com/user/36/cliparts/424976/62a1bc352719a_thumbnail.jpeg',
                value: 'Georgia'
              },
              {
                icon: 'https://cdn.teeinblue.com/user/36/cliparts/424976/62a1bc7eece2d_thumbnail.jpeg',
                value: 'BebasNeue'
              },
              {
                icon: 'https://cdn.teeinblue.com/users/36/cliparts/424976/652cea0f26eca_thumbnail.webp',
                value: 'Chewy'
              },
              {
                icon: 'https://cdn.teeinblue.com/users/36/cliparts/424976/652cea23effb9_thumbnail.webp',
                value: 'Waltograph'
              }
            ]}
          />
        </FormItem>
        <FormItem label="Choose Text Color">
          <input
            value={state.fontColor}
            onChange={(e) => {
              dispatch?.({
                type: 'SET_VALUE',
                payload: {
                  fontColor: e.target.value
                }
              })
            }}
            type="color"
          />
        </FormItem>
      </div>
    </div>
  )
}

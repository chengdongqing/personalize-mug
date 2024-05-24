import { ProductContext } from '@/App.tsx'
import { useContext, useMemo } from 'react'

export default function OnePet(props: { backgroundWidth: number }) {
  const { state } = useContext(ProductContext)

  const handGestureIcon = useMemo(() => {
    if (state.skinColor === 'light') {
      if (state.handGesture === 'holdDrink') {
        return 'https://cdn.teeinblue.com/users/36/cliparts/93/5eb395f408ab3_large.png'
      } else {
        return 'https://cdn.teeinblue.com/users/36/cliparts/93/5eb395f65917c_large.png'
      }
    } else {
      if (state.handGesture === 'holdDrink') {
        return 'https://cdn.teeinblue.com/users/36/image-layers/634533a733f44_large.webp'
      } else {
        return 'https://cdn.teeinblue.com/users/36/cliparts/94/5eb3961817fcc_large.png'
      }
    }
  }, [state.handGesture, state.skinColor])

  return <svg
    className="artwork"
    preserveAspectRatio="xMidYMin slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      transform={`scale(${props.backgroundWidth / 530}) translate(130, 120)`}>
      <image
        href={state.background}
        height="297.57085020242914"
        preserveAspectRatio="none"
        width="228.56091277143906"
        x="64.04122193595877"
        y="10.213470739786528"
      />
      <image
        height="133.10084652189914"
        href="https://cdn.teeinblue.com/users/36/images/5ebb6ed712470_large.png"
        preserveAspectRatio="none"
        width="59.966875230033125"
        x="169.16267942583733"
        y="128.5130658814869"
      />
      {state.handGesture === 'holdDrink' &&
        <image
          x="239.8564593301435"
          height="38.02723592197276"
          href="https://cdn.teeinblue.com/users/36/images/5ebb6fdc22ed4_large.png"
          preserveAspectRatio="none"
          width="24.865660655134338"
          y="161.17684946632312"
        />
      }
      <image
        href={handGestureIcon}
        height="71.18237026131763"
        preserveAspectRatio="none"
        width="35.589804931910194"
        x="229.1295546558704"
        y="158.83879278616118"
      />
      <image
        height="90.68457857931541"
        href="https://cdn.teeinblue.com/users/36/image-layers/634533aa5ed79_large.webp"
        preserveAspectRatio="none"
        width="95.07085020242914"
        x="161.84762605815237"
        y="163.52870813397126"
      />
      <text
        fill={state.fontColor}
        fontFamily={`${state.fontFamily}, sans-serif`}
        dominantBaseline="central"
        fontSize="16.010305483989693px"
        stroke="none"
        textAnchor="middle"
        transform="translate(206.21549503128446 274.3862716231137)"
        x="0"
        y="0"
      >
        {state.womanName || 'lucy'}
      </text>
      <image
        height="92.63341921236656"
        href="https://cdn.teeinblue.com/users/36/cliparts/409/5eb2a346835f0_large.png"
        preserveAspectRatio="none"
        width="92.63341921236656"
        x="156.48417372101582"
        y="124.22064777327935"
      />
      <image
        height="129.20040485829958"
        href="https://cdn.teeinblue.com/users/36/image-layers/634533b248321_large.webp"
        preserveAspectRatio="none"
        width="129.20040485829958"
        x="66.28818549871181"
        y="139.82241442767756"
      />
      <text
        dominantBaseline="central"
        fill="#fff"
        fontFamily='"GochiHand-Regular", sans-serif'
        fontSize="16.010305483989693px"
        stroke="none"
        textAnchor="middle"
        transform="translate(135.4968715495031 276.40964298859035)"
        x="0"
        y="0"
      >
        Hachi
      </text>
    </g>
  </svg>
}
import { ProductContext } from '@/App.tsx'
import { useContext } from 'react'

export default function ThreePets(props: { backgroundWidth: number }) {
  const { state } = useContext(ProductContext)

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
        transform="rotate(0)"
        width="228.56091277143906"
        x="64.04122193595877"
        y="10.213470739786528"
      />
      <image
        height="42.2396025027604"
        href="https://cdn.teeinblue.com/users/36/images/5ea9bfc9766b1.png"
        preserveAspectRatio="none"
        width="35.02944423997055"
        x="81.66359955833639"
        y="227.81284504968713"
      />
      <image
        height="108.17721751932277"
        href="https://cdn.teeinblue.com/users/36/image-layers/6095134f42370_large.png"
        preserveAspectRatio="none"
        width="48.422892896577096"
        x="168.29039381670958"
        y="158.4136915715863"
      />
      <image
        height="69.0264998159735"
        href="https://cdn.teeinblue.com/users/36/images/5ea9bfca4ff8d.png"
        preserveAspectRatio="none"
        width="72.11814501288184"
        x="162.55152741994846"
        y="188.1486934118513"
      />
      <image
        height="72.11814501288184"
        href="https://cdn.teeinblue.com/users/36/cliparts/409/5eb2a346835f0_large.png"
        preserveAspectRatio="none"
        width="72.11814501288184"
        x="157.9057784320942"
        y="159.81597350018401"
      />
      <image
        height="102.51012145748987"
        href="https://cdn.teeinblue.com/users/36/images/5eab9b437f606.png"
        preserveAspectRatio="none"
        width="102.51012145748987"
        x="92.02061096797938"
        y="171.18605079131393"
      />
      <image
        height="79.8444976076555"
        href="https://cdn.teeinblue.com/users/36/images/5eab9b4346c16.png"
        preserveAspectRatio="none"
        width="79.8444976076555"
        x="205.8124769966875"
        y="189.17832167832168"
      />
      <text
        fill={state.fontColor}
        fontFamily={`${state.fontFamily}, sans-serif`}
        dominantBaseline="central"
        fontSize="12.97386823702613px"
        stroke="none"
        textAnchor="middle"
        transform="translate(195.52447552447552 277.85885167464113)"
        x="0"
        y="0"
      >
        {state.womanName || 'lucy'}
      </text>
      <text
        dominantBaseline="central"
        fill="#FFFFFF"
        fontFamily='"GochiHand-Regular", sans-serif'
        fontSize="12.97386823702613px"
        stroke="none"
        textAnchor="middle"
        transform="translate(97.62421788737578 279.36878910563115)"
        x="0"
        y="0"
      >
        Pom
      </text>
      <text
        dominantBaseline="central"
        fill="#FFFFFF"
        fontFamily='"GochiHand-Regular", sans-serif'
        fontSize="12.97386823702613px"
        stroke="none"
        textAnchor="middle"
        transform="translate(146.0553919764446 278.8415531836584)"
        x="0"
        y="0"
      >
        Hachi
      </text>
      <text
        dominantBaseline="central"
        fill="#FFFFFF"
        fontFamily='"GochiHand-Regular", sans-serif'
        fontSize="12.97386823702613px"
        stroke="none"
        textAnchor="middle"
        transform="translate(250.62753036437246 277.81192491718804)"
        x="0"
        y="0"
      >
        Max
      </text>
    </g>
  </svg>
}
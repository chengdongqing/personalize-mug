<script lang="ts" setup>
import { CupProps } from '@/models'

defineOptions({
  name: 'TwoPet'
})

defineProps<
  CupProps & {
    mockupImageSize: {
      width: number
      height: number
    }
  }
>()
</script>

<template>
  <svg
    class="mockup-artwork"
    preserveAspectRatio="xMidYMin slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g :transform="`scale(${mockupImageSize.width / 530}) translate(130, 120)`">
      <image
        :href="background"
        height="297.57085020242914"
        preserveAspectRatio="none"
        transform="rotate(0)"
        width="228.56091277143906"
        x="64.04122193595877"
        y="10.213470739786528"
      />
      <image
        height="116.70132499079865"
        href="https://cdn.teeinblue.com/users/36/image-layers/6095123815204_large.png"
        preserveAspectRatio="none"
        width="52.72083179977917"
        x="155.79683474420315"
        y="150.8143172616857"
      />
      <image
        height="77.79904306220094"
        href="https://cdn.teeinblue.com/users/36/images/5ea9bfca4ff8d.png"
        preserveAspectRatio="none"
        transform="rotate(0)"
        width="81.38479941111518"
        x="148.90136179609863"
        y="182.89289657710708"
      />
      <text
        :fill="fontColor"
        :font-family="`${fontFamily}, sans-serif`"
        dominant-baseline="central"
        font-size="12.97386823702613px"
        stroke="none"
        text-anchor="middle"
        transform="translate(184.22064777327932 276.8513065881487)"
        x="0"
        y="0"
      >
        {{ womanName || 'lucy' }}
      </text>
      <image
        height="81.88995215311004"
        href="https://cdn.teeinblue.com/users/36/cliparts/409/5eb2a346835f0_large.png"
        preserveAspectRatio="none"
        width="81.88995215311004"
        x="143.27567169672432"
        y="150.82811924917186"
      />
      <image
        height="84.45712182554287"
        href="https://cdn.teeinblue.com/users/36/images/5eab9b43c62e7.png"
        preserveAspectRatio="none"
        width="84.45712182554287"
        x="203.15973500184026"
        y="181.5623849834376"
      />
      <image
        height="86.49981597350018"
        href="https://cdn.teeinblue.com/users/36/images/5f648228552d9_large.png"
        preserveAspectRatio="none"
        width="86.49981597350018"
        x="79.80585204269414"
        y="181.5623849834376"
      />
      <text
        dominant-baseline="central"
        fill="#FFFFFF"
        font-family='"GochiHand-Regular", sans-serif'
        font-size="12.97386823702613px"
        stroke="none"
        text-anchor="middle"
        transform="translate(115.63857195436142 277.33161575266837)"
        x="0"
        y="0"
      >
        Lulu
      </text>
      <text
        dominant-baseline="central"
        fill="#FFFFFF"
        font-family='"GochiHand-Regular", sans-serif'
        font-size="12.97386823702613px"
        stroke="none"
        text-anchor="middle"
        transform="translate(247.17703349282297 276.80714022819285)"
        x="0"
        y="0"
      >
        Max
      </text>
    </g>
  </svg>
</template>

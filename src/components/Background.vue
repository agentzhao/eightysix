<template>
  <div class="absolute -z-1">
    <div class="relative">
      <!-- diamonds -->
      <svg
        v-for="(suitStyle, i) in suitStyles.slice(0, 5)"
        :key="i"
        :style="suitStyle"
        viewBox="0 0 512 512"
        enable-background="new 0 0 512 512"
        xml:space="preserve"
      >
        <path
          opacity="0.1"
          fill="Red"
          d="M248.07,502.699L86.126,261.32c-2.159-3.218-2.159-7.422,0-10.64L248.07,9.301
	c3.783-5.639,12.077-5.639,15.859,0L425.874,250.68c2.159,3.218,2.159,7.422,0,10.64L263.93,502.699
	C260.147,508.338,251.853,508.338,248.07,502.699z"
        />
      </svg>

      <!-- clubs -->
      <svg
        v-for="(suitStyle, i) in suitStyles.slice(6, 10)"
        :key="i"
        :style="suitStyle"
        viewBox="0 0 1000 1000"
        enable-background="new 0 0 1000 1000"
        xml:space="preserve"
      >
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
          <path
            opacity="0.1"
            fill="Black"
            d="M4734.7,5008c-1087.3-116.8-1952.6-970.6-2067.5-2044.5c-63.2-585.8,193.3-1131.4,991.6-2113.4l63.2-76.6l-197.2,91.9c-430.7,204.8-683.4,260.4-1154.3,258.4c-308.2-1.9-363.7-5.7-530.3-51.7C1187.5,897.9,645.7,444.2,387.3-143.5c-457.5-1045.2-21.1-2245.5,1005-2764.3c323.5-162.7,635.6-235.5,1016.5-231.6c666.2,3.8,1340,287.1,1866.5,783c82.3,78.5,134,116.8,128.3,93.8c-7.7-21-68.9-227.8-135.9-459.4c-266.1-903.6-560.9-1684.6-744.7-1977.5l-51.7-80.4h1533.4h1531.5l-36.4,53.6c-189.5,266.1-532.2,1169.7-815.5,2153.6l-103.4,359.9l143.6-135.9c524.5-499.6,1204.1-786.8,1872.2-790.6c279.5-1.9,459.4,24.9,700.6,103.3c758.1,245,1315.1,869.1,1464.5,1636.8c44,224,42.1,595.4-1.9,802.1c-93.8,446-266.1,763.8-583.9,1083.5c-291,294.8-606.8,478.6-1010.8,585.8c-164.6,44-224,49.8-530.3,51.7c-470.9,1.9-731.3-55.5-1154.3-256.5c-166.6-78.5-191.4-88.1-162.7-49.8c19.2,24.9,105.3,130.2,189.5,237.4c497.7,614.5,773.4,1127.5,830.8,1552.5c42.1,315.9-51.7,796.4-225.9,1140.9c-214.4,428.8-654.7,848-1098.8,1051C5628.7,4973.5,5150.1,5052,4734.7,5008z"
          />
        </g>
      </svg>

      <!-- hearts -->
      <svg
        v-for="(suitStyle, i) in suitStyles.slice(11, 15)"
        :key="i"
        :style="suitStyle"
        viewBox="0 0 100 100"
        xml:space="preserve"
      >
        <path
          opacity="0.1"
          fill="Red"
          class="text-white"
          d="M 10,30
             A 20,20 0,0,1 50,30
             A 20,20 0,0,1 90,30
             Q 90,60 50,90
             Q 10,60 10,30 z"
        />
      </svg>

      <!-- spades -->
      <svg
        v-for="(suitStyle, i) in suitStyles.slice(16, 20)"
        :key="i"
        :style="suitStyle"
        viewBox="0 0 128 128"
        xml:space="preserve"
      >
        <path
          opacity="0.1"
          fill="Black"
          d="M65.23,2.46c-0.77-0.43-1.71-0.43-2.48,0c-2.3,1.3-56.32,32.12-56.32,69.56 c0,16.59,13.49,30.08,30.07,30.08c7.37,0,14.15-2.69,19.41-7.14c-2.78,16.65-8.45,26.99-8.52,27.12c-0.44,0.79-0.43,1.74,0.02,2.52 c0.45,0.77,1.28,1.24,2.18,1.24h28.82c0.89,0,1.72-0.47,2.18-1.24c0.45-0.78,0.46-1.73,0.03-2.52c-0.08-0.13-5.74-10.48-8.53-27.13 c5.26,4.45,12.04,7.14,19.41,7.14c16.58,0,30.07-13.49,30.07-30.08C121.57,34.58,67.54,3.76,65.23,2.46z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

const suitStyles: CSSProperties[] = [];
// let suitStyles: {
//   position: string;
//   animationDuration: string;
//   animationDelay: string;
//   width: string;
//   height: string;
//   top: string;
// }[] = [];
const numSuits = 20;
const windowHeight = window.innerHeight * 0.8;

for (let i = 0; i < numSuits; i++) {
  let size = 20 + Math.random() * 70 + "px";
  let windowTop = Math.random() * windowHeight * 1.2 + "px";
  let duration = 10 + Math.random() * 20 + "s";
  let delay = Math.random() * 30 + "s";
  suitStyles.push({
    position: "absolute",
    animationDuration: duration,
    animationDelay: delay,
    width: size,
    height: size,
    top: windowTop,
  });
}
</script>

<style scoped>
svg {
  left: -80px;
  animation: slide-right 5s linear infinite;
}
@keyframes slide-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(100vw + 80px));
  }
}
</style>

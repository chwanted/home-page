<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "@/assets/images/customLocation.png";
import map1 from "@/assets/images/map/map1.jpg";
import map2 from "@/assets/images/map/map2.jpg";
import map3 from "@/assets/images/map/map3.jpg";
import map4 from "@/assets/images/map/map4.jpg";
import map5 from "@/assets/images/map/map5.jpg";

const caseLocation = [
  { title: "中德·舜山府", location: [28.596052, 121.361618], src: map1 },
  { title: "尚府壹号", location: [38.51626, 114.99025], src: map2 },
  { title: "尚府壹号", location: [38.534584, 114.987683], src: map3 },
  { title: "", location: [43.834709, 87.627121], src: map4 },
  {
    title: "万科·都会未来城",
    location: [43.829368048828734, 87.51089927116392],
  },
  { title: "万科公园5#", location: [43.964432, 87.628571] },
  { title: "中海莹湖苑", location: [38.907326, 117.355766] },
  { title: "华凌二手车市场", location: [43.835033, 87.606171] },
  { title: "万科·天山府l/B", location: [43.79547, 87.63356] },
  { title: "万科·朗润园", location: [43.89949, 87.633186] },
  { title: "龙湖·御湖镜", location: [24.88946, 118.613], src: map5 },
];

onMounted(() => {
  const map = L.map("map", {
    // 中心位置
    center: [33.39189, 104.92667],
    // 缩放等级
    zoom: 4,
    // 版权控件
    attributionControl: false,
    // 缩放控件
    zoomControl: true,
  });
  L.tileLayer(
    "https://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}"
  ).addTo(map);
  let customIcon = L.icon({
    iconUrl,
    iconSize: 25,
    iconAnchor: 12.5,
  });
  caseLocation.forEach((item) => {
    L.marker(item.location, { icon: customIcon })
      .addTo(map)
      .bindPopup(
        item.src
          ? `<div class="popup-content"><img style="width:100%" src="${item.src}"/><div class="marginTop:10px;">${item.title}</div></div>`
          : item.title || "",
        {
          closeButton: false,
        }
      )
      .openPopup();
  });
});
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 500px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
}
</style>

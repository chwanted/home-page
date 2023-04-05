<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const address = {
  location: [29.573694, 106.533893],
  road: "公司地址：重庆市江北区观音桥步行街10号天和里购物中心",
};
onMounted(() => {
  const map = L.map("map", {
    // 中心位置
    center: [29.58, 106.533893],
    // 缩放等级
    zoom: 14,
    // 版权控件
    attributionControl: false,
    // 缩放控件
    zoomControl: false,
    // dragging: false,
    closePopupOnClick: false,
  });
  L.tileLayer(
    "https://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}"
  ).addTo(map);
  L.marker(address.location)
    .addTo(map)
    .bindPopup(`<div style="font-size:16px;">${address.road}</div>`, {
      closeButton: false,
    })
    .openPopup();
});
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 400px;
  @media screen and (max-width: 768px) {
    height: 800px;
  }
}
</style>

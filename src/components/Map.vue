<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// todo 可放项目图片
const caseLocation = [
  { title: "天津项目", location: [39.12, 117.2] },
  { title: "保定项目", location: [38.87, 115.4] },
  { title: "衡水项目", location: [37.76, 115.73] },
  { title: "淄博项目", location: [36.88, 118.09] },
  { title: "重庆项目", location: [29.35, 106.33] },
];

onMounted(() => {
  const map = L.map("map", {
    // 中心位置
    center: [29.35, 106.33],
    // 缩放等级
    zoom: 5,
    // 版权控件
    attributionControl: false,
    // 缩放控件
    zoomControl: false,
  });
  L.tileLayer(
    "https://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}"
  ).addTo(map);

  // todo 可修改弹窗样式
  caseLocation.forEach((item) => {
    L.marker(item.location)
      .addTo(map)
      .bindPopup(item.title, {
        closeButton: false,
      })
      .openPopup();
  });
});
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 700px;
}
</style>

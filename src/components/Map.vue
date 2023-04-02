<!--
@author huangyun
@date 2022-04-02
来源为: https://www.cnblogs.com/foxing/p/15714191.html
-->
<template>
  <div class="mapBox">
    <!-- 地图容器 -->
    <div id="map"></div>
  </div>
</template>

<script>
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export default {
  name: 'LeafletMap',
  data() {
    return {
      map: null,
      icon: null
    }
  },
  mounted() {
    // 地图初始化
    this.initMap()
  },
  methods: {
    // 使用id为map的div容器初始化地图，同时指定地图的中心点和缩放级别
    initMap() {
      let map = L.map("map", {
        // 5.3403e+07px, 2.77776e+07px
        // center: [24.485666, 118.095498], // 中心位置
        center: [29.35, 106.33], // 中心位置
        zoom: 12, // 缩放等级
        attributionControl: true, // 版权控件
        zoomControl: true //缩放控件
      });
      // 写不来了 宝~
      let myIcon = L.icon({
        iconUrl: 'my-icon.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: 'src/assets/images/location.png',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
      });
      this.icon = myIcon; // data上需要挂载

      this.map = map; // data上需要挂载
      console.log(map)

      // 加载底图
      L.tileLayer(
          "https://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}"
      ).addTo(map)

      // 加载定位图标
      const longitude = 29.32132 // 经度
      const latitude = 106.33 // 纬度
      L.marker([longitude, latitude], {icon: myIcon}).addTo(map);

    }
  }
}
</script>
<style scoped>
#map {
  /*width: 800px;*/
  /*height: 500px;*/
  /*margin: 50px auto;*/
  position: relative;
  top: 341px;
  left: 0;
  width: 100%;
  height: 700px;
  z-index: 0;
}
</style>
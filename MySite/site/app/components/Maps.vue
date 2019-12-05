<template>
    <div id="maps" class="maps">
        <h2>Карта</h2>
        <yandex-map
                :settings="settings"
                :coords="[55.431177, 37.544737]"
                zoom="13"
                style="display: block; width: 100%; height: 450px;"
                :cluster-options="{1: {clusterDisableClickZoom: true}}"
                :behaviors="['drag', 'scrollZoom', 'dblClickZoom']"
                :controls="['trafficControl', 'fullscreenControl', 'geolocationControl', 'rulerControl', 'typeSelector', 'zoomControl']"
                map-type="map"
                @map-was-initialized="initHandler"
                scroll-zoom="false"
        >

        <ymap-marker
                marker-type="placemark"
                :coords="[55.423749, 37.539149]"
                :balloon="{body: 'CMD - Центр Молекулярной Диагностики. г. Подольск, ул. Свердлова, д. 21 Телефон (4967) 699-215'}"
                :icon="{color: 'lightblue'}"
                cluster-name="1"
                
        ></ymap-marker>

        <ymap-marker
                marker-type="placemark"
                :coords="[55.425486, 37.497333]"
                :balloon="{body: 'CMD - Центр Молекулярной Диагностики. г. Подольск, ул. Ленинградская д. 11 пом. 6. Телефон (4967) 40-29-33'}"
                :icon="{color: 'blue'}"
                cluster-name="1"
        ></ymap-marker>

        </yandex-map>
    </div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'

    const settings = {
        apiKey: '',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
    };
    
    export default {
        name: "Maps",
        data() {
            return {
                
            }
        },
        components: {
            yandexMap,
            ymapMarker
        }
    }
</script>

<style scoped>
    .maps {
        text-align: center;
    }
    h2 {
        font-family: 'HelvetiThin';
        font-weight: 100;
        font-size: 42px;
        line-height: 40px;
        margin: 10px 0 40px 0;
        color: inherit;
        text-rendering: optimizelegibility;
    }
</style>
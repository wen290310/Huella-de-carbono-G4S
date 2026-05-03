var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_HUELLADECARBONOG4S_1 = new ol.format.GeoJSON();
var features_HUELLADECARBONOG4S_1 = format_HUELLADECARBONOG4S_1.readFeatures(json_HUELLADECARBONOG4S_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HUELLADECARBONOG4S_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUELLADECARBONOG4S_1.addFeatures(features_HUELLADECARBONOG4S_1);
var lyr_HUELLADECARBONOG4S_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HUELLADECARBONOG4S_1, 
                style: style_HUELLADECARBONOG4S_1,
                popuplayertitle: 'HUELLA DE CARBONO G4S',
                interactive: true,
    title: 'HUELLA DE CARBONO G4S<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_0.png" /> Barranquilla<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_1.png" /> Bucaramanga<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_2.png" /> Cali<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_3.png" /> Cartagena<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_4.png" /> Chia<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_5.png" /> Cordoba<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_6.png" /> ecotower<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_7.png" /> Ibague<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_8.png" /> Manizales<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_9.png" /> Medellin<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_10.png" /> Pereira<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_11.png" /> san cayetano<br />\
    <img src="styles/legend/HUELLADECARBONOG4S_1_12.png" /> <br />' });
var format_MGN_ADM_DPTO_POLITICO_2 = new ol.format.GeoJSON();
var features_MGN_ADM_DPTO_POLITICO_2 = format_MGN_ADM_DPTO_POLITICO_2.readFeatures(json_MGN_ADM_DPTO_POLITICO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MGN_ADM_DPTO_POLITICO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MGN_ADM_DPTO_POLITICO_2.addFeatures(features_MGN_ADM_DPTO_POLITICO_2);
var lyr_MGN_ADM_DPTO_POLITICO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MGN_ADM_DPTO_POLITICO_2, 
                style: style_MGN_ADM_DPTO_POLITICO_2,
                popuplayertitle: 'MGN_ADM_DPTO_POLITICO',
                interactive: true,
                title: '<img src="styles/legend/MGN_ADM_DPTO_POLITICO_2.png" /> MGN_ADM_DPTO_POLITICO'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_HUELLADECARBONOG4S_1.setVisible(true);lyr_MGN_ADM_DPTO_POLITICO_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_HUELLADECARBONOG4S_1,lyr_MGN_ADM_DPTO_POLITICO_2];
lyr_HUELLADECARBONOG4S_1.set('fieldAliases', {'REGIONAL': 'REGIONAL', 'ALCANCE 1': 'ALCANCE 1', 'ALCANCE 2': 'ALCANCE 2', 'PAPEL': 'PAPEL', 'AGUA': 'AGUA', 'VUELOS': 'VUELOS', 'ALCANCE 3': 'ALCANCE 3', 'TOTAL 2025': 'TOTAL 2025', 'Alcance _1': 'Alcance _1', 'Alcance _2': 'Alcance _2', 'Papel_1': 'Papel_1', 'Agua_1': 'Agua_1', 'Vuelos_1': 'Vuelos_1', 'Alcance _3': 'Alcance _3', 'TOTAL 2024': 'TOTAL 2024', });
lyr_MGN_ADM_DPTO_POLITICO_2.set('fieldAliases', {'dpto_ccdgo': 'dpto_ccdgo', 'dpto_cnmbr': 'dpto_cnmbr', 'dpto_narea': 'dpto_narea', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_HUELLADECARBONOG4S_1.set('fieldImages', {'REGIONAL': 'TextEdit', 'ALCANCE 1': 'TextEdit', 'ALCANCE 2': 'TextEdit', 'PAPEL': 'TextEdit', 'AGUA': 'TextEdit', 'VUELOS': 'TextEdit', 'ALCANCE 3': 'TextEdit', 'TOTAL 2025': 'TextEdit', 'Alcance _1': 'TextEdit', 'Alcance _2': 'TextEdit', 'Papel_1': 'TextEdit', 'Agua_1': 'TextEdit', 'Vuelos_1': 'TextEdit', 'Alcance _3': 'TextEdit', 'TOTAL 2024': 'TextEdit', });
lyr_MGN_ADM_DPTO_POLITICO_2.set('fieldImages', {'dpto_ccdgo': 'TextEdit', 'dpto_cnmbr': 'TextEdit', 'dpto_narea': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_HUELLADECARBONOG4S_1.set('fieldLabels', {'REGIONAL': 'inline label - always visible', 'ALCANCE 1': 'inline label - always visible', 'ALCANCE 2': 'inline label - always visible', 'PAPEL': 'inline label - always visible', 'AGUA': 'inline label - always visible', 'VUELOS': 'inline label - always visible', 'ALCANCE 3': 'inline label - always visible', 'TOTAL 2025': 'inline label - always visible', 'Alcance _1': 'inline label - always visible', 'Alcance _2': 'inline label - always visible', 'Papel_1': 'inline label - always visible', 'Agua_1': 'inline label - always visible', 'Vuelos_1': 'inline label - always visible', 'Alcance _3': 'inline label - always visible', 'TOTAL 2024': 'inline label - always visible', });
lyr_MGN_ADM_DPTO_POLITICO_2.set('fieldLabels', {'dpto_ccdgo': 'no label', 'dpto_cnmbr': 'inline label - always visible', 'dpto_narea': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_MGN_ADM_DPTO_POLITICO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
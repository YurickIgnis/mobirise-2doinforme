document.addEventListener("DOMContentLoaded", function(event) {
    build_charts_horizontal(document.getElementById("bar-chart"), 'bar', grafica_1, datos_grafica_1,color_grafica1);
    build_charts_bar_multiple_labels(document.getElementById("bar-chart2"), grafica_2, label_g2_1, label_g2_2, datos_grafica_2, datos_grafica_2_1, 'y', color_grafica2_1, color_grafica2_2);
    build_charts_horizontal(document.getElementById("bar-chart3"), 'bar',grafica_3, datos_graficos_3, color_grafica3,'Porcentaje de asistentes a los foros regionales por municipio');
    build_chart_pastel(document.getElementById("bar-chart4"), grafica_4, datos_graficos_4, color_grafica4);
    build_charts_horizontal(document.getElementById("bar-chart5"), 'bar', grafica_5, datos_grafica_5, color_grafica5);
    build_chart_pastel(document.getElementById("bar-chart6"), grafica_6, datos_grafica_6, color_grafica6);
    build_charts_horizontal(document.getElementById("bar-chart7"), 'bar', grafica_7, datos_grafica_7, color_grafica7, "Número de Encuestas");
    build_charts_bar_multiple_labels(document.getElementById("bar-chart8"), grafica_8, label_g8_1, label_g8_2, datos_grafica_8, datos_grafica_8_1, 'x', color_grafica8_1, color_grafica8_2);
    build_charts_bar_multiple_labels(document.getElementById("bar-chart9"), grafica_9, label_g9_1, label_g9_2, datos_grafica_9, datos_grafica_9_1, 'y',color_grafica9_1, color_grafica9_2);
    build_charts_horizontal(document.getElementById("bar-chart10"), 'bar', grafica_10, datos_grafica_10, color_grafica10, "Actividades culturales realizadas 2009-2015/2015-2021");
    build_charts_bar_multiple_labels(document.getElementById("bar-chart11"), grafica_11, label_g11_1, label_g11_2, datos_grafica_11, datos_grafica_11_1, 'y', color_grafica11_1, color_grafica11_2);
    build_chart_points(document.getElementById("bar-chart12"),grafica_12,datos_grafica_12,datos_grafica_12_1,color_grafica12_1,color_grafica12_2,etiqueta_grafica12_1, etiqueta_grafica12_2);
    build_chart_points(document.getElementById("bar-chart13"), grafica_13, datos_grafica_13, datos_grafica_13_1, color_grafica13_1, color_grafica13_2, etiqueta_grafica13_1, etiqueta_grafica13_2)
    build_charts_horizontal(document.getElementById("bar-chart14"),'bar', grafica_14, datos_grafica_14, color_grafica14, "Participación en porcentaje del Producto Interno Bruto (PIB)del Turismo en los municipios de San Luis Potosí, 2019")
    build_charts_bar_multiple_labels(document.getElementById("bar-chart15"), grafica_15, label_g15_1, label_g15_2, datos_grafica_15, datos_grafica_15_1, 'y', color_grafica15_1, color_grafica15_2);
    build_chart_pastel(document.getElementById("bar-chart16"), grafica_16, datos_graficos_16, color_grafica16);
    build_charts_horizontal(document.getElementById("bar-chart17"),'bar', grafica_17, datos_grafica_17, color_grafica17, "Porcentaje de viviendas que tienen acceso al agua diariamente por Entidad Federativa.")
    build_charts_bar_multiple_labels(document.getElementById("bar-chart18"), grafica_18, label_g18_1, label_g18_2, datos_grafica_18, datos_grafica_18_1, 'y', color_grafica18_1, color_grafica18_2);
    build_charts_horizontal(document.getElementById("bar-chart19"),'bar',grafica_19, datos_grafica_19, color_grafica19,"Gasto federalizado 2010-2022","x");
    build_charts_horizontal(document.getElementById("bar-chart20"),'bar',grafica_20, datos_grafica_20, color_grafica20,"Histórico de ingresos propios","x");
    build_charts_bar_4_labels(document.getElementById("bar-chart21"), grafica_21, label_g21_1, label_g21_2, datos_grafica_21, datos_grafica_21_1, 'x', color_grafica21_1, color_grafica21_2)
    build_charts_horizontal(document.getElementById("bar-chart23"),'bar',grafica_23, datos_grafica_23, color_grafica23,"Población usuaria de internet 2015-2020");
    build_charts_bar_multiple_labels(document.getElementById("bar-chart24"), grafica_24, label_g24_1, label_g24_2, datos_grafica_24, datos_grafica_24_1, 'y', color_grafica24_1, color_grafica24_2);

});

const build_charts_horizontal = (id_canvas, tipo_grafica, etiquetas, datos, color,titulo = '', rotacion='y') => {
    try{
        new Chart(id_canvas, {
            // plugins: [ChartDataLabels],
            type: tipo_grafica,
            data: {
                labels: etiquetas,
                datasets: [
                    {
                        label: titulo,
                        backgroundColor: color,
                        data: datos
                    }
                ]
            },
            options: {
                indexAxis: rotacion,
                legend: { display: false },
                title: { display: true, text: titulo },
                plugins: {
                    // datalabels: {anchor: "center", formatter: (dato) => dato, color: "white", font:{family: 'arial',size: "15",weight: "bold",}},
                    legend:{labels:{font:{family:'Montserrat'}}}
                }
            }
        });
    }catch{
        console.error("Ocurrio un error");
    }
}

const build_charts_bar_multiple_labels = (id_canvas, etiquetas, label_1, label_2, datos1,datos2, rotation, color1, color2) => {
    try{
        new Chart(id_canvas, {
            // plugins: [ChartDataLabels],
            type: 'bar',
            data: {
            labels: etiquetas,
            datasets: [
                {
                    label: label_1,
                    backgroundColor: color1,
                    borderColor: "#3e95cd",
                    data: datos1
                },
                {
                    label: label_2,
                    backgroundColor: color2,
                    borderColor: "#3e95cd",
                    data: datos2
                }
            ]
            },
            options: {
                legend: { display: false },
                indexAxis: rotation,
                plugins: {
                    // datalabels: {anchor: "center", formatter: (dato) => dato, color: "white", font:{family: 'arial',size: "15",weight: "bold",}},
                    legend:{labels:{font:{family:'Montserrat'}}}
                }
            }
        });
    }catch{
        console.error("Ocurrio un error");
    }
}


const build_chart_pastel = (id_canvas, etiquetas, datos, colores) => {
    try{
        new Chart(id_canvas, {
            plugins: [ChartDataLabels],
            type: 'pie',
            data: {
              labels: etiquetas,
              datasets: [{
                label: "",
                backgroundColor: colores,
                data: datos
              }]
            },
            options: {
              title: { display: false, text: '' },
              plugins: {
                  datalabels: {anchor: "center", formatter: (dato) => dato + "%", color: "white", font:{family: 'arial',size: "15",weight: "bold",}},
                  legend:{labels:{font:{family:'Montserrat'}}},
                  tooltip: {
                    callbacks:{
                    label:(context) => context.label + ': ' + context.formattedValue + '%'
                    }
                    
                    }
                }
            }
        });
    }catch{
        console.error("Ocurrio un error");
    }
}

const build_chart_points = (id_canvas,etiquetas,datos1,datos2,color1,color2, etiqueta1, etiqueta2) => {
    try{
        new Chart(id_canvas, {
            type: 'line',
            data: {
                labels: etiquetas,
                datasets: [
                    {
                        label: etiqueta1,
                        data: datos1,
                        borderColor: "#000000",
                        backgroundColor: color1,
                        fill: false,
                        pointStyle: 'circle',
                        pointRadius: 6,
                    },
                    {
                        label: etiqueta2,
                        data: datos2,
                        borderColor: "#000000",
                        backgroundColor: color2,
                        fill: false,
                        pointStyle: 'circle',
                        pointRadius: 6,
                    }
                ]
            }
        });
    }catch{
        console.error("Ocurrio un error");
    }
}

const build_charts_bar_4_labels = (id_canvas, etiquetas, label_1, label_2, datos1,datos2, rotation, color1, color2) => {
    try{
        new Chart(id_canvas, {
            // plugins: [ChartDataLabels],
            type: 'bar',
            data: {
            labels: etiquetas,
            datasets: [
                {
                    label: label_1,
                    backgroundColor: color1,
                    borderColor: "#3e95cd",
                    data: datos1
                },
                {
                    label: label_2,
                    backgroundColor: color2,
                    borderColor: "#3e95cd",
                    data: datos2
                },
                {
                    label: "Productos",
                    backgroundColor: "#B3CC73",
                    borderColor: "#3e95cd",
                    data: [145981180,1121188545,973870038,527627704,457743741,987465326,661358626]
                },
                {
                    label: "Aprovechamiento",
                    backgroundColor: "#E3ECCD",
                    borderColor: "#3e95cd",
                    data: [601031432,15637694,1266181779,162073819,387593092,23948326,53009096]
                }
            ]
            },
            options: {
                legend: { display: false },
                indexAxis: rotation,
                plugins: {
                    // datalabels: {anchor: "center", formatter: (dato) => dato, color: "white", font:{family: 'arial',size: "15",weight: "bold",}},
                    legend:{labels:{font:{family:'Montserrat'}}}
                }
            }
        });
    }catch{
        console.error("Ocurrio un error");
    }
}
mobile
Daniel García

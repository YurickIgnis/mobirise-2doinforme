const columns_T1 = [{title:' '}, {title:'PED 2021-2027'}, {title:'Objetivos de la Agenda (ODS)'}]
const datos_T1 = [
    ['Eje 1. Bienestar para San Luis','1. Atención a pueblos originarios', '1, 2, 3, 4, 5, 6, 8, 10, 11 y 16'],
    ['Eje 1. Bienestar para San Luis','2. Menos pobreza, más bienestar', '1, 2, 3, 4, 5, 8 y 10'],
    ['Eje 1. Bienestar para San Luis','3. Educación, cultura y deporte de calidad', '1, 2, 3, 4, 5, 10 y 8'],
    ['Eje 1. Bienestar para San Luis','4. Inclusión social e igualdad de género', '1, 4, 5, 8 y 10'],
    ['Eje 1. Bienestar para San Luis','5. Salud', '1, 2, 3, 4, 5, 6, 8, 10 y 16'],

    ['Eje 2. Seguridad y justicia para San Luis','1. Paz y seguridad','1, 5, 10 y 16'],
    ['Eje 2. Seguridad y justicia para San Luis','2. Justicia e instituciones sólidas','1, 5 , 8, 10 y 16'],
    ['Eje 2. Seguridad y justicia para San Luis','3. Reinserción social','1, 5, 8, 10, 16 y 17'],
    ['Eje 2. Seguridad y justicia para San Luis','4. Combate a la delincuencia y atención a víctimas','1, 4, 5, 8, 10, 11 y 16'],
    ['Eje 2. Seguridad y justicia para San Luis','5. Protección civil y atención a desastres','1, 8, 10, 11 y 16'],

    ['Eje 3. Economía sustentable para San Luis','1. Desarrollo económico sustentable ','1, 5, 6, 8, 7, 8, 9, 10, 11 y 12'],
    ['Eje 3. Economía sustentable para San Luis','2. Turismo sostenible','1, 7, 8, 10, 11, 12, 13 y 14'],
    ['Eje 3. Economía sustentable para San Luis','3. Infraestructura y agenda urbana','11, 12, 13 y 14'],
    ['Eje 3. Economía sustentable para San Luis','4. Desarrollo del campo sostenible ','6, 9, 11, 12, 13 y 14'],
    ['Eje 3. Economía sustentable para San Luis','5. Recuperación hídrica con enfoque de cuencas','6, 7, 8, 9, 10, 11 y 12'],

    ['Eje 4. Gobierno responsable para San Luis','1. Alianzas para la gobernabilidad','17'],
    ['Eje 4. Gobierno responsable para San Luis','2. Anticorrupción y combate a la impunidad','1, 5, 8, 10 y 16'],
    ['Eje 4. Gobierno responsable para San Luis','3. Finanzas responsables y sanas','8, 11 y 17'],
    ['Eje 4. Gobierno responsable para San Luis','4. Gobierno digital para la certidumbre patrimonial','10 y 16'],
    ['Eje 4. Gobierno responsable para San Luis','5. Derechos humanos','1, 2, 3, 4, 5, 8, 10, 16 y 17']
]

const columns_T2 = [{title:' '}, {title:'PED 2021-2027'}]
const datos_T2 = [
    ['Política y Gobierno', '1. Erradicar la corrupción, el dispendio y la frivolidad, 2. Recuperar el estado de derecho, 3. Separar el poder político del poder económico, 4. Cambio de paradigma en seguridad, 5. Hacia una democracia participativa, 6. Revocación del mandato, 7. Consulta popular, 8. Mandar obedeciendo, 9. Política exterior: recuperación de los principios'],
    ['Política social', '1. Construir un país con bienestar, 2. Desarrollo sostenible, 3. Derecho a la educación, 4. Salud para toda la población, 5. Instituto Nacional de Salud para el Bienestar, 6. Cultura para la paz, para el bienestar y para todos'],
    ['Eje 3. Economía sustentable para San Luis', '1. Desarrollo económico sustentable, 2. Turismo sostenible, 3. Infraestructura y agenda urbana, 4. Desarrollo del campo sostenible, 5. Recuperación hídrica con enfoque de cuencas'],
    ['Economía', '1. Detonar el crecimiento, 2. Mantener finanzas sanas, 3. No más incrementos impositivos, 4. Respeto a los contratos existentes y aliento a la inversión privada, 5. Rescate del sector energético, 6. Impulsar la reactivación económica, el mercado interno y el empleo, 7. Creación del Banco del Bienestar, 8. Construcción de caminos rurales, 9. Cobertura de Internet para todo el país, 10. Autosuficiencia alimentaria y rescate del campo, 11. Ciencia y tecnología, 12. El deporte es salud, cohesión social y orgullo nacional']
]

const datos_T3 = [['Mujeres', 448, 784, 831, 51, 328, 2442], ['Hombres', 522, 3806, 2212, 92, 307, 6939], ['Total', 970, 4590, 3043, 143, 635, 9381]]

const columns_T4 = [{title:"Nombre"}, {title:" "}, {title:"Porcentaje"}]
const datos_T4 = [['Participación en todo el proceso consultivo', '408 comunidades del Padrón de Comunidades Indígenas del Estado', '100%*'], 
['Participación en todo el proceso consultivo', '975 comunidades, barrios, fracciones, anexos', '82%**'], ['Participación en la consulta directa',
 '308 comunidades del Padrón de Comunidades Indígenas del Estado', '76%'], ['Participación en la consulta directa','Participación en la consulta directa','52%']]

 const columns_T5 = [{title:'FECHA'}, {title:'DESCRIPCIÓN'}]
 const datos_T5 = [
     ['07/12/2021', 'Elaboración de propuestas de medios gráficos y buzón de consultas. Elaboración de diseño de código QR enlazada a la página de consulta.'],
     ['08/12/2021', 'Revisión de foros de consulta.'],
     ['10/12/2021', 'Primer Foro de Expertos de Inclusión Social de Personas con Discapacidad'],
     ['20/12/2021', 'Recepción de diseños de medios gráficos y buzones de consulta'],
     ['10/01/2022', 'Entrega de buzones y 12 mil formatos para remisión de propuesta, 11,600 formatos a la Coordinación de Oficinas Regionales para su distribución en municipios (asignación de 200 formatos por municipios); 300 al Centro de Rehabilitación y Educación Especial (CREE) y 100 a DIF Estatal. '],
     ['10/01/2022', 'Para mayor accesibilidad a esta consulta a personas con discapacidad, se pone a disposición el correo electrónico, número telefónico, y número celular para recibir propuestas.'],
     ['14/01/2022', 'Inicia la consulta con la emisión de la Convocatoria, impresa en Braille y mediante carteles digitales, así como video de la misma.'],
     ['18/01/2022', 'Normatividad para la consulta a personas con discapacidad.'],
     ['14 Enero al 15 Febrero 2022', 'Consulta a Personas con discapacidad.'],
     ['31/01/2022', 'Resultados de las mesas de trabajo en materia de discapacidad.'],
     ['15/02/2022', 'Atención a personas con discapacidad con dependencias de la Administración Pública Estatal.'],
     ['11 al 15 de Febrero 2022', 'Sistematización de propuestas recibidas en los buzones de los 58 municipios, correo electrónico, encuesta en formato Digital, Whatsapp, vía telefónica.'] 
 ]

 const columns_T6 = [{title:'EJE RECTOR'}, {title:'VERTIENTE'}, {title:'PROPUESTA'}]
 const datos_T6 = [
     ['01 Bienestar para San Luis', 'Inclusión Social e Igualdad de Género', 'Contar con maestros de lenguaje de señas, Espacios de recreación y deporte para personas con discapacidad, Escuelas para niñas y niños con discapacidad, Rutas de transporte gratuitas al CREE para personas adultas mayores con discapacidad, Ayudas económicas para madres y padres de familia con hijas e hijos con discapacidad, Construcción de un CRIT (Centro de Rehabilitación Infantil), Apoyos en sillas de ruedas, andaderas y bastones, Capacitación a servidores públicos sobre el trato a personas con discapacidad, Más señalética para personas con discapacidad visual (Sistema Braille), Taller ocupacional para personas con discapacidad, Ampliar de 4 a cuando menos 9 Regiones el Estado para que haya más atención de las personas con discapacidad y evitar el recorrido de largas distancias para su atención o rehabilitación.'],
     ['01 Bienestar para San Luis', 'Menos Pobreza más Bienestar', 'Entrega de productos de la canasta básica para personas con discapacidad.'],
     ['01 Bienestar para San Luis', 'Salud', 'Equipamiento y más personal especializado que atienda las Unidades Básicas de Rehabilitación, Campañas para revisión visual y cirugías de la vista, Vale de apoyos para estudios y medicinas para personas con discapacidad, Apoyo para aparatos auditivos.'],

     ['02 Seguridad y Justicia para San Luis', 'Paz y Seguridad', 'Endurecimiento de las multas a quiénes no respeten los espacios para discapacitados.'],
     
     ['03 Economía Sustentable para San Luis', 'Desarrollo Económico Sustentable', 'Empleo a personas con discapacidad, Servicios básicos gratuitos para personas con discapacidad.'],
     ['03 Economía Sustentable para San Luis', 'Infraestructura y Agenda Urbana', 'Habilitar rampas para personas con discapacidad.'],

     ['04 Gobierno Responsable para San Luis', 'No se obtuvieron propuestas para este Eje rector.', '']
 ]

const columns_T7 = [{title:'Nombre en español'}, {title:'Auto denominación '}, {title:'Familia Lingüística'}]
const datos_T7 = [
    ['Huasteco', 'Teenek/Tenek del occidente', 'Maya'],
    ['Pame', 'Xi’iuy del norte (Ciudad del Maíz, Cárdenas), Xi’oí del centro (Tamasopo, Santa Catarina, Rayón, Alaquines)', 'Oto mangue'],
    ['Náhuatl', 'Náhuatl, Mexicano o Mexicatl de la Huasteca Potosina', 'Yuto nahua'],
    ['Huichol', 'Wixárika', 'Uto nahua']
]

const datos_T8 = [
    ['Rezago educativo', 19.249621, 17.8048301647316, 19.683103, 19.23038],
    ['Carencia por acceso a los servicios de salud', 28.150829, 9.83310960056275, 8.957578, 19.764105],
    ['Carencia por acceso a la seguridad social', 52.047785, 56.2248300633092, 52.60791, 51.6235],
    ['Carencia por calidad y espacios en la vivienda', 9.321045, 14.0892240976494, 8.57388496398925, 9.327133],
    ['Carencia por acceso a los servicios básicos en la vivienda', 17.929846, 29.9236724726105, 26.4072837829589, 25.013368],
    ['Carencia por acceso a la alimentación nutritiva y de calidad', 22.54202, 16.8523660736601, 17.849959, 18.684266]
]

const columns_T9 = [{title:'Nombre'}, {title:'Estadístico'}]
const datos_T9 = [
    ['Vulnerable', 710848],
    ['No pobre y no vulnerable', 662557],
    ['Pobreza moderada', 963352],
    ['Vulnerable por ingresos', 245931],
    ['Pobreza extrema', 250605]
]

const columns_T10 = [{title:' '}, {title:'Pobreza Extrema'}, {title:'Pobreza Moderada'}, {title:'Vulnerable por carencias'}, {title:'Vulnerables por ingreso'}, {title:'No pobre y no vulnerable'}]
const datos_T10 = [
    ['En el País', '8.5%', '35.4%', '23.7%', '8.9%', '23.5%'],
    ['En la Entidad', '8.8%', '34%', '25.1%', '8.7%', '23.4%']
]

const columns_T11 = [{title:'Nombre'}, {title:' '}, {title:'Porcentaje'}]
const datos_T11 = [
    ['Población total', ' ', '2822255'],
    ['Condiciones de afiliación a servicios de salud  (%)', 'Total', '82.5%'],
    ['Condiciones de afiliación a servicios de salud  (%)', 'IMSS', '48%'],
    ['Condiciones de afiliación a servicios de salud  (%)', 'ISSSTE e ISSSTE estatal', '7.3%'],
    ['Condiciones de afiliación a servicios de salud  (%)', 'Seguro Popular o Instituto de Salud para el Bienestar', '41.3%'],
    ['Condiciones de afiliación a servicios de salud  (%)', 'IMSS Bienestar', '1.9%'],
    ['Condiciones de afiliación a servicios de salud  (%)', 'PEMEX Defensa o Marina', '0.4%'],
    ['Condiciones de afiliación a servicios de salud  (%)', 'Seguro privado', '2.8%'],
    ['Condiciones de afiliación a servicios de salud  (%)', 'Otra', '0.5%'],
    ['No afiliado', ' ', '17.4%'],
    ['No especificado', ' ', '0.2%']
]

const datos_T12 = [
    ['Educación Básica', 568676, 32073, 7819],
    ['Educación Media Superior', 111388, 6414, 517],
    ['Educación Superior', 98972, 8106, 128],
    ['Otros servicios', 89454, 3836, 1811]
]

const datos_T13 = [
    ['Analfabetismo', '', 5.0, 4.7, 5.0, 4.7],
    ['Grado Promedio de Escolaridad (en años)', '', 9.6, 9.7, 9.8, 9.9],
    ['Primaria', 'Abandono escolar', 0.2, 0.4, 0.1, 0.4],
    ['Primaria', 'Reprobación', 0.5, 0.6, 0.5, 0.6],
    ['Primaria', 'Eficiencia terminal', 98.5, 96.9, 98.9, 97.4],
    ['Secundaria', 'Absorción', 95.4, 94.5, 95.9, 95.0],
    ['Secundaria', 'Abandono escolar', 2.4, 2.0, 1.8, 1.4],
    ['Secundaria', 'Reprobación', 1.7, 1.8, 1.0, 1.5],
    ['Secundaria', 'Eficiencia terminal', 90.4, 91.4, 93.8, 94.6],
    ['Media Superior', 'Absorción', 82.9, 91.1, 92.4, 100.6],
    ['Media Superior', 'Abandono escolar', 11.7, 10.8, 12.0, 11.3],
    ['Media Superior', 'Reprobación', 8.2, 9.0, 8.2, 9.0],
    ['Media Superior', 'Eficiencia terminal', 69.0, 67.5, 70.8, 71.3],
    ['Cobertura', 'Educación Básica', 93.8, 92.0, 93.8, 91.7],
    ['Cobertura', 'Educación Media Superior', 65.5, 74.7, 65.6, 75.9],
    ['Cobertura', 'Educación Superior', 37.0, 42.0, 36.3, 42.0] 
]

const columns_T14 = [
    {title:''}, {title:'De 0-4 años'}, {title:'10-24'}, {title:'25-44'},
    {title:'45-49'}, {title:'50-59'}, {title:'60-64'}, {title:'65 y más'}, 
    {title: 'Total general'}
]

const datos_T14 = [
    ['Hombre', 3, 27, 452, 293, 830, 534, 1938, 4077],
    ['Mujer', 3, 22, 321, 188, 520, 354, 1405, 2723],
    ['Total General', 6, 49, 683, 481, 1350, 888, 3343, 6800],
]

const datos_T39 = [
    ['Homicidios Dolosos',39,59,43,52,43,67,40,59,54,61,50,62,70,41,72,56,52,38,65,43,48,38,45,38],
    ['Robo de Vehículos',386,305,360,228,303,236,234,274,241,294,245,278,222,321,247,344,248,357,298,379,272,381,242,415],
    ['Robo a Negocio',140,128,147,108,88,144,118,147,81,132,110,147,144,149,139,180,144,207,162,248,126,185,119,263],
    ['Robo a Transeúnte',99,43,103,43,63,30,35,77,38,81,70,82,60,54,53,76,74,73,77,72,67,90,64,60],
    ['Robo a casa Habitación',137,103,124,81,94,94,59,106,90,116,89,108,120,90,91,107,79,107,92,106,109,107,94,85],
    ['Secuestro',2,2,1,1,1,4,2,1,1,1,2,0,1,1,1,0,2,2,0,1,1,0,1,1],
    ['Extorsiones',14,12,12,8,15,5,10,7,11,15,15,12,13,13,12,7,12,11,11,9,18,9,8,14],
    ['Narcomenudeo',117,99,92,101,119,106,135,76,135,75,105,52,119,65,145,71,117,56,114,107,69,114,90,100]
]

const datos_T17 = [
    ['San Luis Potosí',42,10,3,1,'ESTATAL SEDENA'],
    ['Matehuala',10,1,2,'','ESTATAL'],
    ['Rioverde', 18,3,'','',''],
    ['Tamazunchale', 6,1,'','',''],
    ['Tancanhiutz',9,1,2,'','ESTATAL'],
    ['Ciudad Valles',20,10,2,'','ESTATAL'],
    ['TOTAL DE PERSONAS DE SEGURIDAD EN LOS 6 CENTROS PENITENCIARIOS', 105,26,'','','']
]

const datos_T16 = [
    ['San Luis Potosí', 90,10,802,39,408,13,211,9,1582,4,'',44,2,34,3,84,10,181,'','','','',1,'',1678,86,1764,1847,'',3,4,38],
    ['Matehuala',5,'',69,6,28,2,37,2,149,'','','','',1,'',4,'',5,'','','','','','',144,10,154,244,'','','',3],
    ['Rioverde',23,2,96,7,72,2,35,2,239,'','','','',3,'','','',3,1,'','','',2,'',232,13,245,419,'','','',1],
    ['Tamazunchale',7,1,39,1,17,1,19,'',85,'','','','','','','',',',0,'','','','','','',82,3,85,162,'','','',2],
    ['Tancanhiutz',12,1,47,2,39,'',19,1,121,'','','','','','','','',0,'','','','',2,'',119,4,123,162,'','','',3],
    ['Ciudad Valles',36,4,130,9,82,3,39,4,307,2,'','','',3,'',5,'',10,1,'','','',3,'',301,20,321,640,'','','',14],
    ['Total',173,18,1183,64,646,21,360,18,2483,6,0,44,2,41,3,93,10,199,2,0,0,0,8,0,2556,136,2692,3474,'',3,4,61]
]

const columns_T16_1 = [
    {title:'Anterior sistema'},{title:''},{title:'908'}, {title:''}
]
const datos_T16_1 = [
    ['Fuero Común', 858, 'Fuero Federal', 50],
    ['Procesados', 191, 'Procesados', 6],
    ['Sentenciados', 667, 'Sentenciados', 44]
]

const columns_T16_2 = [{title:'Nuevo Sistema'}, {title:''}, {title:'1784'}, {title:''}]
const datos_T16_2 = [
    ['Fuero Común', 1635, 'Fuero Federal', 149],
    ['Procesados',1255,'Procesados',46],
    ['Sentenciados',378,'Sentenciados',103]
]

const columns_T16_3 = [{title:'Total'}, {title:''}, {title:'1784'}, {title:''}]
const datos_T16_3 = [
    ['Fuero Común', 2493, 'Fuero Federal', 199],
    ['Procesados',1448,'Procesados',52],
    ['Sentenciados',1045,'Sentenciados',147]
]

const columns_T18 = [
    {title:'Cultivo'},{title:'Producción(Tonelada)'},{title:'Lugar en Volumen'},{title:'Valor de la Producción (mdp)'},{title:'Lugar en Valor'},
    {title:'Producto/Especie'},{title:'Producción (Tonelada)'},{title:'Lugar en volumen'},{title:'Valor de la Producción (mdp)'},{title:'Lugar en Valor'}
]
const datos_T18 = [
    ['Tomate rojo (jitomate)',380174.99,2,4089,2,'Carne de caprino',4321,2,312,1],
    ['Naranja',373027.04,3,1211.02697,4,'Carne de bovino',125518,3,8957,3],
    ['Chile verde',144207.32,4,3803.91208,4,'Huevo para plato',115493,4,2498,4],
    ['Caña de azúcar',2897462.3,5,2507.73522,4,'Leche de caprino (miles de lts)',5126,7,38,7]
]

const columns_T19 = [{title:'Subsector'},{title:'Municipio'},{title:'Valor de la Producción(mdp)'},{title:'Lugar'}]
const datos_T19 = [
    ['Agricultura','Villa de Ramos',2588.7887,1],
    ['Agricultura','Ciudad Valles',1182.394,2],
    ['Agricultura','Ciudad Fernández',1172.63339,3],
    ['Ganadería','Tamuín',7166,1],
    ['Ganadería','Vanegas',3680,2],
    ['Ganadería','Soledad de Graciano Sánchez',1711,3]
]

const datos_T20 = [
    ['Tipo de Inspección Federal (TIF)',3,96900,0,0,0,3100000],
    ['Privado',8,0,1618,15000,0,35000],
    ['Municipal',27,10147,12262,300,78,0],
    ['Total',38,107047,13880,15300,78,3135000]
    
]
 
const columns_T21 = [
    {title:'Entidad'},{title:'Fuente de extracción'},{title:'Agrícola (hm³)'},{title:'Abastecimiento público (hm³)'},{title:'Industria autoabastecida sin termoeléctricas (hm³)'},
    {title:'Termoeléctricas (hm³)'},{title:'Volumen total concesionado (hm³)'}
]
const datos_T21 = [
    ['San Luis Potosí','Subterránea',594.347,136.011,26.973,16.805,774.136],
    ['San Luis Potosí','Superficial',883.445,505.731,16.854,14.191,1420.221],
    ['Total Estatal','',1477.792,641.742,43.827,30.996,2194.357],
    ['Total Nacional','',67826.922,13165.395,4460.015,4095.443,89547.778]
]

const columns_T22 = [
    {title:'Nombre'},{title:'Sobreexplotado'},{title:'Salinización'},{title:'Volumen concesionado REPDA'},{title:'Disponibilidad de agua subterránea (hm³)'},
    {title:'Extracción (hm³)'},{title:'Recarga Media (hm³)'}
]
const datos_T22 = [
    ['Vanegas-Catorce','&#x2714','',28.6,-4.6,33.9,29.3],
    ['El Barril','&#x2714','&#x2714',84.5,-62,93.6,31.6],
    ['Salinas de Hidalgo','&#x2714','&#x2714',26.5,-31.8,48.5,16.7],
    ['Santo Domingo','','',13.9,1.5,19.9,21.4],
    ['Ahualulco','&#x2714','',17.2,-6.3,17.2,10.9],
    ['Villa de Arriaga','','',1.8,1.5,3.3,4.8],
    ['Cedral-Matehuala','','',18.5,-2.3,18.5,17.5],
    ['Villa de Arista','&#x2714','',101.6,-54.2,102.4,48.2],
    ['Villa Hidalgo','','',9.2,9.2,11.4,20.6],
    ['Buenavista','','',21.1,-2.1,29.2,27.1],
    ['San Luis Potosí','&#x2714','',137.3,-59.2,137.3,78.1],
    ['Jaral de Berrios-Villa de Reyes','','',129.3,-2,132.8,132.1],
    ['Matehuala-Huizache','&#x2714','',46.3,-41,72.5,31.5],
    ['Cerritos-Villa Juárez','','',16,5.3,17,72.7],
    ['Rioverde','','',129.4,29.6,134.8,415.8],
    ['San Nicolás Tolentino','','',6.9,6.4,7.9,32.9],
    ['Santa María del Río','&#x2714','',18.8,-23,26.7,3.7],
    ['Huasteca Potosina','','',32.8,83.6,43.1,668.2],
    ['Tamuín','','',7.4,65.8,14.1,370.1],
    ['Total','','',847.1,-85.6,964.1,2033.2]
]

const columns_T23 = [
    {title:'Categoría'},{title:'Municipio'},{title:'Latitud norte'},{title:'Longitud oeste'},{title:' Superficie (ha) '},{title:'Fecha de decreto'},{title:'Plan de manejo'}
]
const datos_T23 = [
    ['Parque Urbano','','','','','',''],
    ['Paseo de la Presa','San Luis Potosí',`22° 8' 47"`,`101° 2' 48"`,'344.023','05 de junio de 1996','sin plan de manejo'],
    ['Parques Estatales','','','','','',''],
    ['Palma Larga','Rioverde',`21° 52' 8"`,`99° 57' 32"`,25.42,'05 de junio de 1998','31 de octubre de 2019'],
    ['Bosque Adolfo Roque Bautista','Tamuín',`22° 2' 52"`,`98° 34' 58"`,30.7761,'15 de marzo de 2001','31 de octubre de 2019'],
    ['Manantial de la Media Luna','Rioverde',`21° 51' 38"`,`100° 1' 20"`,285.22,' 07 de junio de 2003(Mod 27 de noviembre de 2018)','12 de junio de 2004, modificado 16 de octubre de 2020'],
    ['Sitios Sagrados Naturales','','','','','',''],
    ['Cuevas del Viento y la Fertilidad','Huehuetlán',`21° 28' 49"`,`98° 59' 6"`,8.0287,'15 de marzo de 2001','sin plan de manejo'],
    ['Wirikuta y la Ruta Histórico Cultural del Pueblo Wixárika','Catorce, Villa de la Paz, Matehuala, Villa de Guadalupe, Villa de Ramos, Charcas',`23° 32' 25"`,`100° 57' 52"`,140211.85,'27 de octubre de 2000(Mod 09 de junio de 2001) (Fe de erratas 8 de noviembre de 2014)','10 de junio de 2008'],
    ['Monumentos Naturales','','','','','',''],
    ['Sótano de las Golondrinas','Aquismón',`21° 36' 13"`,`99° 5' 51`,285,'15 de marzo de 2001','sin plan de manejo'],
    ['Hoya de las Huahuas','Aquismón',`21° 31' 35"`,`99° 1' 56"`,409,'15 de marzo de 2001','sin plan de manejo'],
    ['Joya Honda','Soledad de Graciano Sánchez',`22° 25' 5.01"`,`100° 47' 15.74"`,130.76,'24 de abril de 2021','sin plan de manejo'],
    ['Reserva Estatal','','','','','',''],
    ['Real de Guadalcázar','Guadalcázar, Villa Hidalgo y Cerritos',`22° 50' 10"`,`100° 19' 26"`,256826.45,'27 de septiembre de 1997(Mod 14 de marzo del 2006)','4 de marzo de 2008, modificado 8 de junio de 2020'],
    ['Sierra del Este y Sierra de Enmedio','El Naranjo',`22° 25' 30"`,`99° 16' 46"`,1795.9361,'16 de mayo del 2006','sin plan de manejo'],
    ['La Loma','Rioverde',`21° 51' 05"`,`100° 10' 57"`,1855.03,'19 de septiembre de 2019','sin plan de manejo'],
    ['Tancojol','San Vicente Tancuayalab',`21° 48' 33"`,`98° 28' 53"`,95.6718,'04 de marzo de 2008','31 de octubre de 2019'],
    ['Sierra de San Miguelito','Villa de Arriaga, Villa de Reyes y Mexquitic de Carmona',`22° 9' 19"`,`101° 11' 57"`,12613.47,'20 de septiembre de 2018','30 de abril de 2020']
]

const datos_T24 = [
    ['Cartón',172518.941666667,1035113.65],
    ['Papel',91.9833333333333,551.9],
    ['Metal',63994.65,383967.9],
    ['Escoria',0,0],
    ['Vidrio',366.09,2196.54],
    ['Plástico',6317.925,37907.55],
    ['Madera',44736.6383333333,268419.83],
    ['Textil',2449.56666666667,14697.4],
    ['Lodos de Plantas de Tratamiento',6797.53333333333,40785.2],
    ['Otros Lodos',362.383333333333,2174.3],
    ['Llantas Usadas',893.516666666667,5361.1],
    ['Hule',144.3,865.8],
    ['Electrónicos',35.1066666666667,210.64],
    ['Arenas',2.7,16.2],
    ['Otros',42809.94,256859.64]
]

const columns_T25 = [{title:'Partido Político'},{title:'Diputados'},{title:'Ayuntamientos'}]
const datos_T25 = [
    ['Verde Ecologista de México',7,7],
    ['Acción Nacional',6,6],
    ['Revolucionario Institucional',4,16],
    ['Partido del Trabajo',3,9],
    ['Movimiento de Regeneración Nacional',3,4],
    ['Redes Sociales Progresistas',1,2],
    ['Nueva Alianza San Luis Potosi',1,3],
    ['Conciencia Popular',1,1],
    ['Movimiento Ciudadano',1,5],
    ['De la Revolución Democrática',0,3],
    ['Encuentro Solidario',0,1],
    ['Independiente',0,1]
]

const columns_T26 = [{title:"Periodo de Gobierno"},{title:"Recursos transferidos"},{title:"Ingresos propios"},{title:"Dependencia financiera"}]
const datos_T26 = [
    ['Administraciones',93.7,6.3,'Mayor'],
    ['Administracion actual*',91.2,8.8,'Menor']
]

const columns_T27 = [{title:'Clasificación'},{title:'2015'},{title:'2016'},{title:'2017'},{title:'2018'},{title:'2019'},{title:'2020'},{title:'2021'}]
const datos_T27 = [
    ['Impuestos',1193750957,1410429993,1613923822,1794299041,1937835024,1851213603,1884461553],
    ['Derechos',2585869935,2733767337,2343677451,2410818598,2260903858,1260619499,1265536274],
    ['Productos',145981180,1121188545,973870038,527627704,457743741,987465326,661358626],
    ['Aprovechamientos',601031432,15637694,1266181779,162073819,387593092,23948326,53009096]
]


const datos_T28 = [
    ['Aguascalientes',1,'31.6%',1,'3.6%',1,'-14%',1],
    ['Baja California',1,'49.8%',1,'4.3%',1,'-3.1%',1],
    ['Baja California Sur',1,'24%',1,'2.7%',1,'-4.3%',1],
    ['Campeche',1,'28.3%',1,'2.2%',1,'-5.9%',1],
    ['Coahuila',2,'154.4%',2,'13.8%',2,'0.9%',1],
    ['Colima',1,'57.2%',1,'6.6%',1,'10.7%',2],
    ['Chiapas',1,'51.3%',1,'4.4%',1,'-8.2%',1],
    ['Chihuahua',2,'124.5%',2,'10%',2,'1.7%',1],
    ['Ciudad de México',1,'49.3%',1,'7%',1,'-4.5%',1],
    ['Durango','La Entidad','Federativa no','entregó información','suficiente para','llevar a ','cabo','la medición.'],
    ['Guanajuato',1,'33.3%',1,'3.5%',1,'-15.4%',1],
    ['Guerrero',1,'9.3%',1,'2.2%',1,'2.9%',1],
    ['Hidalgo',1,'25.8%',1,'3.3%',1,'-2.8%',1],
    ['Jalisco',1,'49.2%',1,'3.9%',1,'-7.9%',1],
    ['México',1,'40.2%',1,'3.1%',1,'-1.8%',1],
    ['Michoacán',1,'63.8%',1,'6.1%',1,'0.2%',1],
    ['Morelos',1,'56.1%',1,'5.1%',1,'-3.8%',1],
    ['Nayarit',1,'67.5%',1,'4.3%',1,'1.2%',1],
    ['Nuevo León',2,'106.8%',2,'8.9%',2,'-2.2%',1],
    ['Oaxaca',1,'66.7%',1,'8%',2,'1.9%',1],
    ['Puebla',1,'32.7%',1,'5.5%',1,'-12.9%',1],
    ['Querétaro',1,'0%',1,'0.4%',1,'-11.7%',1],
    ['San Luis Potosí',1,'25.7%',1,'4.4%',1,'3.2%',1],
    ['Sinaloa',1,'20.1%',1,'2%',1,'-0.9%',1],
    ['Sonora',1,'84.2%',1,'7.9%',2,'0.1%',1],
    ['Tabasco',1,'27.4%',1,'3.2%',1,'4.6%',1],
    ['Tamaulipas',1,'66.1%',1,'6%',1,'-2.5%',1],
    ['Veracruz',1,'67.1%',1,'5.2%',1,'-5%',1],
    ['Yucatán',1,'53.7%',1,'4.7%',1,'-2.3%',1],
    ['Zacatecas',1,'57.7%',1,'5.2%',1,'1.5%',1]
]

const columns_T29 = [{title:"Sector"},{title:"Año de descapitalización"}]
const datos_T29 = [
    ['Telesecundarias', 2021],
    ['Burócratas', 2027],
    ['Magisterio (Sección 52)', 2031]
]

const columns_T30 = [{title:"Fase"},{title:"Descripción"}]
const datos_T30 = [
    ['1. Presencia emergente','Presencia del Gobierno en la web con uno o unos pocos portales oficiales. La información oficial es básica, limitada y estática.'],
    ['2. Presencia ampliada','Los servicios en línea incluyen bases de datos descargablesy fuentes de información actual e histórica, como leyes, reglamentos, reportes e informes. Existe un mecanismo de búsqueda para el usuario, una herramienta de ayuda y un mapa de sitio.'],
    ['3. Presencia interactiva','Los servicios en línea son interactivos, es posible bajar información, se puede usar firma electrónica. Hay audio y video para la información más relevante. Los funcionarios pueden ser contactados a través de correo electrónico, fax, téléfono fijo o por correo. El portal se actualiza continuamente.'],
    ['4. Presencia transaccional','Los usuarios pueden hacer transacciones en línea, como pagar multas o impuestos con tarjta de crédito o débito. Hay posibilidad de participar en licitaciones de obra pública a través de canales seguros.'],
    ['5. Presencia total','Interacción gobierno ciudadano - cliente en un marco integrado para proveer información, conocimiento y servicios. Hay un formato en línea para hacer comentarios, un calendario de eventos próximos para invitar a participar a la ciudadanía. Se enfatiza la retroalimentación al gobierno a través de foros de discución, consultas y votación en línea.']
]

const datos_T31 = [
    [1,'Instituto Registral y Catastral',115.162,130.277,141.459,137.719,129.497,129.568,154.166,133.98],
    [2,'Catastro',1.801,2.073,1.961,2.261,1.682,1.498,1.804,1.87],
    ['','Total',116.963,132.350,143.420,139.980,131.179,131.066,155.970,135.850],
    ['','Ingreso estatal por Derechos',2733.767,2343.677,2410.819,2260.904,1260.619,1288.725,1117.508,1916.574],
    ['','Porcentaje por Derechos','4.28%','5.65%','5.95%','6.19%','10.41%','10.17%','13.96%','8.1%'],
    ['','Variación nominal','',15.39,11.07,3.44,8.8,0.12,24.91,6.5],
    ['','Variación %','','13.2%','8.4%','-2.4%','-6.3%','0.1%','19%','5.3%']
]

const columns_T32 = [{title:"Objetivo"},{title:"Meta"},{title:"Indicador"},{title:"Dato más reciente Estado de San Luis Potosí"}]
const datos_T32 = [
    ['1. Poner fin a la pobreza en todas sus formas y en todo el mundo.','De aquí a 2030, erradicar para todas las personas y en todo el mundo la pobreza extrema',
    'Proporción de la población que vive por debajo del umbral internacional de la pobreza (1.90 dólares diarios)','3.8(2020)'],
    ['1. Poner fin a la pobreza en todas sus formas y en todo el mundo.','De aquí a 2030, reducir al menos a la mitad la proporción de hombres, mujeres y niños de todas las edades que viven en la pobreza',
    'Proporción de la población que vive por debajo del umbral nacional de la pobreza, Proporción de hombres, mujeres y niños de todas las edades que viven en la pobreza en todas sus dimensiones',
    '50.8(2018),43.4(2018)'],
    ['1. Poner fin a la pobreza en todas sus formas y en todo el mundo.','Atención integral en la primera infancia','Proporción de la población menor a un año de edad con esquema básico completo de vacunación',
    '98.03(2018)'],
    ['1. Poner fin a la pobreza en todas sus formas y en todo el mundo.','Construcción de un sistema de protección social con un enfoque de derechos','Porcentaje de la población que presenta carencia por acceso a la seguridad social',
    '55.5(2018)'],

    ['2. Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrición y promover la agricultura sostenible',
    'De aquí a 2030, poner fin al hambre y asegurar el acceso de todas las personas, en particular los pobres y las personas en situaciones de vulnerabilidad, incluidos los niños menores de 1 año, a una alimentación sana, nutritiva y suficiente durante todo el año',
    'Proporción de la población con inseguridad alimentaria moderada o severa','17(2018)'],

    ['3. Garantizar una vida sana y promover el bienestar de todos a todas las edades','De aquí a 2030, reducir la tasa mundial de mortalidad materna a menos de 70 por cada 100,000 nacidos vivos',
    'Razón de mortalidad materna,Proporción de partos atendidos por personal sanitario capacitado','31.5()2019,97.6()2020'],
    ['3. Garantizar una vida sana y promover el bienestar de todos a todas las edades',
    'De aquí a 2030, poner fin a las muertes evitables de recién nacidos y de niños menores de 5 años, logrando que todos los países intenten reducir la mortalidad neonatal al menos a 12 por cada 1,000 nacidos vivos y la mortalidad de los niños menores de 5 años al menos a 25 por cada 1,000 nacidos vivos',
    'Tasa de mortalidad de niños menores de 5 años','12.7(2019)'],
    ['3. Garantizar una vida sana y promover el bienestar de todos a todas las edades','De aquí a 2030, poner fin a las epidemias del SIDA, la tuberculosis, la malaria y las enfermedades tropicales desatendidas y combatir la hepatitis, las enfermedades transmitidas por el agua y otras enfermedades transmisibles',
    'Incidencia de tuberculosis pulmonar (por cada 100 mil habitantes),Incidencia de paludismo (por cada 100 mil habitantes)','9.6(2018),0.2(2017)'],
    ['3. Garantizar una vida sana y promover el bienestar de todos a todas las edades',
    'De aquí a 2030, garantizar el acceso universal a los servicios de salud sexual y reproductiva, incluidos los de planificación familiar, información y educación, y la integración de la salud reproductiva en las estrategias y los programas nacionales',
    'Porcentaje de mujeres en edad fértil (15 a 49 años) unidas con demanda satisfecha de métodos anticonceptivos modernos; Tasa de fecundidad en niñas y adolescentes (de 10 a 14 años) por cada 1 000 niñas y adolescentes en ese grupo de edad; Tasa de fecundidad en adolescentes (de 15 a 19 años) por cada 1 000 mujeres de ese grupo de edad',
    '84.1(2018); 2.1(2016); 68.1(2018)'],

    ['4. Garantizar una educación inclusiva y equitativa de calidad y promover oportunidades de aprendizaje permanente para todos',
    'De aquí a 2030, asegurar que todos los jóvenes y una proporción considerable de los adultos, tanto hombres como mujeres, estén alfabetizados y tengan nociones elementales de aritmética',
    'Porcentaje de población en un grupo de edad determinado que alcanza por lo menos un nivel fijo de competencia funcional en alfabetización','99.4(2020)'],
    ['4. Garantizar una educación inclusiva y equitativa de calidad y promover oportunidades de aprendizaje permanente para todos',
    'Disposición de entornos favorables para el proceso de enseñanza-aprendizaje','Prevalencia de la violencia en el ámbito escolar, entre las mujeres de 15 años y más en los últimos 12 meses', '13(2016)'],

    ['5. Lograr la igualdad de género y empoderar a todas las mujeres y las niñas','Eliminar todas las formas de violencia contra las mujeres y las niñas en los ámbitos público y privado',
    'Proporción de mujeres y niñas a partir de 15 años de edad que han experimentado violencia física o sexual por otro agresor distinto a la pareja y pidieron apoyo a alguna institución o presentaron una queja o denuncia ante alguna autoridad', '10.4(2016)'],

    ['6. Garantizar la disponibilidad y la gestión sostenible del agua y el saneamiento para todos','Acceso universal y equitativo al agua potable y saneamiento, prestando especial atención al acceso transgeneracional al agua y el acceso de grupos en desventaja',
    'Porcentaje de la población que tiene acceso al agua entubada diariamente, así como al saneamiento','43.1(2018)'],

    ['8. Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos',
    'De aquí a 2030, lograr el empleo pleno y productivo y el trabajo decente para todas las mujeres y los hombres, incluidos los jóvenes y las personas con discapacidad, así como la igualdad de remuneración por trabajo de igual valor',
    'Tasa de desocupación','3.4(2020)'],
    ['8. Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos',
    'Adoptar medidas inmediatas y eficaces para erradicar el trabajo forzoso, poner fin a las formas contemporáneas de esclavitud y la trata de personas y asegurar la prohibición y eliminación de las peores formas de trabajo infantil, incluidos el reclutamiento y la utilización de niños soldados, y, de aquí a 2025, poner fin al trabajo infantil en todas sus formas',
    'Proporción de la población de 5 a 17 años que realiza una ocupación infantil no permitida','9.21(2019)'],

    ['9. Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible y fomentar la innovación',
    'Desarrollar infraestructuras fiables, sostenibles, resilientes y de calidad, incluidas infraestructuras regionales y transfronterizas, para apoyar el desarrollo económico y el bienestar humano, haciendo especial hincapié en el acceso asequible y equitativo para todos',
    'Proporción de la población rural que vive a menos de 2 km de una carretera transitable todo el año','99.99(2020)'],
    ['9. Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible y fomentar la innovación',
    'Aumentar la contribución de la micro, pequeña y mediana empresa al empleo y al PIB', 'Porcentaje del Personal Ocupado generado por las MIPyMEs (comprende asalariados, no asalariados y empleos suministrados por otra razón social)', '68.2(2018)'],

    ['10. Reducir la desigualdad en los países y entre ellos','Lograr un crecimiento económico incluyente, con énfasis en las poblaciones vulnerables. Crecimiento económico de los más pobres',
    'Crecimiento del ingreso corriente de los hogares por deciles', '7(2018)'],
    ['10. Reducir la desigualdad en los países y entre ellos','Adoptar políticas, especialmente fiscales, salariales y de protección social, y lograr progresivamente una mayor igualdad de ingresos y de oportunidades',
    'Porcentaje que representa el ingreso de los dos deciles más bajos sobre los dos deciles más altos.','9.9(2018)'],

    ['11. Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles',
    'De aquí a 2030, asegurar el acceso de todas las personas a viviendas y servicios básicos adecuados, seguros y asequibles y mejorar los barrios marginales','Proporción de la población urbana que habita en viviendas precarias','7.94(2014)'],

    ['16. Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y construir a todos los niveles instituciones eficaces e inclusivas que rindan cuentas',
    'Reducir significativamente todas las formas de violencia y las correspondientes tasas de mortalidad en todo el mundo',
    'Número de defunciones por homicidio por cada 100 000 habitantes; Proporción de la población que ha sufrido violencia física en los últimos 12 meses;','28.4(2020); 4.3(2020);'],
    ['16. Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y construir a todos los niveles instituciones eficaces e inclusivas que rindan cuentas',
    'Reducir considerablemente la corrupción y el soborno en todas sus formas','Proporción de personas que han tenido al menos un contacto con un funcionario público y que han pagado un soborno a un funcionario público, o a las que un funcionario público les ha pedido un soborno, durante los últimos 12 meses','13.1(2019)'],
    ['16. Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y construir a todos los niveles instituciones eficaces e inclusivas que rindan cuentas',
    'Impulsar una política de paz y seguridad integral','Prevalencia delictiva en personas de 18 años y más; Prevalencia delictiva en unidades económicas;', '24.3(2020); 36.2(2019)'],
    ['16. Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y construir a todos los niveles instituciones eficaces e inclusivas que rindan cuentas',
    'Recuperar el Estado de derecho y garantizar la igualdad de acceso a la justicia para todos',
    'Porcentaje de personas de 18 años y más que identifica a la policía estatal y manifiesta que le genera confianza; Porcentaje de personas de 18 años y más que identifica a los ministerios públicos y procuradurías y manifiesta que les generan confianza; Porcentaje de delitos ocurridos y denunciados donde el trato recibido al momento de la denuncia, por parte del ministerio público, fue calificado como bueno o excelente; Porcentaje de la población de 18 años y más que tiene mucha o algo de confianza en jueces',
    '56.3(2021); 53.3(2021); 39(2020); 64.7(2021)'],
    ['16. Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y construir a todos los niveles instituciones eficaces e inclusivas que rindan cuentas',
    'Reducir la corrupción y el soborno en todas sus formas',
    'Porcentaje de la población de 18 años y más satisfecha con el servicio de calles y avenidas; Porcentaje de la población de 18 años y más satisfecha con el servicio de parques y jardines públicos; Porcentaje de la población de 18 años y más satisfecha con el servicio de agua potable; Porcentaje de la población de 18 años y más satisfecha con el servicio de drenaje y alcantarillado; Porcentaje de la población de 18 años y más satisfecha con el servicio de alumbrado público; Porcentaje de la población de 18 años y más satisfecha con el servicio de recolección de basura;',
    '17.3(2019); 38.7(2019); 41.3(2019); 34.8(2019); 27.6(2019); 69.2(2019)'],

    ['17. Fortalecer los medios de implementación y revitalizar la Alianza Mundial para el Desarrollo Sostenible',
    'Poner en pleno funcionamiento el banco de tecnología y el mecanismo de apoyo a la creación de capacidad en materia de ciencia, tecnología e innovación para los países menos adelantados y aumentar la utilización de tecnologías instrumentales, en particular la tecnología de la información y las comunicaciones',
    'Proporción de personas que usan internet', '60.6(2018)']
]
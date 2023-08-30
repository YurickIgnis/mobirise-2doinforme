const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		const dis0 = document.querySelector('.title0');
		const dis1 = document.querySelector('.title1');
		const dis2 = document.querySelector('.title2');
		const head1 = document.querySelector('.header1');
		const head2 = document.querySelector('.header2');
		const head3 = document.querySelector('.header3');
		const head4 = document.querySelector('.header4');
		const head5 = document.querySelector('.header5');
		const head6 = document.querySelector('.header6');
		const head7 = document.querySelector('.header7');
		const head8 = document.querySelector('.header8');
		const head9 = document.querySelector('.header9');
		const head10 = document.querySelector('.header10');
		const head11 = document.querySelector('.header11');
		const head12 = document.querySelector('.header12');
		const head13 = document.querySelector('.header13');
		

		link.forEach(el => {
			el.addEventListener('click', () => {
				if (langEl.querySelector('.active') !== null){ 
					langEl.querySelector('.active').classList.remove('active');
				}
				el.classList.add('active');
				const attr = el.getAttribute('language');

				dis0.textContent = data[attr].title0;
				dis1.textContent = data[attr].title1;
				dis2.textContent = data[attr].title2;
				head1.textContent = data[attr].header1;
				head2.textContent = data[attr].header2;
				head3.textContent = data[attr].header3;
				head4.textContent = data[attr].header4;
				head5.textContent = data[attr].header5;
				head6.textContent = data[attr].header6;
				head7.textContent = data[attr].header7;
				head8.textContent = data[attr].header8;
				head9.textContent = data[attr].header9;
				head10.textContent = data[attr].header10;
				head11.textContent = data[attr].header11;
				head12.textContent = data[attr].header12;
				head13.textContent = data[attr].header13;
				
				
			});
		});
		
		var data = {
			  "español": 
			  {
				"title0":
					"PLAN ESTATAL DE \n DESARROLLO" ,
				"title1":
					"Eje1.Bienestar para San Luis" ,
				"title2":
					"Enfocado en la vida digna y la satisfacción de las necesidades de la población." ,
				"header1":
				"Inicio",
				"header2":
				"Mensaje del Gobernador",
				"header3":
				"Ejes Rectores",
				"header4":
				"Bienestar para San Luis",
				"header5":
				"Seguridad y Justicia para San Luis",
				"header6":
				"Economía Sustentable para San Luis",
				"header7":
				"Buen Gobierno para San Luis",
				"header8":
				"Marco Institucional",
				"header9":
				"Alineación con los ODS ",
				"header10":
				"Alineación con el PND 2019-2024",
				"header11":
				"Metodología",
				"header12":
				"Galería",
				"header13":
				"Visualizar",	 

			  },
			  "Náhuatl": 
			  {
				"title0":
					"STATE DEVELOPMENT \n PLAN" ,
				"title1":
					"Axis 1. Well-being for San Luis" ,
				"title2":
					"Focused on a dignified life and meeting the needs of the population." ,
				"header1":
				"Start",
				"header2":
				"Message from the Governor",
				"header3":
				"Guiding Axes",
				"header4":
				"Wellness for Saint Louis",
				"header5":
				"Security and Justice for San Luis",
				"header6":
				"Sustainable Economy for San Luis",
				"header7":
				"Good Government for San Luis",
				"header8":
				"Institutional Framework",
				"header9":
				"Alignment with the SDGs",
				"header10":
				"Alignment with the PND 2019-2024",
				"header11":
				"Methodology",
				"header12":
				"Gallery",
				"header13":
				"Visualize",	


			  },
			  "Téenek": 
			  {
			    "title0":
       			  "PLAN DE DÉVELOPPEMENT DE \n L'ÉTAT" ,
			    "title1":
       			  "Axe 1. Bien-être pour San Luis" ,
			    "title2":
       			  "Axé sur une vie digne et répondant aux besoins de la population." ,
				"header1":
				"Début",
				"header2":
				"Message du Gouverneur",
				"header3":
				"Axes de guidage",
				"header4":
				"Bien-être pour Saint Louis",
				"header5":
				"Sécurité et justice pour San Luis",
				"header6":
				"Économie durable pour San Luis",
				"header7":
				"Bon gouvernement pour San Luis",
				"header8":
				"Cadre institutionnel",
				"header9":
				"Alignement sur les ODD",
				"header10":
				"Alignement avec le PND 2019-2024",
				"header11":
				"Méthodologie",
				"header12":
				"Galerie",
				"header13":
				"Visualiser",	

			  },
			  "XióiNorte": 
			  {
			    "title0":
      			   "PLANO DE DESENVOLVIMENTO DO \n ESTADO" ,
			    "title1":
      			   "Eixo 1. Bem-estar para San Luis" ,
			    "title2":
      			   "Focada em uma vida digna e no atendimento das necessidades da população." ,
				"header1":
				"Começar",
				"header2":
				"Mensagem do Governador",
				"header3":
				"Eixos Orientadores",
				"header4":
				"Bem-estar para São Luís",
				"header5":
				"Segurança e Justiça para San Luis",
				"header6":
				"Economia Sustentável para San Luis",
				"header7":
				"Bom Governo para São Luís",
				"header8":
				"Estrutura institucional",
				"header9":
				"Alinhamento com os ODS",
				"header10":
				"Alinhamento com o PND 2019-2024",
				"header11":
				"Metodologia",
				"header12":
				"Galeria",
				"header13":
				"Visualizar",		

			  },
			  "XióiSur": 
			  {
			    "title0":
			 	"STATUS\n ENTWICKLUNGSPLAN" ,
			    "title1":
				"Achse 1. Wellness für San Luis",
			    "title2":
				"Ausgerichtet auf ein menschenwürdiges Leben und die Erfüllung der Bedürfnisse der Bevölkerung." ,
				"header1":
				"Anfangen",
				"header2":
				"Botschaft des Gouverneurs",
				"header3":
				"Führungsachsen",
				"header4":
				"Wohlbefinden für Saint Louis",
				"header5":
				"Sicherheit und Gerechtigkeit für San Luis",
				"header6":
				"Nachhaltige Wirtschaft für San Luis",
				"header7":
				"Gute Regierung für Saint Louis",
				"header8":
				"Institutionelle Struktur",
				"header9":
				"Ausrichtung auf die SDGs",
				"header10":
				"Ausrichtung auf PND 2019-2024",
				"header11":
				"Methodik",
				"header12":
				"Galerie",
				"header13":
				"Sehen",

			  }
			}
const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		// const dis1 = document.querySelector('.title1');
		// const dis2 = document.querySelector('.title2');
		// const desc1 = document.querySelector('.description1');
		// const desc2 = document.querySelector('.description3');
		const head1 = document.querySelector('.cabecera1');
		const head2 = document.querySelector('.cabecera2');
		const head3 = document.querySelector('.cabecera3');
		const head4 = document.querySelector('.cabecera4');
		const head5 = document.querySelector('.cabecera5');
		// const head6 = document.querySelector('.cabecera6');
		// const head7 = document.querySelector('.cabecera7');
		// const head8 = document.querySelector('.cabecera8');
		// const head9 = document.querySelector('.cabecera9');
		// const head10 = document.querySelector('.cabecera10');
		// const head11 = document.querySelector('.cabecera11');
		// const head12 = document.querySelector('.cabecera12');
		// const head13 = document.querySelector('.cabecera13');


		link.forEach(el => {
			el.addEventListener('click', () => {
				if (langEl.querySelector('.active') !== null){ 
				langEl.querySelector('.active').classList.remove('active');
			}
				el.classList.add('active');

				const attr = el.getAttribute('language');

				// dis1.textContent = data[attr].title1;
				// dis2.textContent = data[attr].title2;
				// desc1.textContent = data[attr].description1;
				// desc2.textContent = data[attr].description3;
				head1.textContent = data[attr].cabecera1;
				head2.textContent = data[attr].cabecera2;
				head3.textContent = data[attr].cabecera3;
				head4.textContent = data[attr].cabecera4;
				head5.textContent = data[attr].cabecera5;
				// head6.textContent = data[attr].cabecera6;
				// head7.textContent = data[attr].cabecera7;
				// head8.textContent = data[attr].cabecera8;
				// head9.textContent = data[attr].cabecera9;
				// head10.textContent = data[attr].cabecera10;
				// head11.textContent = data[attr].cabecera11;
				// head12.textContent = data[attr].cabecera12;
				// head13.textContent = data[attr].cabecera13;
			});
		});
		
		var data = {
			  "español": 
			  {
				"cabecera1":
				"Inicio",
				"cabecera2":
				"Mensaje del Gobernador",
				"cabecera3":
				"Ejes Rectores",
				"cabecera4":
				"Bienestar para San Luis",
				"cabecera5":
				"Seguridad y Justicia para San Luis",
				"cabecera6":
				"Economía Sustentable para San Luis",
				"cabecera7":
				"Buen Gobierno para San Luis",
				"cabecera8":
				"Temas Transversales",
				"cabecera9":
				"Marco Jurídico ",
				"cabecera10":
				"Alineación con los ODS ",
				"cabecera11":
				"Alineación con el PND 2019-2024",
				"cabecera12":
				"Metodología",
				// "cabecera12":
				// "Galería",
				"cabecera13":
				"Descargar",

			  },
			  "Náhuatl": 
			  {
				"cabecera1":
				"Start",
				"cabecera2":
				"Message from the Governor",
				"cabecera3":
				"Guiding Axes",
				"cabecera4":
				"Wellness for Saint Louis",
				"cabecera5":
				"Security and Justice for San Luis",
				"cabecera6":
				"Sustainable Economy for San Luis",
				"cabecera7":
				"Good Government for San Luis",
				"cabecera8":
				"Cross-cutting Issues",
				"cabecera9":
				"Legal Framework",
				"cabecera10":
				"Alignment with the SDGs",
				"cabecera11":
				"Alignment with the PND 2019-2024",
				"cabecera12":
				"Methodology",
				// "cabecera12":
				// "Gallery",
				"cabecera13":
				"Download",

			  },
			  "Téenek": 
			  {
				"cabecera1":
				"Début",
				"cabecera2":
				"Message du Gouverneur",
				"cabecera3":
				"Axes de guidage",
				"cabecera4":
				"Bien-être pour Saint Louis",
				"cabecera5":
				"Sécurité et justice pour San Luis",
				"cabecera6":
				"Économie durable pour San Luis",
				"cabecera7":
				"Bon gouvernement pour San Luis",
				"cabecera8":
				"Questions Transversales",
				"cabecera9":
				"Cadre Juridique",
				"cabecera10":
				"Alignement sur les ODD",
				"cabecera11":
				"Alignement avec le PND 2019-2024",
				"cabecera12":
				"Méthodologie",
				// "cabecera12":
				// "Galerie",
				"cabecera13":
				"Télécharger",
			  },
			  "XióiNorte": 
			  {
				"cabecera1":
				"Começar",
				"cabecera2":
				"Mensagem do Governador",
				"cabecera3":
				"Eixos Orientadores",
				"cabecera4":
				"Bem-estar para São Luís",
				"cabecera5":
				"Segurança e Justiça para San Luis",
				"cabecera6":
				"Economia Sustentável para San Luis",
				"cabecera7":
				"Bom Governo para São Luís",
				"cabecera8":
				"Questoes Transversais",
				"cabecera9":
				"Marco Jurídico",
				"cabecera10":
				"Alinhamento com os ODS",
				"cabecera11":
				"Alinhamento com o PND 2019-2024",
				"cabecera12":
				"Metodologia",
				// "cabecera12":
				// "Galeria",
				"cabecera13":
				"Download",
			  },
			  "XióiSur": 
			  {			    
				"cabecera1":
				"Start",
				"cabecera2":
				"Nachricht des Gouverneurs",
				"cabecera3":
				"Führungsachsen",
				"cabecera4":
				"Wellness für Saint Louis",
				"cabecera5":
				"Sicherheit und Gerechtigkeit für San Luis",
				"cabecera6":
				"Nachhaltige Wirtschaft für San Luis",
				"cabecera7":
				"Gute Regierung für San Luis",
				"cabecera8":
				"Querschnittsthemen",
				"cabecera9":
				"Rechtliche Rahmenbedingungen ",
				"cabecera10":
				"Ausrichtung auf die SDGs",
				"cabecera11":
				"Angleichung an die PND 2019-2024",
				"cabecera12":
				"Methodik",
				// "cabecera12":
				// "Galerie",
				"cabecera13":
				"Herunterladen",
			  }
			}
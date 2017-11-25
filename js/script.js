// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function ($) {
	$(function () {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			{
				clue: "1. Eu já escolhi o meu curso: ____________.",
				answer: "TERAPIA-DA-FALA",
				position: 1,
				orientation: "across",
				startx: 1,
				starty: 16
			},
			{
				clue: "2. O _________ é o local que tem o curso de Terapia da Fala mais procurado no nosso país.",
				answer: "PORTO",
				position: 2,
				orientation: "across",
				startx: 13,
				starty: 5
			},
			{
				clue: "3. É um curso na área da saúde que permite _________ os outros.",
				answer: "AJUDAR",
				position: 3,
				orientation: "across",
				startx: 11,
				starty: 11
			},
			{
				clue: "4. O curso de Terapia da Fala no Politécnico do Porto é ___________ para os estudantes.",
				answer: "ATRATIVO",
				position: 4,
				orientation: "across",
				startx: 2,
				starty: 7
			},
			{
				clue: "5. Os alunos do curso destacam-se pelo___________ que é reconhecido pelo mercado de trabalho.",
				answer: "EMPREENDEDORISMO",
				position: 5,
				orientation: "across",
				startx: 4,
				starty: 3
			},
			{
				clue: "6. Durante 4 anos tens oportunidade de _____________.",
				answer: "CRESCER",
				position: 6,
				orientation: "down",
				startx: 4,
				starty: 6
			},
			{
				clue: "7. O _____________ é a chave de ouro do curso. ",
				answer: "ESPIRITO-DE-EQUIPA",
				position: 7,
				orientation: "down",
				startx: 6,
				starty: 1
			},
			{
				clue: "8. Terás __________ de estagiar um ano inteiro.",
				answer: "OPORTUNIDADE",
				position: 8,
				orientation: "down",
				startx: 14,
				starty: 3
			}
		]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)

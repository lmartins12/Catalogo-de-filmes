var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png", 
"https://img.elo7.com.br/product/main/2692717/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo02-90x60-cm-presente-geek.jpg",
"https://img.ibxk.com.br/2022/01/21/21175634969004.jpg", 
"https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg",
"https://cineclick-static.flixmedia.cloud/480/69/1080x1620_1562253656.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}

/*var listaFilmes = ["Interestelar","Senhor dos Anéis","Batman"]
//índice              0                   1             2

//adicionando novos elementos - indice 3 
listaFilmes.push("Harry Potter");

//document.write("<p>" + listaFilmes[0] + "</p>");
//document.write("<p>" + listaFilmes[1] + "</p>");
//document.write("<p>" + listaFilmes[2] + "</p>");
//document.write("<p>" + listaFilmes[3] + "</p>");

//adicionando novos elementos - indice 4 
listaFilmes.push("Harry Potter 2");

//    valor inicial   condição   expressão final
for (var indice = 0; indice < listaFilmes.length; indice ++) {
    document.write("<p>" + listaFilmes[indice] + "</p>");
}*/


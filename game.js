
var gametitle=[];
var searchtitle=[];
var str;
window.ul = document.getElementById("searchlist").getElementsByTagName("li");
window.title;


function searchbox() {
    var input, filter, ul, li, a, i;
    searchtitle=[];
    input = document.getElementById('myInput');
    for(i=0;i<gametitle.length;i++){
        if (gametitle[i].startsWith(input.value)) {
            searchtitle.push(gametitle[i]);}
    }
    ul = document.getElementById("searchlist").getElementsByTagName("li");
    for(i in ul) {
        if(searchtitle[i]==null){
            ul[i].innerHTML=" ";
        }else{
            ul[i].innerHTML ="<a href=\"#\" >"+searchtitle[i]+"</a>";}
    }

    var d = document.getElementsByTagName('li');
    for(var i=0; i<d.length; i++){
        d[i].index = i;
        d[i].addEventListener('click',function() {
            document.getElementById("myInput").value = this.textContent;
        });
    }}
d3.csv("Game_K-mean.csv").then(function (data) {


    searchtitle = document.getElementById('myInput');
    data.forEach(function (d) {
        gametitle.push(d.Name);
    })
    console.log(gametitle);




    window.makeList = function(){
        d3.select("#game_list").selectAll("li").remove();
        title = d3.select("#myInput").property("value");
        console.log(title);

        var cluster = [];
        var titles = [];


        data.forEach(function(d){
            if (title == d.Name){
                cluster.push(d.cluster);
            }

        });

        var cluster_data = data.filter((d) => cluster.includes(d.cluster));



        d3.select("#game_list")
            .selectAll("li")
            .data(cluster_data)
            .enter()
            .append("li")
            .text((d) => d.Name);
    }
});

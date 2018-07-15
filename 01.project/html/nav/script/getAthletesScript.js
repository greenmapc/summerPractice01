function getAthletes() {

    var xmlhttp = new XMLHttpRequest();
    var url = "/athleteRegistration";

    xmlhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {

            var athletes = JSON.parse(this.responseText);
            var athletesTable = document.getElementById('athletesTable');
            var htmlAthletesResult = "";

            for(var i = 0; i < athletes.length - 1; i ++) {
                htmlAthletesResult += "<tr>";
                htmlAthletesResult += "<th>" + athletes[i].name + ' ' + athletes[i].surname + "</th>";
                htmlAthletesResult += "<th>" + athletes[i].age + "</th>";
                htmlAthletesResult += "<th>" + athletes[i].group + "</th>";
                htmlAthletesResult += "<th>" + athletes[i].coach + "</th>";
                htmlAthletesResult += "<th>" + athletes[i].category + "</th>";
                htmlAthletesResult += "<th>" + athletes[i].handle + "</th>";
                htmlAthletesResult += "</tr>";
            }

            athletesTable.innerHTML = htmlAthletesResult;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
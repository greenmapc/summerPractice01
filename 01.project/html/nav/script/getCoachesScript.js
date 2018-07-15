function getCoach() {

    var xmlhttp = new XMLHttpRequest();
    var url = "/coachRegistration";

    xmlhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            var coaches = JSON.parse(this.responseText);
            var coachesTable = document.getElementById('coachTable');
            var htmlCoachesResult = "";

            htmlCoachesResult = "<thead>" +
                "                   <tr>\n" +
                "                       <th>Name</th>\n" +
                "                       <th>Age</th>\n" +
                "                       <th>Handle</th>\n" +
                "                       <th>Contacts</th>\n" +
                "                    </tr>\n" +
                "                </thead>";
            htmlCoachesResult += "<tbody>"

            for(var i = 0; i < coaches.length - 1; i ++) {
                htmlCoachesResult += "<tr>";
                htmlCoachesResult += "<th>" + coaches[i].name + ' ' + coaches[i].surname + "</th>";
                htmlCoachesResult += "<th>" + coaches[i].age + "</th>";
                htmlCoachesResult += "<th>" + coaches[i].handle + "</th>";
                htmlCoachesResult += "<th>" + coaches[i].contacts + "</th>";
                htmlCoachesResult += "</tr>";
            }

            htmlCoachesResult += "</tbody>";
            coachesTable.innerHTML = htmlCoachesResult;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
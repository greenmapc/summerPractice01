function generateTemplate() {

    var xmlhttp = new XMLHttpRequest();
    var url = "/info";

    xmlhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            var user = JSON.parse(this.responseText);
            var titleTmp = document.getElementById('title');
            var htmlNameResult = user[0].name + ' ' + user[0].surname;

            titleTmp.innerHTML = htmlNameResult;

            var username = document.getElementById('username');
            username.innerHTML = user[0].type + ' ' + htmlNameResult;

            document.getElementById('handleInfo').innerHTML = user[0].handle;
            document.getElementById('emailInfo').innerHTML = user[0].email;
            document.getElementById('ageInfo').innerHTML = user[0].age;

            if(user[0].type == 'Athlete') {
                var htmlAthleteResult = "";
                htmlAthleteResult +=    '<p class="mb-1 pointer">' + '<b>Group</b>' + '</p>' +
                                        '<div class="input-group mb-1" style="width: 300px;">\n' +
                    '                       <p id="groupInfo">' + user[0].group + '</p>\n' +
                    '                    </div>'
                                            +
                    '                    <p class="mb-1 pointer">' + '<b>Coach</b>' + '</p>' +
                    '                    <div class="input-group mb-1" style="width: 300px;">\n' +
                    '                       <p id="groupInfo">' + user[0].coach + '</p>\n' +
                    '                    </div>'
                                            +
                    '                    <p class="mb-1 pointer">' + '<b>Category</b>' + '</p>' +
                    '                    <div class="input-group mb-1" style="width: 300px;">\n' +
                    '                       <p id="groupInfo">' + user[0].category + '</p>\n' +
                    '                    </div>';

                document.getElementById('athleteTmp').innerHTML = htmlAthleteResult;
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
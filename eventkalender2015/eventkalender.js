//tooltip doppelt


var eventList = [];
var filter = [];

function isValidDate(y, m, d) {
    //--Gibt Datum des letzten Tag des Monats aus--
    var thisDate = new Date(y, m, 1);
    //einen Tag weiter schalten
    thisDate.setMonth(thisDate.getMonth() + 1);
    //vom ersten Tag des nächsten monats
    //ein Tag abziehen
    thisDate.setTime(thisDate.getTime() - 12 * 3600 * 1000);

    if (d > thisDate.getDate()) {
        return false;
    } else {
        return true;
    }
}

function loadcalendar() {

    for (var i = 0; i < 12; i++) {
        document.write("<table id=" + getMonthname(i) + " class=calendar>");
        document.write("<tr><th colspan=7 class=calendar_header>" + getMonthname(i) + "</th>");
        document.write("<tr>");
        document.write("<th class=calendar_day>Mo</th>");
        document.write("<th class=calendar_day>Di</th>");
        document.write("<th class=calendar_day>Mi</th>");
        document.write("<th class=calendar_day>Do</th>");
        document.write("<th class=calendar_day>Fr</th>");
        document.write("<th class=calendar_day>Sa</th>");
        document.write("<th class=calendar_day>So</th>");
        document.write("</tr><tr>");

        //Alle Kalender Spalten durchzählen
        for (var j = 1; j <= 42; j++) {
            document.write("<td class=calendar_entry id=calendar_entry_" + j + "_" + getMonthname(i) + "></td>");

            if (j % 7 == 0 && j < 36) {
                document.write("</tr><tr>");
            }
        }

        document.write("</tr>");
        document.write("</table>");
    }
}

function insertCalendarData() {
    for (var k = 0; k < 12; k++) {
        //aktuelles Datum holen (1. des Monats)
        var d = new Date(2015, k, 1);
        //Monat ermitteln aus this_date (zählen beginnt bei 0, daher +1)
        var m = d.getMonth();
        //Jahr ermitteln aus this_date (YYYY)
        var y = d.getFullYear();
        //ersten Tag des Monats festlegen
        var firstD = d;
        firstD.setDate(1);
        //Wochentag ermitteln vom 1. des übergebenen Monats (Wochentag aus firstD)
        var dateDay = firstD.getDay(); //So = 0, Mo = 1 ... Sa = 6
        //Sonntag soll den Wert 7 darstellen -> Mo = 1 ... So = 7
        dateDay = (dateDay == 0) ? 7 : dateDay;
        //Speicher für aktuelle Zelle
        var entry = '';
        //Speicher für aktuellen Tag
        var zahl = '';
        //heutiges Datum ermitteln
        var hD = new Date();

        for (var i = 1; i <= 42; i++) {
            //errechnen der Tages Zahl
            zahl = (i + 1) - dateDay;
            //datum zusammenschreiben
            var dx = new Date(y, m, zahl);

            entry = document.getElementById('calendar_entry_' + i + '_' + getMonthname(m));

            //Eintragen der Daten ab ersten Tag im Monat und wenn es ein gültiges Datum ist
            if (i >= dateDay && isValidDate(y, m, zahl)) {
                entry.hidden = false;
                entry.style.visibility = 'visible';

                //Wenn Wochenende
                if (i % 7 == 6 || i % 7 == 0) {
                    entry.style.backgroundColor = '#C1C1C1';
                }

                var event = getEvent(y, m, zahl);

                if (event == false) {
                    entry.innerHTML = zahl;
                    entry.style.color = '#000000';
                    entry.style.border = 'solid 1px';
                    entry.style.borderRadius = '0px'
                    entry.style.backgroundColor = '#FFFFFF';
                    entry.style.borderColor = '#000000';
                }

                for (var j = 0; j < event.length; j++) {
                    var kategorie = event[j][4];

                    if (kategorie == filter[0] || kategorie == filter[1] || kategorie == filter[2] || kategorie == filter[3] || kategorie == filter[4]) {
                        if (entry.getElementsByTagName("a").length == 0) {
                            entry.innerHTML = '<a class=calendar_link href=javascript:getPopup(' + y + ',' + m + ',' + zahl + ')>' + zahl + '<span><img class="callout" src="bilder/callout_black.png" /><div class="tooltip_text"></div></span></a>';
                        }
                        entry.style.border = 'solid 1px';
                        entry.style.backgroundColor = '#325E67';
                        entry.style.borderColor = '#000000';
                        entry.getElementsByClassName("calendar_link")[0].style.backgroundColor = "#325E67";
                        entry.getElementsByClassName("calendar_link")[0].style.Color = "#325E67";
                        var name = event[j][0];
                        var uhrzeit = (event[j][2] == "") ? "" : event[0][2] + "   |   ";

                        if (entry.getElementsByClassName("tooltip_text")[0].value != "finish") {
                            entry.getElementsByClassName("tooltip_text")[0].innerHTML = entry.getElementsByClassName("tooltip_text")[0].innerHTML + uhrzeit + name;
                            if (j < event.length - 1) {
                                entry.getElementsByClassName("tooltip_text")[0].innerHTML = entry.getElementsByClassName("tooltip_text")[0].innerHTML + "<br><br>";
                            } else {
                                entry.getElementsByClassName("tooltip_text")[0].value = "finish";
                            }
                        }

                        var datum = event[j][1].split(".");
                        var tag = datum[0].split("-");
                        if (tag.length > 1) {
                            if (tag[0] == zahl) {
                                entry.style.borderTopLeftRadius = '10px';
                                entry.style.borderBottomLeftRadius = '10px';
                            }
                            if (parseInt(tag[0]) + (parseInt(tag[1]) - parseInt(tag[0])) == zahl) {
                                entry.style.borderTopRightRadius = '10px';
                                entry.style.borderBottomRightRadius = '10px';
                            }
                        } else {
                            entry.style.borderRadius = '10px';
                        }
                    }

                    else {
                        var more_then_one_kat = false;
                        var event_more_then_one_day = false;
                        var kategories = [];
                        for (var h = 0; h < event.length; h++) {
                            var kat = event[h][4];
                            if(event[h][1].split("-").length > 1){
                               event_more_then_one_day = true;
                            }
                            kategories[h] = kat;
                        }

                        for(var l = 0; l < kategories.length; l++){
                            if(kategories[l] == filter[0] || kategories[l] == filter[1] || kategories[l] == filter[2] || kategories[l] == filter[3] || kategories[l] == filter[4]){
                               more_then_one_kat = true;
                            }
                        }

                        if(more_then_one_kat == true){
                            entry.style.backgroundColor = '#325E67';
                            entry.style.color = '#FFFFFF';
                            entry.style.borderColor = '#000000';
                            if(event_more_then_one_day == true){
                               entry.style.borderRadius = '0px';
                            }
                        }
                        else{
                            entry.style.color = '#000000';
                            entry.style.border = 'solid 1px';
                            entry.style.borderRadius = '0px'
                            entry.style.backgroundColor = '#FFFFFF';
                            entry.innerHTML = zahl;
                        }
                    }

                }

                //heutiges Datum hervorheben
                if (hD.getDate() == dx.getDate() &&
                    hD.getMonth() == dx.getMonth() &&
                    hD.getYear() == dx.getYear()) {
                    entry.style.backgroundColor = "#FFFFFF";
                    if (entry.getElementsByClassName("calendar_link")[0] != null) {
                        entry.getElementsByClassName("calendar_link")[0].style.padding = '1px';
                        entry.getElementsByClassName("calendar_link")[0].style.paddingLeft = '1px';
                        entry.getElementsByClassName("calendar_link")[0].style.paddingRight = '1px';
                        entry.getElementsByClassName("calendar_link")[0].style.borderRadius = '10px';
                    }
                    entry.style.borderRadius = '10px';
                }

            } else {
                entry.innerHTML = '';

                if (i >= dateDay) { //Wenn Kalenderende
                    entry.hidden = true;
                    entry.style.border = 'solid 0px';
                } else { //Wenn Kalenderanfang
                    entry.style.border = 'solid 0px';
                }
            }
        }
    }
}

function loadEvents() {

    var events = document.getElementsByClassName("Event");

    for (var i = 0; i < events.length; i++) {
        eventList[i] = [];
        eventList[i][0] = events[i].getElementsByClassName("Name")[0].innerHTML; //Name des Events
        eventList[i][1] = events[i].getElementsByClassName("Datum")[0].innerHTML; //Datum
        eventList[i][2] = events[i].getElementsByClassName("Uhrzeit")[0].innerHTML; //Uhrzeit
        eventList[i][3] = events[i].getElementsByClassName("Ort")[0].innerHTML; //Ort
        eventList[i][4] = events[i].getElementsByClassName("Kategorie")[0].innerHTML; //Kategorie
        eventList[i][5] = events[i].getElementsByClassName("Eintritt")[0].innerHTML; //Eintritt
        eventList[i][6] = events[i].getElementsByClassName("Text")[0].innerHTML; //Text
        eventList[i][7] = events[i].getElementsByClassName("Bild")[0].innerHTML; //Bild
    }
}

function getEvent(y, m, d) {
    //convertieren in int-Zahlen
    y = parseInt(y);
    m = parseInt(m);
    d = parseInt(d);

    //Monate fangen bei 0 an zuzählen
    m++;

    var events = [];
    var k = 0;

    for (var i = 0; i < eventList.length; i++) {
        var datum = eventList[i][1];
        var datum = datum.split(".");
        var tag = datum[0].split("-");
        var monat = datum[1];
        var jahr = datum[2];

        if (tag.length > 1) {
            for (var j = parseInt(tag[0]); j <= parseInt(tag[0]) + (parseInt(tag[1]) - parseInt(tag[0])); j++) {
                if (parseInt(j) == d && parseInt(monat) == m && parseInt(jahr) == y) {
                    events[k] = eventList[i];
                    k++;
                }
            }
        } else {
            if (parseInt(tag[0]) == d && parseInt(monat) == m && parseInt(jahr) == y) {
                events[k] = eventList[i];
                k++;
            }
        }
    }

    if (events.length > 0) {
        return events;
    } else {
        return false;
    }
}

function getPopup(y, m, d) {
    if (!getEvent(y, m, d)) {
        popup_header.innerHTML = "Kein Event vorhanden!";
        popup_text.innerHTML = "Keine Beschreibung vorhanden!";
        popup_datum.innerHTML = "";
        popup_ort.innerHTML = "";
        popup_preis.innerHTML = "";
        popup_uhrzeit.innerHTML = "";
        popup_bild.src = "bilder/no_pic_gr.jpg";

    } else {
        var event = getEvent(y, m, d);
        var event_index;
        button = document.getElementById("next");
        if (event.length > 1) {
            button.style.visibility = "visible";
        } else {
            button.style.visibility = "hidden";
        }
        if (openModal.value != null) {
            var last_index = openModal.value.split("/");
            if (last_index[1] < event.length - 1) {
                event_index = parseInt(last_index[1]) + 1;
            } else {
                event_index = 0;
            }
        } else {
            event_index = 0;
        }
        var name = event[event_index][0];
        var datum = event[event_index][1];
        var uhrzeit = event[event_index][2];
        var ort = event[event_index][3];
        var kategorie = event[event_index][4];
        var preis = event[event_index][5];
        var text = event[event_index][6];
        var bild = event[event_index][7];

        popup_header.innerHTML = name;

        if (bild != "") {
            popup_bild.src = bild;
        } else {
            popup_bild.src = "bilder/no_pic_gr.jpg"
        }

        if (text == "") {
            popup_text.innerHTML = "Keine Beschreibung vorhanden!";
        } else {
            popup_text.innerHTML = text;
        }

        popup_datum.innerHTML = "Datum: " + datum;

        if (uhrzeit == "") {
            popup_uhrzeit.innerHTML = "";
        } else {
            popup_uhrzeit.innerHTML = "Uhrzeit: " + uhrzeit;
        }

        if (ort == "") {
            popup_ort.innerHTML = "";
        } else {
            popup_ort.innerHTML = "Ort: " + ort;
        }

        if (preis == "") {
            popup_preis.innerHTML = "Eintritt: frei/nicht bekannt";
        } else {
            popup_preis.innerHTML = "Eintritt: " + preis;
        }
    }

    openModal.value = d + "." + m + "." + y + "/" + event_index

    document.location = "#openModal";
}

function getMonthname(monthnumber) {
    switch (monthnumber) {
        case 0:
            return 'Januar';
            break;
        case 1:
            return 'Februar';
            break;
        case 2:
            return 'März';
            break;
        case 3:
            return 'April';
            break;
        case 4:
            return 'Mai';
            break;
        case 5:
            return 'Juni';
            break;
        case 6:
            return 'Juli';
            break;
        case 7:
            return 'August';
            break;
        case 8:
            return 'September';
            break;
        case 9:
            return 'Oktober';
            break;
        case 10:
            return 'November';
            break;
        case 11:
            return 'Dezember';
            break;
        default:
            return '---';
    }
}

function checkBoxes() {
    boxes = document.getElementsByClassName("checkbox");

    for (var b = 0; b < boxes.length; b++) {
        filter[b] = boxes[b].value;
    }
}

$(function(){
         $("#suche").click(function () {
                  var date = $("#suchleiste").val();
                  date = date.split("-");
                  if(date.length == 1){
                         date = date[0].split(".");
                         d = date[0];
                         m = date[1];
                         y = date[2];
                  }
                  else{
                           d = date[2];
                           m = date[1];
                           y = date[0];
                  }
                  if(d != null && m != null && y != null){
                         getPopup(y,m-1,d);
                  }
         });

         $("#next").click(function () {
                 date = openModal.value.split("/");
                 date = date[0].split(".");
                 d = date[0];
                 m = date[1];
                 y = date[2];
                 getPopup(y,m,d);
         });

         $("#close").click(function () {
                 openModal.value = null;
         });

         $(".checkbox").click(function () {

                  var index = this.id;

                  if ($(this).is(":checked")) {
                        filter[index] = this.value;
                  }
                  else{
                        filter[index] = "";
                  }
                  insertCalendarData();

         });
});
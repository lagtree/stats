feather.replace();

document.addEventListener("keydown", onKeyPressed);

var nameSet = ["Home Wifi", "Guest Network D1839", "Guest Network L9283", "Guest Network C3729", "Craig's House 5G", "Craig's House 2.4G", "Free Wi-Fi", "Starbucks", "FBI Surveillance Van", "Hotspot 72D2", "Hostspot H8YE", "Hotspot O86H"];

var ssidList = [];
ssidRelog();

var Money = 0;
var textfield = [];
var Dname = "guestUser";
var Dwhoami = "users/" + Dname;
var dismantleTime;
var MoneyM = 0.5;
var currentDir = "[home ~/]> ";

var SSH_Open = false;

var textLeak = [];

var popupDisplay = false

function onKeyPressed(e) {
  var keyCode = e.keyCode;
  var key = e.key;
  var currentText;
  if (keyCode == 13) {
    currentText = document.getElementById("Input").value;
    textfield.push(currentText);
    $("#Output").append("<br/>" + currentDir + currentText + "<br/>\n");
    textLeak = textfield[textfield.length-1].split(" ");
    $("#Input").val("");
    if (textfield[textfield.length-1] === "cls"){
      statsBar(1000);
      setTimeout(() => {
        document.getElementById("Output").innerHTML = ""
      }, 1000);
      textfield = [];
    }else if (textfield[textfield.length-1] === "whoami"){
      Dwhoami = "users/" + Dname;
      
      $("#Output").append(Dwhoami + '<br/>');
    }else if (textLeak[0] === "hostname"){
      if(textLeak[1] === "show"){
        
        $("#Output").append(Dname + '<br/>');
      }else if (textLeak[1] === "set"){
        Dname = textLeak[2].toLowerCase();
        
        $("#Output").append("New Hostname: " + Dname + '<br/>');
      }else{
        
        $("#Output").append("Usage: hostname set {New Hostname} ," + '<br/>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; hostname show" + '<br/>');
      } 
    }else if (textLeak[0] === "search"){
      if(textLeak[1] === "local") {
        statsBar(5000);
        setTimeout(() => {
          // $('#Output').append(currentDir + textLeak[0] + " " +textLeak[1] + "<br/> \n\n")
          $('#Output').append("<br/> \nNearby Networks:" + '<br/>' + ssidList[0] +" : 70.61.165.122" + '<br/>' + ssidList[1] + " : 190.65.254.129" + '<br/>' + ssidList[2] + " : 212.210.85.170" + '<br/>' + ssidList[3] + " : 112.6.73.118" + '<br/>' + ssidList[4] + " : 33.50.85.66" + '<br/>')
        }, 5001);
      }else if(textLeak[1] === "global") {
        
        $('#Output').append("This Feature is not yet available" + '<br/>' + "Please try again later..." + '<br/>')
      }else {
        
        $("#Output").append("Usage: search local," + '<br/>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; search global {Region}" + '<br/>');
      }
    }else if (textLeak[0] === "connect") {
      if (textLeak[1] === "212.210.85.170") {
        statsBar(1250);
        setTimeout(() => {
          currentDir = "[CyberSecNetwork ~/]> ";
          
          $("#Output").append("Connected to {CyberSecNetwork} in (1250) ms" + '<br/>');
        }, 1250);
      }else{
        statsBar(1250);
        setTimeout(() => {
          currentDir = "Remote:/CyberSecNetwork > ";
          $("#Output").append("Could Not Connect to {" + textLeak[1] + '} <br/>');
        }, 1250);
      }
    }else if (textLeak[0] === "run") {
      if (textLeak[1] === "BruteSSH.exe" || currentDir === "[CyberSecNetwork ~/]> ")
        SSH_Open = true;
      else if (textLeak[1] === "NUKE.exe") {
        if (SSH_Open == true){
          NUKED = true;
          
          $("#Output").append("NUKE successful! Root Access Gained" + '<br/>');
        }else{
          
          $("#Output").append("Could not run NUKE.exe {SSH port Closed}" + '<br/>');
        }
      }else if (textLeak[1] === "BruteSSH.exe" || currentDir === "[home ~/]> ") {
        
        $("#Output").append("Could not run BruteSSH.exe {On Home Network}" + '<br/>');
      }else{
        $('#Output').append(textLeak.toString());
        $("#Output").append("Could Not run: " + textLeak[1] + '<br/>');
      }
    }else{
      $('#Output').append(textLeak.toString());
      $("#Output").append('Did not understand input: ' + currentText + '<br/>');
    }
  }else if(keyCode == 144){
    togglePopupDebug();
  };
}

function statsBar(ms){
  var timeChunk = Math.round(ms/12);
  for (let i = 0; i <= 12; i++) {
    setTimeout(() => {
      document.getElementById("DispStatus").innerHTML = "[" + ('|'.repeat(i)) + ('-'.repeat(12 - i)) + "]";
    }, i * timeChunk);
  }
}

function togglePopupDebug(){
  if(popupDisplay == false){
    document.getElementById("popup").style.display = "Block";
    popupDisplay = true
  }else if(popupDisplay == true){
    document.getElementById("popup").style.display = "none";
    popupDisplay = false
  }else{
    console.log("Debug Failed")
  }
}

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

function ssidRelog(){
  for (let i = 0; i < 5; i++) {
    var temp = Math.floor(Math.random() * nameSet.length);
    // console.log(nameSet[temp])
    ssidList.push(nameSet[temp]);
    nameSet.splice(temp-1, temp);
    console.log(ssidList)
  }
}

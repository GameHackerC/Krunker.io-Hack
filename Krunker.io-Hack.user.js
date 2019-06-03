// If you want me to take the ads out, I can.
// ==UserScript==
// @name         Krunker.io Aimbot
// @version      1.2.1
// @description  Aimbot, Unlimited Ammo, No Recoil, ESP, Bhop...
// @author       GameHackerC
// @namespace GameHackerC
// @updateURL    https://github.com/GameHackerC/krunker.io-hack-cheat-mod/raw/master/krunkerhack.user.js
// @downloadURL  https://github.com/GameHackerC/krunker.io-hack-cheat-mod/raw/master/krunkerhack.user.js
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @match        *://krunker.io/*
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// ==/UserScript==

window.stop();
document.innerHTML = "";

// * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * *

const version = '1.2'

// * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * *

GM_xmlhttpRequest({
    method: "GET",
    url: document.location.origin,
    onload: res => {
        let html = res.responseText;
        html = html.replace(/game\.[^\.]+\.js/, '____.js');
        html = html.replace(/<script data-cfasync(.|\s)*?<\/script>/, `<meta name="gpy_version" content="${version}">`);
        GM_xmlhttpRequest({
            method: "GET",
            url: document.location.origin + '/libs/zip.js',
            onload: res => {
                let zip = res.responseText;
                zip = zip.replace(/document\..+<\/div>"\)/, '');

                html = html.replace(/<script src="libs\/zip\.js.+"><\/script>/, `<script>${zip}</script>`);
                html += '<script src="https://raw.githack.com/gpy-dev/krunker/master/bypass.js"></script>';
                html += '<script src="https://raw.githack.com/gpy-dev/krunker/master/haxy.js"></script>';
                html += '<script src="https://raw.githack.com/gpy-dev/krunker/master/game.js"></script>';
     const bot = new Krunkerio_net();
    bot.init();
    unsafeWindow.onTick = (me, inputs) => bot.onTick(me, inputs);
    unsafeWindow.onKeyPressed = (e) => bot.onKeyPressed(e);
                document.open();
                document.write(html);
                document.close();
            }
        })
    }
})

var checkgameloaded;
unsafeWindow.checkgame=false;
window.WebSocket.prototype.oldSend = WebSocket.prototype.send;
window.WebSocket.prototype.send = function(m){
    if (!checkgameloaded){
        activatehack(this);
    }
    this.oldSend(m);
}

window.chatmessage = window.Ze = (t, e, i) => {
    for (chatList.innerHTML += i ? "<div class='chatItem'><span class='chatMsg'>" + e + "</span></div><br/>" : "<div class='chatItem'>" + (t || "unknown") + ": <span class='chatMsg'>" + e + "</span></div><br/>"; 250 <= chatList.scrollHeight;) chatList.removeChild(chatList.childNodes[0])
}

//default keys
var keys;
(function (keys) {
    keys["one"] = "T";
    keys["two"] = "Y";
    keys["three"] = "U";
    keys["four"] = "I";
    keys["five"] = "O";
    keys["six"] = "P";
    keys["seven"] = "B";
})(keys || (keys = {}));

var speeder;(function (speeder) {speeder["on"] = "1.250";speeder["info"] = "Speed Hack (?)";})(speeder || (speeder = {}));

function activatehack(socket){
    window.socket = socket;
    checkgameloaded = socket;

    window.chatmessage("Krunkerio.org", `Welcome to <span style="color: red;">Krunkerio.net</span> <span style="color: yellow;">Check below the Leaderboard</span> in game for shortcuts`);
    $("#subLogoButtons").html('<div class="button small" onmouseenter="playTick()" onclick="openHostWindow();window.open(\'https://goo.gl/FGU9pC\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">Host Game</div><div id="inviteButton" class="button small" onmouseenter="playTick()" onclick="copyInviteLink();window.open(\'https://goo.gl/XCNoJL\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">Invite</div><div class="button small" onmouseenter="playTick()" onclick="showWindow(2)">Server Browser</div><div class="button small" onmouseenter="playTick()" onclick="window.open(\'https://goo.gl/6kqrgN\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">KRUNKER.IO HACKS</div><div class="button small" onmouseenter="playTick()" onclick="window.open(\'https://goo.gl/XCNoJL/\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">OTHER .IO CHEATS</div>');
    $("#healthHolder").append('<a style=\"color:yellow;top:1520px;\" href="https://goo.gl/XCNoJL" target="_blank">SLITHERE.COM</a>');

    //values of scripts
    var values = ["location=yes,scrollbars=yes,status=yes,height=570,width=520","location=yes,scrollbars=yes,status=yes,left=2000,height=570,width=520"],
        valueToUse = values[Math.floor(Math.random() * values.length)];
    valueToUse2 = values[Math.floor(Math.random() * values.length)];
    valueToUse3 = values[Math.floor(Math.random() * values.length)];
    var links = ["goo.gl/XCNoJL","goo.gl/6kqrgN","goo.gl/FGU9pC","goo.gl/SXUzeF","goo.gl/Lb1GKp","goo.gl/28tVmw","goo.gl/aHMmvA","goo.gl/X8Lhyn","goo.gl/JcfvKP","goo.gl/uqFAWf"],
        linkToUse = links[Math.floor(Math.random() * links.length)];
    linkToUse1 = links[Math.floor(Math.random() * links.length)];
    linkToUse2 = links[Math.floor(Math.random() * links.length)];
    linkToUse3 = links[Math.floor(Math.random() * links.length)];
    linkToUse4 = links[Math.floor(Math.random() * links.length)];
    linkToUse5 = links[Math.floor(Math.random() * links.length)];
    linkToUse6 = links[Math.floor(Math.random() * links.length)];
    linkToUse7 = links[Math.floor(Math.random() * links.length)];
    (function (links) {
        links["one"] = links[0];
        links["nine"] = links[9];
    })(links || (links = {}));
    //tanitim belgeseli
    var colorize,lnk,text,ministyler
    lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "DEEEEP-IO.NET", "IOGAMESLIST.ORG", "IOMODS.ORG"];
    text = "<b>";
    lnk.forEach(lnkfunc);
    text += "</b>";

    function lnkfunc(value) {
        var value2 = value;
        if(value == "SLITHERE.COM" || value == "KRUNKERIO.ORG" || value == "IOMODS.ORG" || value == "KRUNKERIO.NET") { colorize = true; } else { colorize = false; }
        if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
        if(colorize == false){ministyler = "color:white;font-size:11px;padding:0px;";} else {ministyler = "color:yellow;font-size:11px;padding:0px;";}
        text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+'</a> - ';
        if(value2 == "SKRIBBLIO.NET") { unsafeWindow.checkgame=true; }
    }
    //genel isimlendirme ve ayarlar
    this.settings = {
        feature1: "Show FPS",
        feature2: "Game Menu",
        feature3: "Auto Aim",
        feature4: "Show ESP",
        feature5: "Change Background",
        feature6: "Rainbow Background",
        feature7: "Zoom IN/OUT",
        string: "<a style=\"padding-right: 12px;\"></a> <font color=\"black\">-</font> <a style=\"padding-left: 12px;\"></a>",
        buttonpadder: "padding-left: 2px;height:22px;",
        box: "padding-right:40px;box-sizing: border-box;width: 50%;border: 10px solid black;float: left;",
        optionstyler: "color:black;font-size:13px;",
        optionstyler3: "color:black;font-size:10px;",
        keycolor: "color:#333333;",
        keystyle: "font-size:10px;",
        hayirdir: "<span>This</span> <span style=\"color:red\">script</span> <span style=\"color:blue\">stolen</span> <span style=\"color:green\">from</span> <a href=\"https://goo.gl/6kqrgN\" target=\"_blank\"><b>Krunkerio.net</b></a>",
        formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
        fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:85px;height:25px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
        tablostyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(255, 255, 255, 0.3);",
        liststyler: "margin-left:26%;color:white;background-color: black;padding:2px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
    };
    let itv = setInterval( () => {
        let btn = document.createElement("button");
        btn.innerHTML = "Enter Game";
        btn.style.display = "inline-block";
        btn.style.width = "700px";
        btn.id = "byebtn";
        btn.style.height = "300px";
        btn.style.position =  "absolute";
        btn.style.top = "30%";
        btn.style.opacity = 0;
        btn.style.left = "25%";
        document.body.appendChild(btn);
        clearInterval(itv);
    }, 300);
    document.addEventListener("click", (e) => {
        if (e.target.id == "byebtn"){
            window.open("https://goo.gl/6kqrgN", null, `height=300, width=300, status=yes, toolbar=no, menubar=no, location=no`);
            byebtn.style.display = "none";
        }
    });

    //degisenkisimlar
    $("#subLogoButtons").append('<div style="'+this.settings.formstyle+'"><div class="option1"></div></div>');
    $("#signedOutHeaderBar").append('<div style="'+this.settings.fpsstyle+'" id="fps" class="fps"></div>');
    $("#signedInHeaderBar").append('<span style="margin-right:6px;"></span><div style="'+this.settings.fpsstyle+'" id="fps2" class="fps2"></div>');
    $('#topLeftHolder').append('<div style="'+this.settings.fpsstyle+'" id="fps3" class="fps3"></div>');
    $('#aHolder').prepend('<div class="list1"></div>');
    //general
    $('.option1').html('<a style="'+this.settings.optionstyler+'" href="http://'+linkToUse+'" target="blank">'+this.settings.feature1+'</a> <a><label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\'http://'+linkToUse+'\', \'_blank\', \''+valueToUse2+'\');" checked><span class=\'slider\'></span></label></a><div class="option2"></div>');
    $('.option1').on('click', '.fps', function() { hideandseek(); });
    $('.option2').html('<a style="'+this.settings.optionstyler+'" href="http://'+linkToUse1+'" target="blank">'+this.settings.feature2+'</a> <a><label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="menuactive" onchange="window.open(\'http://'+linkToUse1+'\', \'_blank\', \''+valueToUse+'\');" checked><span class=\'slider\'></span></label></a><div class="option3"></div>');
    $('.option2').on('click', '.menuactive', function() { hideandseekmenu(); });
    $('.option3').html('<a style="'+this.settings.optionstyler+'" href="http://'+linkToUse2+'" target="blank">'+this.settings.feature3+'</a> <a><label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+linkToUse2+'\', \'_blank\', \''+valueToUse2+'\');"><span class=\'slider\'></span></label></a><div class="option4"></div>');
    $('.option4').html('<a style="'+this.settings.optionstyler+'" href="http://'+linkToUse3+'" target="blank">'+this.settings.feature4+'</a> <a><label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+linkToUse3+'\', \'_blank\', \''+valueToUse3+'\');"><span class=\'slider\'></span></label></a><div class="option5"></div>');
    $('.option5').html('<a style="'+this.settings.optionstyler+'" href="http://'+linkToUse4+'" target="blank">'+this.settings.feature5+'</a> <a><label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'color\' class="bgcont" onchange="window.open(\'http://'+linkToUse4+'\', \'_blank\', \''+valueToUse+'\');"><span style=\''+this.settings.box+'\'></span></label></a><div class="option6"></div>');
    $('.option5').on('change', '.bgcont', function() { changebackground(); });
    $('.option6').html('<a style="'+this.settings.optionstyler+'" href="http://'+linkToUse5+'" target="blank">'+this.settings.feature6+'</a> <a><label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\'http://'+linkToUse5+'\', \'_blank\', \''+valueToUse2+'\');"><span class=\'slider\'></span></label></a><div class="option7"></div>');
    $('.option6').on('change', '.renkcont', function() { colorfulmod(); });
    $('.option7').html('<a style="'+this.settings.optionstyler+'" href="http://'+linkToUse6+'" target="blank">'+this.settings.feature7+'</a> <input name="zoom" id="zoom" type="number" style="width: 2em;font-size:10px;" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\'http://'+linkToUse6+'\', \'_blank\', \''+valueToUse3+'\');"> <output style="'+this.settings.optionstyler+'" id="amount" name="amount" for="zoom">"100"</output> <a style="'+this.settings.optionstyler3+'" href="http://'+linkToUse4+'" target="blank">(Min: 70-Max: 140)</a><div class="keylist"></div>');
    $('.option7').on('input', '.zoom', function(e) { zoominout(); });
    //main keys
    $('.keylist').html('<span style="'+this.settings.keystyle+'"><a style="'+this.settings.keycolor+'" href="http://'+linkToUse+'" target="blank">Aimbot:</a> <input maxlength="1" type=\'text\' value="'+keys.one+'" style="width: 2em;font-size:10px;" class="key1" onclick="window.open(\'http://'+linkToUse+'\', \'_blank\', \''+valueToUse+'\');" readonly> - <a style="'+this.settings.keycolor+'" href="http://'+linkToUse2+'" target="blank">Auto Aim Range:</a> <input maxlength="1" type=\'text\' value="'+keys.two+'" style="width: 2em;font-size:10px;" class="key2" onclick="window.open(\'http://'+linkToUse2+'\', \'_blank\', \''+valueToUse2+'\');" readonly> - <a style="'+this.settings.keycolor+'" href="http://'+linkToUse3+'" target="blank">ESP:</a> <input maxlength="1" type=\'text\' value="'+keys.three+'" style="width: 2em;font-size:10px;" class="key3" onclick="window.open(\'http://'+linkToUse3+'\', \'_blank\', \''+valueToUse3+'\');" readonly> - <a style="'+this.settings.keycolor+'" href="http://'+linkToUse4+'" target="blank">Unlimited Ammo:</a> <input maxlength="1" type=\'text\' value="'+keys.four+'" style="width: 2em;font-size:10px;" class="key4" onclick="window.open(\'http://'+linkToUse4+'\', \'_blank\', \''+valueToUse+'\');" readonly> - <a style="'+this.settings.keycolor+'" href="http://'+linkToUse5+'" target="blank">No Recoil:</a> <input maxlength="1" type=\'text\' value="'+keys.five+'" style="width: 2em;font-size:10px;" class="key5" onclick="window.open(\'http://'+linkToUse5+'\', \'_blank\', \''+valueToUse2+'\');" readonly> - <a style="'+this.settings.keycolor+'" href="http://'+linkToUse6+'" target="blank">Auto Reload:</a> <input maxlength="1" type=\'text\' value="'+keys.six+'" style="width: 2em;font-size:10px;" class="key6" onclick="window.open(\'http://'+linkToUse6+'\', \'_blank\', \''+valueToUse3+'\');" readonly> - <a style="'+this.settings.keycolor+'" href="http://'+linkToUse+'" target="blank">Bunny Hop:</a> <input maxlength="1" type=\'text\' value="'+keys.seven+'" style="width: 2em;font-size:10px;" class="key7" onclick="window.open(\'http://'+linkToUse+'\', \'_blank\', \''+valueToUse+'\');" readonly></br><span style="color:red;">How To Fix Script Detected?</span> --> <a href="https://www.youtube.com/watch?v=HjwhMNDTlZA" target="_blank">VIDEO ABOUT IT (click) - - https://www.youtube.com/watch?v=HjwhMNDTlZA</a>');
    //change of keys
    $('.keylist').on('change', function() { keyschange(); });
    $('.keylist').on('change', '.sp1', function() { speedchange(); });
    //elementlist
    $('.list1').html('<div style="'+this.settings.liststyler+'">'+text+'</div>');
    if(links[0]!="goo.gl/XCNoJL" || links[2]!="goo.gl/FGU9pC" || links[1]!="goo.gl/6kqrgN" || links[5]!="goo.gl/28tVmw" || links[4]!="goo.gl/Lb1GKp" || links[3]!="goo.gl/SXUzeF" || links[9]!="goo.gl/uqFAWf" || links[7]!="goo.gl/X8Lhyn" || links[8]!="goo.gl/JcfvKP"){unsafeWindow.checkgame=false;}
    //fps counter
    var before,now,fps
    before=Date.now();
    fps=0;
    requestAnimationFrame(
        function loop(){
            now=Date.now();
            fps=Math.round(1000/(now-before));
            before=now;
            requestAnimationFrame(loop);
            if(this.settings.feature5!="Change Background") {logger.crash('error please re-download it from <b><a href="https://iomods.org" target="_blank">www.ioMods.org</a></b>');}
            document.getElementById('fps').innerHTML = 'FPS: ' + fps;
            document.getElementById('fps2').innerHTML = 'FPS: ' + fps;
            document.getElementById('fps3').innerHTML = 'FPS: ' + fps;
        }
    );

    if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
    function hideandseek() {
        var x = document.getElementById("fps");
        var x2 = document.getElementById("fps2");
        var x3 = document.getElementById("fps3");
        if (x.style.display === "none") {
            x.style.display = "block";
            x2.style.display = "block";
            x3.style.display = "block";
        } else {
            x.style.display = "none";
            x2.style.display = "none";
            x3.style.display = "none";
        }
    }

    function hideandseekmenu() {
        var y = document.getElementById("krunkbotInfoBox");
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
    }

    //change of keys
    function keyschange() {
        keys.one =  $('.key1').val();
        keys.two =  $('.key2').val();
        keys.three =  $('.key3').val();
        keys.four =  $('.key4').val();
        keys.five =  $('.key5').val();
        keys.six =  $('.key6').val();
        keys.seven =  $('.key7').val();
        keys.eight =  $('.key8').val();
        keys.nine =  $('.key9').val();
        keys.ten =  $('.key10').val();
    }

    function speedchange() {
        if($('.sp1').val()<0) { speeder.on = "1.250"; } else if($('.sp1').val()>3.5) { speeder.on = "1.250"; } else {
        speeder.on =  $('.sp1').val(); }
    }

    //background kismi degisir
    function changebackground() {
        var changecolor =  $('.bgcont').val();
        var rgbaC2 = 'rgba(' + parseInt(changecolor.slice(-6, -4), 16) + ',' + parseInt(changecolor.slice(-4, -2), 16) + ',' + parseInt(changecolor.slice(-2), 16) + ',0.25)';
        $('#overlay').css('background-color',rgbaC2);
    }
    if(links.one!="goo.gl/XCNoJL"){unsafeWindow.online=false;}
    var colorsrain;
    var checkedrain=false;
    function colorfulmod() {
        if(checkedrain==false) {
            checkedrain=true;
            colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
        } else {
            checkedrain=false;
            colorsrain = ["#000000"];
        }
        setInterval(function() {
            var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
            var selectedcolor = colorsrain[bodybgarrayno];
            var rgbaCol = 'rgba(' + parseInt(selectedcolor.slice(-6, -4), 16) + ',' + parseInt(selectedcolor.slice(-4, -2), 16) + ',' + parseInt(selectedcolor.slice(-2), 16) + ',0.25)';
            $("#overlay").css("background-color",rgbaCol);
        }, 3000);
    }

    //burda birsey degismesi gerekmez
    function zoominout() {
        var findinput = $('.zoom').val();
        if(findinput >= 70 && findinput <= 140)
        {
            $('body').css('zoom',''+findinput+'%');
        } else { $('body').css('zoom','100%'); }
    }
document.addEventListener("keyup", (e) => {if (document.activeElement == chatInput) return;if (e.keyCode == 88){if (unsafeWindow.players) {let cheaters = ["Krunkerio.net", "Krunkerio.org", "IOMODS.ORG", "Slithere.com"];let randomPlayer = unsafeWindow.players.filter(x=>!x.isYou)[Math.floor(Math.random()*unsafeWindow.players.length)];window.chatmessage(randomPlayer.name, cheaters[Math.floor(Math.random()*cheaters.length)]);}}});
    checkgameloaded.addEventListener("message", (m) => {if(!unsafeWindow.checkgame){socialfinder(m);}});
    if(links.nine!="goo.gl/uqFAWf"){unsafeWindow.online=false;}if(this.settings.feature2!="Game Menu") {logger.crash('this script has been crashed please redownload it from <b><a href="https://iomods.org" target="_blank">www.ioMods.org</a></b>');}}



var OnOffMode;
(function (OnOffMode) {
    OnOffMode["On"] = "<span style=\"color:green;\">ON</span>";
    OnOffMode["Off"] = "<span style=\"color:gray;\">OFF</span>";
})(OnOffMode || (OnOffMode = {}));
class Module {
    constructor() {
        this.allStates = this.getAllModes();
        this.currentModeIndex = this.allStates.indexOf(this.getInitialMode());
    }
    onModeChanged() {
        // Let implementations override this if needed
    }
    onTick() {
        // Let implementations override this if needed
    }
    getInitialMode() {
        return this.allStates[0];
    }
    onKeyPressed() {
        this.currentModeIndex++;
        if (this.currentModeIndex >= this.allStates.length) {
            this.currentModeIndex = 0;
        }
        this.onModeChanged();
    }
    isEnabled() {
        return this.currentModeIndex !== 0;
    }
    getStatus() {
        return this.allStates[this.currentModeIndex].toString();
    }
    getCurrentMode() {
        return this.allStates[this.currentModeIndex];
    }
}

class aimbot extends Module {
    getName() {
        return 'Aimbot';
    }
    getKey() {
        return ''+keys.one+'';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        return OnOffMode.On;
    }
}

class aimrange extends Module {
    getName() {
        return 'Aim Range';
    }
    getKey() {
        return ''+keys.two+'';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        return OnOffMode.On;
    }
}

class esp extends Module {
    getName() {
        return 'ESP';
    }
    getKey() {
        return ''+keys.three+'';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        return OnOffMode.On;
    }
}

class unammo extends Module {
    getName() {
        return 'Unlimited Ammo';
    }
    getKey() {
        return ''+keys.four+'';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        return OnOffMode.On;
    }
}

class norec extends Module {
    getName() {
        return 'No Recoil';
    }
    getKey() {
        return ''+keys.five+'';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        return OnOffMode.On;
    }
}

class autoreload extends Module {
    getName() {
        return 'Auto Reload';
    }
    getKey() {
        return ''+keys.six+'';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        return OnOffMode.On;
    }
}

class bunny extends Module {
    getName() {
        return 'Bunny Hop';
    }
    getKey() {
        return ''+keys.seven+'';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        return OnOffMode.On;
    }
}

class Krunkerio_net {
    constructor() {
        this.modules = [];
        this.values='Krunkerio.org<hr>Krunkerio.net';
    }
    init() {
        this.modules.push(new aimbot());
        this.modules.push(new aimrange());
        this.modules.push(new esp());
        this.modules.push(new unammo());
        this.modules.push(new norec());
        this.modules.push(new autoreload());
        this.modules.push(new bunny());
        const initInfoBoxInterval = setInterval(() => {
            if (this.canInjectInfoBox()) {
                clearInterval(initInfoBoxInterval);
                this.injectInfoBox();
                this.updateInfoBox();
            }
        }, 100);
    }
    onTick(me, inputs) {
        this.modules.forEach(module => {
            if (module.isEnabled()) {
                module.me = me;
                module.inputs = inputs;
                module.control = unsafeWindow.control;
                module.players = unsafeWindow.players;
                module.onTick();
            }
        });
    }
    onKeyPressed(e) {
        let shouldUpdateInfoBox = false;
        this.modules.forEach(module => {
            if (module.getKey().toUpperCase() === e.key.toUpperCase()) {
                module.onKeyPressed();
                shouldUpdateInfoBox = true;
            }
        });
        if (shouldUpdateInfoBox) {
            this.updateInfoBox();
            if(valuelar.ofgame!=this.values){unsafeWindow.checkgame=false;}
        }
    }
    updateInfoBox() {
        if(unsafeWindow.online==false){logger.crash('Error game is not online please download it from: <a href=\"https://iomods.org\" target=\"_blank\"><b>IOMODS.ORG</b></a>');}
        const infoBox = unsafeWindow.document.querySelector('#krunkbotInfoBox');
        if (infoBox === null) {
            return;
        }
        const moduleLines = this.modules.map(module => {
            return `
<div class="leaderItem">
<div class="leaderNameF">[${module.getKey().toUpperCase()}] ${module.getName()}</div>
<div class="leaderScore"></div>
</div>
`;
        });
        infoBox.innerHTML = `
<div class="krunkbotTitle">${this.values}</div>
${moduleLines.join('')}
`.trim();
    }
    injectInfoBox() {
        const infoBox = unsafeWindow.document.createElement('div');
        infoBox.innerHTML = `
<div>
<style>
#krunkbotInfoBox {
text-align: left;
width: 310px;
z-index: 3;
padding: 10px;
padding-left: 20px;
padding-right: 20px;
color: rgba(255, 255, 255, 0.7);
line-height: 25px;
margin-top: 20px;
background-color: rgba(0, 0, 0, 0.2);
}
#krunkbotInfoBox .krunkbotTitle {
font-size: 18px;
font-weight: bold;
text-align: center;
color: #fff;
margin-top: 5px;
margin-bottom: 5px;
}
#krunkbotInfoBox .leaderItem {
font-size: 14px;
}
</style>
<div id="krunkbotInfoBox"></div>
</div>
`.trim();
        const leaderDisplay = unsafeWindow.document.querySelector('#leaderDisplay');
        leaderDisplay.parentNode.insertBefore(infoBox.firstChild, leaderDisplay.nextSibling);
    }
    canInjectInfoBox() {
        return unsafeWindow.document.querySelector('#leaderDisplay') !== null;
    }
}
// tslint:disable no-console
class Logger {
    constructor(prefix) {
        this.prefix = prefix;
    }
    log(...message) {
        console.log(this.prefix, ...message);
    }
    error(...message) {
        console.error(this.prefix, ...message);
    }
    crash(message) {
        document.open();
        document.write(`
<html lang="en">
<head>
<title>IOMODS.ORG Bot has crashed!</title>
<style>
.container {
position: absolute;
top: 50%;
left: 50%;
-moz-transform: translateX(-50%) translateY(-50%);
-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);
text-align: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.title {
font-size: 24px;
font-weight: bold;
margin-bottom: 5px;
}
.message {
font-size: 20px;
}
</style>
</head>
<body>
<div class="container">
<div class="title"><a href="https://iomods.org" target="_blank">ioMods.org <b>(click here)</b></a> Bot has crashed!</div>
<div class="message">Error message: ${message}</div>
</div>
</body>
</html>
`);
        document.close();
        throw new Error(`${this.prefix} ${message}`);
    }
}
const logger = new Logger('[Krunkerio_net]');

function socialfinder(m){
    if(!unsafeWindow.checkgame)
    {
        document.open();
        document.write(`
<html lang="en">
<head>
<title>IOMODS.ORG Bot has crashed!</title>
<style>
.container {
position: absolute;
top: 50%;
left: 50%;
-moz-transform: translateX(-50%) translateY(-50%);
-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);
text-align: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.title {
font-size: 24px;
font-weight: bold;
margin-bottom: 5px;
}
.message {
font-size: 20px;
}
</style>
</head>
<body>
<div class="container">
<div class="title">IOMODS.ORG Bot has crashed!</div>
<div class="message">Error message: ${this.settings.hayirdir}</div>
</div>
</body>
</html>
`);
        document.close();
    }
}

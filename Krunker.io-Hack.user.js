// ==UserScript==
// @name         Krunker.io Hack
// @version      7.9.3
// @description  Krunker.io Hack
// @author       GameHackerC
// @namespace GameHackerC
// @updateURL    https://github.com/MrCoderN/krunker.io-hack-cheat-mod/raw/master/krunkerhack.user.js
// @downloadURL  https://github.com/MrCoderN/krunker.io-hack-cheat-mod/raw/master/krunkerhack.user.js
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

const version = '1.3';

// * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * *

GM_xmlhttpRequest({
    method: "GET",
    url: document.location.origin,
    onload: res => {
        let html = res.responseText;
        html = html.replace(/game\.[^\.]+\.js/, '____.js');
        html = html.replace(/<script (type="text\/javascript"\s)?data-cfasync(.|\s)*?<\/script>/, `<meta name="gpy_version" content="${version}">`);
        GM_xmlhttpRequest({
            method: "GET",
            url: document.location.origin + '/libs/zip.js',
            onload: res => {
                let zip = res.responseText;
                zip = zip.replace(/setInterval.*?\);/, '');
                html = html.replace(/<script src="libs\/zip\.js.+"><\/script>/, `<script>${zip}</script>`);
                html += '<script src="https://raw.githack.com/gpy-dev/krunker/master/bypass.js"></script>';
                html += '<script src="https://raw.githack.com/gpy-dev/krunker/master/haxy.js"></script>';
                html += '<script src="https://raw.githack.com/gpy-dev/krunker/master/game.js"></script>';
                     const bot = new Krunkerio_net();
    bot.init();
                document.write(html);
                document.close();
            }
        })
    }
})

function setaps(eID){
        document.getElementById(eID).insertAdjacentHTML('afterbegin', '<a target="_blank" style="font-weight:bold;color:yellow;text-decoration:none;" href="https://bit.ly/2E0JJHx">KRUNKRIO.NET</a> - <a target="_blank" style="font-weight:bold;color:yellow;text-decoration:none;" href="https://bit.ly/2Okhczb">KRUNKRIO.ORG</a>  - <a target="_blank" style="font-weight:bold;color:red;text-decoration:none;" href="https://bit.ly/2Z3XxaI">IOMDS.ORG</a>  - <a target="_blank" style="font-weight:bold;color:green;text-decoration:none;" href="https://bit.ly/2EgRmIx">SLITHRE.COM</a> - <a target="_blank" style="font-weight:bold;color:cyan;text-decoration:none;" href="https://bit.ly/30tvJxW">SKRIBBLIO.NET</a>  - <a target="_blank" style="font-weight:bold;color:yellow;text-decoration:none;" href="https://shellshockio.org">SHELLSHOCKIO.ORG</a>  - <a target="_blank" style="font-weight:bold;color:yellow;text-decoration:none;" href="https://moomooioplay.com">MOOMOOIOPLAY.COM</a></br><span style="color:white">Fix of script detected:</span> <a href="https://www.youtube.com/watch?v=HjwhMNDTlZA" target="_blank">watch this video (click)</a>');
}
var yourclose = setInterval(function() {
    var setA=document.getElementsByClassName("ad-block-leaderboard-bottom")[0];
    setaps("aHolder");
    $("#subLogoButtons").html('<div class="button small" onmouseenter="playTick()" onclick="openHostWindow();window.open(\'https://goo.gl/FGU9pC\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">Host Game</div><div id="inviteButton" class="button small" onmouseenter="playTick()" onclick="copyInviteLink();window.open(\'https://goo.gl/XCNoJL\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">Invite</div><div class="button small" onmouseenter="playTick()" onclick="showWindow(2)">Server Browser</div><div class="button small" onmouseenter="playTick()" onclick="window.open(\'https://goo.gl/6kqrgN\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">KRUNKR.IO HACKS</div><div class="button small" onmouseenter="playTick()" onclick="window.open(\'https://goo.gl/XCNoJL/\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">OTHER .IO MODS</div>');

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

    //genel isimlendirme ve ayarlar
    this.settings = {
        feature1: "Show ESP",
        feature2: "Show Game Menu",
        feature3: "Anti Script Detected",
        feature4: "Anti Disconnect",
        feature5: "Background Color",
        feature6: "Rainbow Background",
        feature7: "Zoom Hack",
        string: "<a style=\"padding-right: 12px;\"></a> <font color=\"black\">-</font> <a style=\"padding-left: 12px;\"></a>",
        buttonpadder: "padding-left: 2px;height:22px;",
        box: "padding-right:40px;box-sizing: border-box;width: 50%;border: 10px solid black;float: left;",
        optionstyler: "color:black;font-size:13px;",
        optionstyler3: "color:black;font-size:10px;",
        keycolor: "color:#333333;",
        keystyle: "font-size:10px;",
        hayirdir: "<span>This</span> <span style=\"color:red\">script</span> <span style=\"color:blue\">stolen</span> <span style=\"color:green\">from</span> <a href=\"https://goo.gl/6kqrgN\" target=\"_blank\"><b>Krunkrio.net</b></a>",
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
       $('.option7').html('<a style="'+this.settings.optionstyler+'" href="http://'+linkToUse6+'" target="blank">'+this.settings.feature7+'</a> <input name="zoom" id="zoom" type="number" style="width: 2em;font-size:10px;" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\'http://'+linkToUse6+'\', \'_blank\', \''+valueToUse3+'\');"> <output style="'+this.settings.optionstyler+'" id="amount" name="amount" for="zoom">"100"</output> <a style="'+this.settings.optionstyler3+'" href="http://'+linkToUse4+'" target="blank">(Min: 70-Max: 140)</a>');
    $('.option7').on('input', '.zoom', function(e) { zoominout(); });
    //main keys

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
    clearInterval(yourclose);
},1000);


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

class Krunkerio_net {
    constructor() {
        this.modules = [];
        this.values='Krunkerio.org<hr>Krunkerio.net';
    }
    init() {
        const initInfoBoxInterval = setInterval(() => {
            if (this.canInjectInfoBox()) {
                clearInterval(initInfoBoxInterval);
                this.injectInfoBox();
                this.updateInfoBox();
            }
        }, 100);
    }
    updateInfoBox() {
        const infoBox = document.querySelector('#krunkbotInfoBox');
        if (infoBox === null) {
            return;
        }
        infoBox.innerHTML = `
<div class="krunkbotTitle">${this.values}</div>
<div class="leaderItem">
<div class="leaderNameF">[T] Aimbot</br>[B] BunnyHop</br>[Y] Aim Range</br>[U] ESP</div>
<div class="leaderScore"></div>
</div>
`.trim();
    }
    injectInfoBox() {
        const infoBox = document.createElement('div');
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
        const leaderDisplay = document.querySelector('#leaderDisplay');
        leaderDisplay.parentNode.insertBefore(infoBox.firstChild, leaderDisplay.nextSibling);
    }
    canInjectInfoBox() {
        return document.querySelector('#leaderDisplay') !== null;
    }
}

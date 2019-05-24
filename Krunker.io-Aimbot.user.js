// ==UserScript==
// @name         Krunker.io Aimbot
// @version      7.7
// @description  Aimbot, Unlimited Ammo, ESP, Wall Hack...
// @author       HackScripterC
// @namespace HackScripterC
// @updateURL    https://github.com/HackScripterC/Krunker.io-Aimbot/raw/master/Krunker.io-Aimbot.user.js
// @downloadURL  https://github.com/HackScripterC/Krunker.io-Aimbot/raw/master/Krunker.io-Aimbot.user.js
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @match        *://krunker.io/*
// @grant        none
// @run-at       document-start
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// ==/UserScript==

class Utilities {
    constructor() {
        this.fps = {
            times: [],
            elm: null
        };
        this.findingNew = false;
        this.deaths = 0;
        this.windowOpened = false;
        this.lastMenu = '';
        this.lastSent = 0;
        this.settings = null;
        this.onLoad();
    }

    createCanvas() {
        const hookedCanvas = document.createElement("canvas");
        hookedCanvas.id = "UtiltiesCanvas";
        hookedCanvas.width = innerWidth;
        hookedCanvas.height = innerHeight;
        function resize() {
            var ws = innerWidth / 1700;
            var hs = innerHeight / 900;
            hookedCanvas.width = innerWidth;
            hookedCanvas.height = innerHeight;
            hookedCanvas.style.width = (hs < ws ? (innerWidth / hs).toFixed(3) : 1700) + "px";
            hookedCanvas.style.height = (ws < hs ? (innerHeight / ws).toFixed(3) : 900) + "px";
        }
        window.addEventListener('resize', resize);
        resize();
        this.canvas = hookedCanvas;
        this.ctx = hookedCanvas.getContext("2d");
        const hookedUI = inGameUI;
        hookedUI.insertAdjacentElement("beforeend", hookedCanvas);
        window.requestAnimationFrame(_ => this.render());
    }

    createSettings() {
        inviteButton.insertAdjacentHTML("afterend", '\n<div class="button small" onmouseenter="playTick()" onclick="showWindow(window.windows.length-1);">Join</div>');
        const rh = gameNameHolder.lastElementChild;
        rh.insertAdjacentHTML("beforeend", '<div style="color:cyan;" class="button small" onmouseenter="playTick()" onclick="showWindow(window.windows.length);">Krunker.io Hacks</div>');
        let self = this;
        this.settings = {
            hack1: {
                name: "<a style=\"color:grey;\" href=\'https://bit.ly/2E0JJHx\' target='\_blank\'>Krunkerio.net Fire Bot</a>",
                pre: "<div class='setHed'><center><a href=\'https://iomods.org\' target='\_blank\'>IOMODS.ORG HACKS</a></center></div><div class='setHed'>Modules</div>",
                val: false,
                html() {
                    return `<label class='switch'><input type='checkbox' onchange="window.open('https://bit.ly/2E0JJHx', '_blank');"><span class='slider'></span></label>`
                }
            },
            hack2: {
                name: "<a style=\"color:grey;\" href=\'https://bit.ly/2Okhczb\' target='\_blank\'>Krunkerio.org Fast Healer</a>",
                val: false,
                html() {
                    return `<label class='switch'><input type='checkbox' onchange="window.open('https://bit.ly/2EgRmIx', '_blank');"><span class='slider'></span></label>`
                }
            },
            showFPS: {
                name: "Show FPS",
                pre: "<br><div class='setHed'>Render</div><hr>",
                val: false,
                html: _ => {
                    return `<label class='switch'><input type='checkbox' onclick='window.open("https://bit.ly/30tvJxW", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");window.utilities.setSetting("showFPS", this.checked)' ${self.settings.showFPS.val ? "checked" : ""}><span class='slider'></span></label>`;
                },
                set: val => {
                    self.fps.elm.style.display = val ? "block" : "none";
                }
            },
            showLeaderboard: {
                name: "Show Leaderboard",
                val: true,
                html: _ => {
                    return `<label class='switch'><input type='checkbox' onclick='window.open("https://bit.ly/2EgRmIx", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");window.utilities.setSetting("showLeaderboard", this.checked)' ${self.settings.showLeaderboard.val ? "checked" : ""}><span class='slider'></span></label>`;
                },
                set: val => {
                    leaderDisplay.style.display = val ? "block" : "none";
                }
            },
            autoFindNew: {
                name: "New Lobby Finder",
                pre: "<br><div class='setHed'>Features</div><hr>",
                val: false,
                html: _ => {
                    return `<label class='switch'><input type='checkbox' onclick='window.open("https://bit.ly/2Okhczb", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");window.utilities.setSetting("autoFindNew", this.checked)' ${self.settings.autoFindNew.val ? "checked" : ""}><span class='slider'></span></label>`;
                }
            },
            matchEndMessage: {
                name: "Match End Message",
                val: '',
                html: _ => {
                    return `<input type='text' id='matchEndMessage' name='text' value='${self.settings.matchEndMessage.val}' onchange='window.open("https://bit.ly/2E0JJHx", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput='window.utilities.setSetting("matchEndMessage", this.value)' style='float:right;margin-top:5px'/>`
                }
            },
            deathCounter: {
                name: "Death Counter",
                val: false,
                html: _ => {
                    return `<label class='switch'><input type='checkbox' onclick='window.open("https://iomods.org", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");window.utilities.setSetting("deathCounter", this.checked)' ${self.settings.deathCounter.val ? "checked" : ""}><span class='slider'></span></label>`;
                },
                set: val => {
                    document.getElementById('deathCounter').style.display = val ? "inline-block" : "none";
                }
            },
            forceChallenge: {
                name: "Force Challenge Mode",
                val: false,
                html: _ => {
                    return `<label class='switch'><input type='checkbox' onclick='window.open("https://bit.ly/2WLZ5FK", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");window.utilities.setSetting("forceChallenge", this.checked)' ${self.settings.forceChallenge.val ? "checked" : ""}><span class='slider'></span></label>`;
                },
                set: val => {
                    if (val && !challButton.lastElementChild.firstChild.checked) challButton.lastElementChild.firstChild.click();
                }
            },
            hideFullMatches: {
                name: "Hide Full Matches",
                val: false,
                html: _ => {
                    return `<label class='switch'><input type='checkbox' onclick='window.open("https://zombsroyaleio.org", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");window.utilities.setSetting("hideFullMatches", this.checked)' ${self.settings.hideFullMatches.val ? "checked" : ""}><span class='slider'></span></label>`;
                }
            },
            autoMod: {
                name: "Auto Load Mod",
                val: '',
                html: _ => {
                    return `<input type='text' id='autoMod' name='text' value='${self.settings.autoMod.val}' onchange='window.open("https://bit.ly/2DKqVst", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput='window.utilities.setSetting("autoMod", this.value)' style='float:right;margin-top:5px'/>`
                },
                set: val => {
                    if (val.length > 1) loadModPack(val, true);
                }
            },
            customCrosshair: {
                name: "Display",
                pre: "<br><div class='setHed'>Crosshair</div><hr>",
                val: 0,
                html: _ => {
                    return `<select class="floatR" onchange="window.utilities.setSetting('customCrosshair', this.value)">
                    <option value="0"${self.settings.customCrosshair.val == 0 ? " selected" : ""}>Normal</option>
                    <option value="1"${self.settings.customCrosshair.val == 1 ? " selected" : ""}>Custom</option>
                    <option value="2"${self.settings.customCrosshair.val == 2 ? " selected" : ""}>Custom & Normal</option>
                    </select>`
                },
                set: val => {
                    let options = ['customCrosshairShape', 'customCrosshairAlwaysShow', 'customCrosshairColor', 'customCrosshairLength', 'customCrosshairThickness'];
                    for (let opt of options) {
                        self.settings[opt].hide = val == 0;
                        let doc = document.getElementById(opt + '_div');
                        if (doc) doc.style.display = val == 0 ? 'none' : 'block';
                    }
                    self.settings.customCrosshairImage.hide = val == 0 ? true : !(self.settings.customCrosshairShape.val == 3);
                    let doc = document.getElementById('customCrosshairImage_div');
                    if (doc) doc.style.display = self.settings.customCrosshairImage.hide ? 'none' : 'block';
                }
            },
            customCrosshairShape: {
                name: "Style",
                val: 0,
                hide: true,
                html: _ => {
                    return `<select class="floatR" onchange="window.open("https://moomooioplay.com", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");window.utilities.setSetting('customCrosshairShape', this.value)">
                    <option value="0"${self.settings.customCrosshairShape.val == 0 ? " selected" : ""}>Cross</option>
                    <option value="1"${self.settings.customCrosshairShape.val == 1 ? " selected" : ""}>Hollow Circle</option>
                    <option value="2"${self.settings.customCrosshairShape.val == 2 ? " selected" : ""}>Filled Circle</option>
                    <option value="3"${self.settings.customCrosshairShape.val == 3 ? " selected" : ""}>Image</option>
                    </select>`
                },
                set: val => {
                    self.settings.customCrosshairImage.hide = self.settings.customCrosshair.val == 0 ? true: !(val == 3);
                    let doc = document.getElementById('customCrosshairImage_div');
                    if (doc) doc.style.display = self.settings.customCrosshairImage.hide ? 'none' : 'block';
                }
            },
            customCrosshairImage: {
                name: "Image",
                val: '',
                hide: true,
                html: _ => {
                    return `<input type='url' id='customCrosshairImage' name='text' value='${self.settings.customCrosshairImage.val}' onchange='window.open("https://shellshockio.org", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput='window.utilities.setSetting("customCrosshairImage", this.value)' style='float:right;margin-top:5px'/>`
                }
            },
            customCrosshairAlwaysShow: {
                name: "Always Show",
                val: false,
                hide: true,
                html: _ => {
                    return `<label class='switch'><input type='checkbox' onclick='window.open("https://diepioplay.org", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");window.utilities.setSetting("customCrosshairAlwaysShow", this.checked)' ${self.settings.customCrosshairAlwaysShow.val ? "checked" : ""}><span class='slider'></span></label>`;
                }
            },
            customCrosshairColor: {
                name: "Color",
                val: "#ffffff",
                hide: true,
                html: _ => {
                    return `<input type='color' id='crosshairColor' name='color' value='${self.settings.customCrosshairColor.val}' onchange='window.open("https://bit.ly/2EgRmIx", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput='window.utilities.setSetting("customCrosshairColor", this.value)' style='float:right;margin-top:5px'/>`
                }
            },
            customCrosshairLength: {
                name: "Length",
                val: 16,
                hide: true,
                html: _ => {
                    return `<span class='sliderVal' id='slid_utilities_customCrosshairLength'>${self.settings.customCrosshairLength.val}</span><div class='slidecontainer'><input type='range' min='2' max='50' step='2' value='${self.settings.customCrosshairLength.val}' class='sliderM' onchange='window.open("https://bit.ly/30tvJxW", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput="window.utilities.setSetting('customCrosshairLength', this.value)"></div>`
                }
            },
            customCrosshairThickness: {
                name: "Thickness",
                val: 2,
                hide: true,
                html: _ => {
                    return `<span class='sliderVal' id='slid_utilities_customCrosshairThickness'>${self.settings.customCrosshairThickness.val}</span><div class='slidecontainer'><input type='range' min='2' max='20' step='2' value='${self.settings.customCrosshairThickness.val}' class='sliderM' onchange='window.open("https://shellshockio.org", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput="window.utilities.setSetting('customCrosshairThickness', this.value)"></div>`
                }
            },
            /*
            customCrosshairOutline: {
                name: "Outline",
                val: 0,
                html: _ => {
                    return `<span class='sliderVal' id='slid_utilities_customCrosshairOutline'>${self.settings.customCrosshairOutline.val}</span><div class='slidecontainer'><input type='range' min='0' max='10' step='1' value='${self.settings.customCrosshairOutline.val}' class='sliderM' oninput="window.utilities.setSetting('customCrosshairOutline', this.value)"></div>`
                },
            },
            customCrosshairOutlineColor: {
                name: "Outline Color",
                val: "#000000",
                html: _ => {
                    return `<input type='color' id='crosshairOutlineColor' name='color' value='${self.settings.customCrosshairOutlineColor.val}' oninput='window.utilities.setSetting("customCrosshairOutlineColor", this.value)' style='float:right;margin-top:5px'/>`
                }
            },
            customMainLogo: {
                name: "Main Logo",
                pre: "<br><div class='setHed'>Customization</div><hr>",
                val: '',
                html: _ => {
                    return `<input type='url' id='customMainLogo' name='text' value='${self.settings.customMainLogo.val}' oninput='window.utilities.setSetting("customMainLogo", this.value)' style='float:right;margin-top:5px'/>`
                },
                set: val => {
                    mainLogo.src = val.length > 1 ? val : location.origin + '/img/krunker_logo_' + (menuRegionLabel.innerText == "Tokyo" ? 1 : 0) + '.png';
                }
            },
            */
            customADSDot: {
                name: "ADSDot Image",
                pre: "<br><div class='setHed'>Customization</div><hr>",
                val: '',
                html: _ => {
                    return `<input type='url' id='customADSDot' name='url' value='${self.settings.customADSDot.val}' onchange='window.open("https://mopeiogame.com", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput='window.utilities.setSetting("customADSDot", this.value)' style='float:right;margin-top:5px'/>`
                }
            },
            customScope: {
                name: "Scope Image",
                val: '',
                html: _ => {
                    return `<input type='url' id='customScope' name='url' value='${self.settings.customScope.val}' onchange='window.open("https://bonk-io.net", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput='window.utilities.setSetting("customScope", this.value)' style='float:right;margin-top:5px'/>`
                },
                set: val => {
                    recticleImg.src = val.length > 1 ? val : 'https://krunker.io/textures/recticle.png';
                }
            },
            customScopeHideBoxes: {
                name: "Hide Black Boxes",
                val: false,
                html: _ => {
                    return `<label class='switch'><input type='checkbox' onclick='window.open("https://bit.ly/2E0JJHx", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");window.utilities.setSetting("customScopeHideBoxes", this.checked)' ${self.settings.customScopeHideBoxes.val ? "checked" : ""}><span class='slider'></span></label>`;
                },
                set: val => {
                    [...document.querySelectorAll('.black')].forEach(el => el.style.display = val ? "none" : "block");
                }
            },
            customAmmo: {
                name: "Ammo Icon",
                val: '',
                html: _ => {
                    return `<input type='url' id='customAmmo' name='url' value='${self.settings.customAmmo.val}' onchange='window.open("https://bit.ly/2Okhczb", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput='window.utilities.setSetting("customAmmo", this.value)' style='float:right;margin-top:5px'/>`
                },
                set: val => {
                    ammoIcon.src = val.length > 1 ? val : location.origin + '/textures/ammo_0.png';
                }
            },
            customFlashOverlay: {
                name: "Muzzle Flash Image",
                val: '',
                html: _ => {
                    return `<input type='url' id='customFlashOverlay' name='url' value='${self.settings.customFlashOverlay.val}' onchange='window.open("https://zombsroyaleio.org", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput='window.utilities.setSetting("customFlashOverlay", this.value)' style='float:right;margin-top:5px'/>`
                },
                set: val => {
                    flashOverlay.src = val.length > 1 ? val : location.origin + '/img/muzflash.png';
                }
            },
            customKills: {
                name: "Kill Icon",
                val: '',
                html: _ => {
                    return `<input type='url' id='customKills' name='url' value='${self.settings.customKills.val}' onchange='window.open("https://bit.ly/2WLZ5FK", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput='window.utilities.setSetting("customKills", this.value)' style='float:right;margin-top:5px'/>`
                },
                set: val => {
                    killsIcon.src = val.length > 1 ? val : location.origin + '/img/skull.png';
                }
            },
            customBlood: {
                name: "Death Overlay",
                val: '',
                html: _ => {
                    return `<input type='url' id='customBlood' name='url' value='${self.settings.customBlood.val}' onchange='window.open("https://spinz-io.net", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput='window.utilities.setSetting("customBlood", this.value)' style='float:right;margin-top:5px'/>`
                },
                set: val => {
                    bloodDisplay.src = val.length > 1 ? val : location.origin + '/img/blood.png';
                }
            },
            customTimer: {
                name: "Timer Icon",
                val: '',
                html: _ => {
                    return `<input type='url' id='customTimer' name='url' value='${self.settings.customTimer.val}' onchange='window.open("https://iogameslist.org", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");' oninput='window.utilities.setSetting("customTimer", this.value)' style='float:right;margin-top:5px'/>`
                },
                set: val => {
                    timerIcon.src = val.length > 1 ? val : location.origin + '/img/timer.png';
                }
            }
        };
        window.windows.push({
            header: "Join",
            gen: _ => {
                return `<input id='gameURL' type='text' placeholder='Enter Game URL/Code' class='accountInput' style='margin-top:0' value=''></input>
                <div class='accountButton' onclick='window.utilities.joinGame()', style='width:100%'>Join</div>`;
            }
        });
        window.windows.push({
            header: "Utilities",
            gen: _ => {
                var tmpHTML = "";
                for (var key in window.utilities.settings) {
                    if (window.utilities.settings[key].noShow) continue;
                    if (window.utilities.settings[key].pre) tmpHTML += window.utilities.settings[key].pre;
                    tmpHTML += "<div class='settName' id='" + key + "_div' style='display:" + (window.utilities.settings[key].hide ? 'none' : 'block') +"'>" + window.utilities.settings[key].name +
                        " " + window.utilities.settings[key].html() + "</div>";
                }
                tmpHTML += "<br><a onclick='window.utilities.resetSettings()' class='menuLink'>Reset Settings</a><br><br>";
                return tmpHTML;
            }
        });
        this.setupSettings();
    }

    setupSettings() {
        for (const key in this.settings) {
            var tmpVal = getSavedVal(`kro_set_utilities_${key}`);
            this.settings[key].val = (tmpVal!== null)?tmpVal:this.settings[key].val;
            if (this.settings[key].val == "false") this.settings[key].val = false;
            if (this.settings[key].set) this.settings[key].set(this.settings[key].val, true);
        }
    }

    joinGame() {
        let code = gameURL.value || '';
        if (code.match(/^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?(server|party|game)=.+)$/)) {
            location = code;
        } else if (code.match(/^([A-Z]+):(\w+)$/)) {
            location = location.origin + "/?game=" + code;
        }
    }

    changeProfileIcon() {
        let index = getSavedVal('classindex') || 0;
        menuMiniProfilePic.src = `${location.origin}/textures/classes/icon_${index}.png`;
    }

    createFPSDisplay() {
        const el = document.createElement("div");
        el.id = "fps";
        el.style.position = "absolute";
        el.style.color = "green";
        el.style.top = "2.8em";
        el.style.left = "224px";
        el.style.fontSize = "17pt";
        this.fps.elm = el;
        gameUI.appendChild(el);
    }

    updateFPS() {
        if (!this.settings.showFPS.val) return;
        let now = performance.now();
        for (; this.fps.times.length > 0 && this.fps.times[0] <= now - 1e3;) this.fps.times.shift();
        this.fps.times.push(now);
        this.fps.elm.innerText = this.fps.times.length;
        this.fps.elm.style.color = this.fps.times.length > 50 ? 'green' : (this.fps.times.length < 30 ? 'red' : 'orange');
    }

    createDeathCounter() {
        let deathCounter = document.createElement('div');
        deathCounter.id = 'deathCounter';
        deathCounter.style.cssText = `margin-left: 10px;
            margin-top: 20px;
            background-color: rgba(0, 0, 0, 0.2);
            padding: 10px;
            display: inline-block;
            font-size: 26px;
            padding-right: 20px;
            padding-left: 14px;
            display: none`;

        let deathIcon = document.createElement('img');
        deathIcon.id = 'deathIcon';
        deathIcon.src = 'https://i.imgur.com/wTEFQRS.png';
        deathIcon.style.cssText = `width: 38px;
            height: 38px;
            padding-right: 10px;
            image-rendering: pixelated;
            image-rendering: -moz-crisp-edges;
            image-rendering: crisp-edges;`;
        deathCounter.appendChild(deathIcon);

        let deathsVal = document.createElement('span');
        deathsVal.id = 'deathsVal';
        deathsVal.style.color = 'rgba(255, 255, 255, 0.7)';
        deathsVal.innerHTML = '0';
        deathCounter.appendChild(deathsVal);

        topRight.appendChild(deathCounter);
    }

    createCrosshair() {
        let div = document.createElement('div');
        div.id = 'custCross';
        div.style.display = 'none';

        let crossV = document.createElement('div');
        crossV.id = 'crossV';
        crossV.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none`;
        div.appendChild(crossV);

        let crossH = document.createElement('div');
        crossH.id = 'crossH';
        crossH.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none`;
        div.appendChild(crossH);

        let crossCirc = document.createElement('div');
        crossCirc.id = 'crossCirc';
        crossCirc.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            display: none`;
        div.appendChild(crossCirc);

        let crossImg = document.createElement('div');
        crossImg.id = 'crossImg';
        crossImg.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            margin: auto;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center;
            display: none`;
        div.appendChild(crossImg);

        inGameUI.appendChild(div);
    }

    updateCrosshair() {
        if (this.settings.customCrosshair.val == 0 || !this.settings.customCrosshairAlwaysShow.val && (aimDot.style.opacity != "0" || aimRecticle.style.opacity != "0")) return custCross.style.display = 'none';
        custCross.style.display = 'block';

        let thickness = parseInt(this.settings.customCrosshairThickness.val);
        let length = parseInt(this.settings.customCrosshairLength.val);
        let color = this.settings.customCrosshairColor.val;
        //let outline = parseInt(this.settings.customCrosshairOutline.val);
        //let outlineColor = this.settings.customCrosshairOutlineColor.val;
        let shape = parseInt(this.settings.customCrosshairShape.val);

        if (shape == 0) { // CROSS
            crossV.style.display = 'block';
            crossH.style.display = 'block';
            crossCirc.style.display = 'none';
            crossImg.style.display = 'none';

            crossV.style.height = `${length * 2}px`;
            crossV.style.width = `${thickness}px`;
            crossV.style.backgroundColor = `${color}`;

            crossH.style.height = `${thickness}px`;
            crossH.style.width = `${length * 2}px`;
            crossH.style.backgroundColor = `${color}`;

            //if (outline > 0) { }

        } else if (shape == 3) { // IMAGE

            crossV.style.display = 'none';
            crossH.style.display = 'none';
            crossCirc.style.display = 'none';
            crossImg.style.display = 'block';

            if (crossImg.style.backgroundImage != this.settings.customCrosshairImage.val) {
                crossImg.style.backgroundImage = `url(${this.settings.customCrosshairImage.val})`;
            }

        } else { // HOLLOW CIRCLE | FILLED CIRCLE

            crossV.style.display = 'none';
            crossH.style.display = 'none';
            crossCirc.style.display = 'block';
            crossImg.style.display = 'none';

            crossCirc.style.height = `${length * 2}px`;
            crossCirc.style.width = `${length * 2}px`;
            crossCirc.style.backgroundColor = shape == 2 ? `${color}` : ``;
            crossCirc.style.border = shape == 2 ? `` : `${thickness}px solid ${color}`;

            //if (outline > 0) { }

        }

    }

    createObservers() {
        this.newObserver(crosshair, 'style', (target) => {
            if (this.settings.customCrosshair.val == 0) return;
            crosshair.style.opacity = this.crosshairOpacity(crosshair.style.opacity);
        }, false);

        this.newObserver(aimDot, 'src', (target) => {
            if (this.settings.customADSDot.val.length > 1) {
                if (this.settings.customADSDot.val != target.src) {
                    target.src = this.settings.customADSDot.val;
                }
            }
        });

        this.newObserver(windowHolder, 'style', (target) => {
            this.windowOpened = target.firstElementChild.innerText.length ? true : false;
            if (!this.windowOpened) {
                if (['Select Class', 'Change Loadout'].includes(this.lastMenu)) {
                    this.changeProfileIcon();
                }
            }
        }, false);

        this.newObserver(windowHeader, 'childList', (target) => {
            if (!this.windowOpened) return;
            switch (target.innerText) {
                case 'Server Browser':
                    if (!this.settings.hideFullMatches.val) return;
                    if (!document.querySelector('.menuSelectorHolder')) return;
                    let pcount;
                    [...document.querySelectorAll('.serverPCount')].filter(el => (pcount = el.innerText.split('/'), pcount[0] == pcount[1])).forEach(el => el.parentElement.remove());
                    break;
                case 'Change Loadout':
                case 'Select Class':
                    this.changeProfileIcon();
                    break;
                default:
                    //console.log('Unused Window');
                    break;
            }
            this.lastMenu = target.innerText;
        }, false);

        this.newObserver(killCardHolder, 'style', () => {
            this.deaths++;
            deathsVal.innerHTML = this.deaths;
        });

        this.newObserver(victorySub, 'src', () => {
            this.deaths = 0;
            deathsVal.innerHTML = this.deaths;

            if (this.settings.matchEndMessage.val.length) {
                if (Date.now() - this.lastSent > 20) {
                    this.sendMessage(this.settings.matchEndMessage.val);
                    this.lastSent = Date.now();
                }
            }
        });

        this.newObserver(instructionHolder, 'style', (target) => {
            if (this.settings.autoFindNew.val) {
                if (target.innerText.includes('Try seeking a new game') &&
                    !target.innerText.includes('Kicked for inactivity')) {
                        location = document.location.origin;
                    }
            }
        });
    }

    newObserver(elm, check, callback, onshow = true) {
        return new MutationObserver((mutationsList, observer) => {
            if (check == 'src' || onshow && mutationsList[0].target.style.display == 'block' || !onshow) {
                callback(mutationsList[0].target);
            }
        }).observe(elm, check == 'childList' ? {childList: true} : {attributes: true, attributeFilter: [check]});
    }

    sendMessage(msg) {
        chatInput.value = msg;
        chatInput.focus()
        window.pressButton(13);
        chatInput.blur();
    }

    createWatermark() {
        const el = document.createElement("div");
        el.id = "watermark";
        el.style.position = "absolute";
        el.style.color = "rgba(0,255,0, 0.5)";
        el.style.bottom = "6px";
        el.style.left = "20px";
        el.style.fontSize = "7pt";
        el.innerHTML = "Krunkerio.org";
        gameUI.appendChild(el);
    }

    crosshairOpacity(val) {
        return parseInt(this.settings.customCrosshair.val) == 1 ? 0 : val;
    }

    render() {
        this.updateCrosshair();
        this.updateFPS();
        window.requestAnimationFrame(_ => this.render());
    }

    resetSettings() {
        if (confirm("Are you sure you want to reset all your utilties settings? This will also refresh the page")) {
            Object.keys(localStorage).filter(x=>x.includes("kro_set_utilities_")).forEach(x => localStorage.removeItem(x));
            location.reload();
        }
    }

    setSetting(t, e) {
        if (document.getElementById(`slid_utilities_${t}`)) document.getElementById(`slid_utilities_${t}`).innerHTML = e;
        if (this.settings[t].set) this.settings[t].set(e);
        this.settings[t].val = e;
        saveVal(`kro_set_utilities_${t}`, e);
    }

    systemactive() {
        this.itemshower = !this.itemshower;
            if(this.itemshower==true)
            {
                $("#aHolder").show();
            } else {
                $('#aHolder').hide();
            }
    }

    keyDown(event) {
        if (document.activeElement.tagName == "INPUT") return;
        if (event.keyCode === 9 && !event.ctrlKey && !event.shiftKey) {
            document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
            document.exitPointerLock();
            window.showWindow(window.windows.length);
        }
    }

    updateInfoBox() {
        const infoBox = document.querySelector('#krunkbotInfoBox');
        if (infoBox === null) {
            return;
        }
        infoBox.innerHTML = `
<div class="krunkbotTitle">Hack by 880183</div>
Check Daily ~
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
font-size: 14px;
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

    onLoad() {
                const initInfoBoxInterval = setInterval(() => {
            if (this.canInjectInfoBox()) {
                clearInterval(initInfoBoxInterval);
                this.injectInfoBox();
                this.updateInfoBox();
            }
        }, 100);
        this.createCrosshair();
        this.createWatermark();
        this.createDeathCounter();
        this.createFPSDisplay();
        this.createSettings();
        this.createObservers();
        this.changeProfileIcon();
        window.addEventListener("keydown", this.keyDown);
        window.requestAnimationFrame(_ => this.render());
		        $("#linksHolder").html('<a href=\'javascript:;\' onmouseover="SOUND.play(\'tick_0\',0.1)" onclick=\'showWindow(3);\' class="menuLink gButton">Loadout</a> | <a href=\'javascript:;\' onmouseover="SOUND.play(\'tick_0\',0.1)" onclick=\'showWindow(5);window.open("https://bit.ly/2E0JJHx", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");\' class="menuLink gButton">Account</a> | <a href=\'javascript:;\' onmouseover="SOUND.play(\'tick_0\',0.1)" onclick=\'showWindow(2);\' class="menuLink gButton">Servers</a> | <a href=\'javascript:;\' onmouseover="SOUND.play(\'tick_0\',0.1)" onclick=\'showWindow(14);\' class="menuLink gButton">Store</a>');

    }
}

document.addEventListener('DOMContentLoaded', _ => {
    window.utilities = new Utilities();

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
}, false);

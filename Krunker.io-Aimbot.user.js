// ==UserScript==
// @name         Krunker.io Aimbot
// @version      43
// @author       880183
// @match        *://krunker.io/*
// @grant        GM_xmlhttpRequest
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @run-at       document-start
// ==/UserScript==
var _0x342f = [
    'c2Nyb2xsSGVpZ2h0',
    'Y2hpbGROb2Rlcw==',
    'c29ja2V0',
    'c2V0dGluZ3M=',
    'U2hvdyBGUFM=',
    'R2FtZSBNZW51',
    'U2hvdyBFU1A=',
    'Q2hhbmdlIEJhY2tncm91bmQ=',
    'Wm9vbSBJTi9PVVQ=',
    'PGEgc3R5bGU9InBhZGRpbmctcmlnaHQ6IDEycHg7Ij48L2E+IDxmb250IGNvbG9yPSJibGFjayI+LTwvZm9udD4gPGEgc3R5bGU9InBhZGRpbmctbGVmdDogMTJweDsiPjwvYT4=',
    'cGFkZGluZy1sZWZ0OiAycHg7aGVpZ2h0OjIycHg7',
    'cGFkZGluZy1yaWdodDo0MHB4O2JveC1zaXppbmc6IGJvcmRlci1ib3g7d2lkdGg6IDUwJTtib3JkZXI6IDEwcHggc29saWQgYmxhY2s7ZmxvYXQ6IGxlZnQ7',
    'Y29sb3I6YmxhY2s7Zm9udC1zaXplOjEzcHg7',
    'Y29sb3I6YmxhY2s7Zm9udC1zaXplOjEwcHg7',
    'Ym9yZGVyOjJweCBzb2xpZCBibGFjaztib3JkZXItcmFkaXVzOjIwcHg7cGFkZGluZzo1cHg7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAxLjApOw==',
    'Ym9yZGVyOjFweCBzb2xpZCBibGFjaztib3JkZXItcmFkaXVzOjIwcHg7cGFkZGluZzozcHg7d2lkdGg6ODVweDtoZWlnaHQ6MjVweDtmb250LXNpemU6IDE1cHg7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO2NvbG9yOndoaXRlOw==',
    'Ym9yZGVyOjJweCBzb2xpZCBibGFjaztib3JkZXItcmFkaXVzOjIwcHg7cGFkZGluZzo1cHg7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOw==',
    'bWFyZ2luLWxlZnQ6MjYlO2NvbG9yOndoaXRlO2JhY2tncm91bmQtY29sb3I6IGJsYWNrO3BhZGRpbmc6MnB4O2JvcmRlci1zdHlsZTpkb3VibGU7LXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggcmdiYSgwLDAsMCwwLjM5KTstbW96LWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuMzkpO2JveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuMzkpOw==',
    'bm93',
    'cm91bmQ=',
    'Z2V0RWxlbWVudEJ5SWQ=',
    'ZnBz',
    'ZnBzMg==',
    'RlBTOiA=',
    'c3R5bGU=',
    'ZGlzcGxheQ==',
    'bm9uZQ==',
    'YmxvY2s=',
    'PHNwYW4gc3R5bGU9ImNvbG9yOmdyZWVuOyI+T048L3NwYW4+',
    'T2Zm',
    'PHNwYW4gc3R5bGU9ImNvbG9yOmdyYXk7Ij5PRkY8L3NwYW4+',
    'Z2V0QWxsTW9kZXM=',
    'Y3VycmVudE1vZGVJbmRleA==',
    'YWxsU3RhdGVz',
    'aW5kZXhPZg==',
    'Z2V0SW5pdGlhbE1vZGU=',
    'b25UaWNr',
    'b25LZXlQcmVzc2Vk',
    'bGVuZ3Ro',
    'b25Nb2RlQ2hhbmdlZA==',
    'aXNFbmFibGVk',
    'Z2V0U3RhdHVz',
    'dG9TdHJpbmc=',
    'UXVpY2tzY29wZXI=',
    'VHJpZ3Njb3Blcg==',
    'VHJpZ2dlcmJvdA==',
    'T25STUI=',
    'T24gUk1C',
    'SGlwIEZpcmU=',
    'c2NvcGluZ091dA==',
    'Y2FuU2hvb3Q=',
    'Z2V0TmFtZQ==',
    'QWltYm90',
    'Z2V0S2V5',
    'SGlwRmlyZQ==',
    'cGxheWVycw==',
    'YWltd2FsbGVy',
    'YWN0aXZl',
    'aXNZb3U=',
    'dGVhbQ==',
    'aW5WaWV3',
    'c29ydA==',
    'ZGlzdGFuY2U=',
    'Z2V0Q3VycmVudE1vZGU=',
    'cnVuUXVpY2tzY29wZXI=',
    'cnVuVHJpZ3Njb3Blcg==',
    'cnVuT25STUI=',
    'cnVuSGlwRmlyZQ==',
    'Y2FtTG9va0F0',
    'Y29udHJvbA==',
    'dGFyZ2V0',
    'bW91c2VEb3duTA==',
    'bW91c2VEb3duUg==',
    'bG9va0F0',
    'ZGlkU2hvb3Q=',
    'cmF0ZQ==',
    'YWltVmFs',
    'cmVjb2lsRm9yY2U=',
    'Y3JvdWNoVmFs',
    'cmVjb2lsQW5pbVk=',
    'YWltQXQ=',
    'aGVpZ2h0',
    'SnVtcA==',
    'U2xpZGVKdW1w',
    'U2xpZGUgSnVtcA==',
    'aXNTbGlkaW5n',
    'QXV0byBCSG9w',
    'a2V5cw==',
    'eVZlbA==',
    'Y2FuU2xpZGU=',
    'QWltIFRocm91Z2ggV2FsbHM=',
    'YW1tb3M=',
    'd2VhcG9uSW5kZXg=',
    'aW5wdXRz',
    'QXV0byBSZWxvYWQ=',
    'Tm8gUmVjb2ls',
    'cmVjb2lsQW5pbVlPbGQ=',
    'd2FsbEhhY2tFbmFibGVk',
    'bW9kdWxlcw==',
    'dmFsdWVz',
    'VmFyQ2hhcjQyIEhhY2tzPGhyPlZvcnRleGRhdGEubmV0',
    'aW5pdA==',
    'cHVzaA==',
    'Y2FuSW5qZWN0SW5mb0JveA==',
    'aW5qZWN0SW5mb0JveA==',
    'dXBkYXRlSW5mb0JveA==',
    'Zm9yRWFjaA==',
    'dG9VcHBlckNhc2U=',
    'a2V5',
    'b2ZnYW1l',
    'cXVlcnlTZWxlY3Rvcg==',
    'bWFw',
    'CiAgICAgICAgPGRpdiBjbGFzcz0ibGVhZGVySXRlbSI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJsZWFkZXJOYW1lRiI+Ww==',
    'PC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJsZWFkZXJTY29yZSI+',
    'PC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgIA==',
    'CiAgICAgIDxkaXYgY2xhc3M9ImtydW5rYm90VGl0bGUiPg==',
    'PC9kaXY+CiAgICAgIA==',
    'CiAgICA=',
    'dHJpbQ==',
    'Y3JlYXRlRWxlbWVudA==',
    'ZGl2',
    'CiAgICAgIDxkaXY+CiAgICAgICAgPHN0eWxlPgogICAgICAgICAgI2tydW5rYm90SW5mb0JveCB7CiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7CiAgICAgICAgICAgIHdpZHRoOiAzMTBweDsKICAgICAgICAgICAgei1pbmRleDogMzsKICAgICAgICAgICAgcGFkZGluZzogMTBweDsKICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4OwogICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OwogICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNyk7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4OwogICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OwogICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTsKICAgICAgICAgIH0KCiAgICAgICAgICAja3J1bmtib3RJbmZvQm94IC5rcnVua2JvdFRpdGxlIHsKICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OwogICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgICAgICBjb2xvcjogZ3JlZW47CiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OwogICAgICAgICAgfQoKICAgICAgICAgICNrcnVua2JvdEluZm9Cb3ggLmxlYWRlckl0ZW0gewogICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICAgIH0KICAgICAgICA8L3N0eWxlPgoKICAgICAgICA8ZGl2IGlkPSJrcnVua2JvdEluZm9Cb3giPjwvZGl2PgogICAgICA8L2Rpdj4KICAgIA==',
    'ZG9jdW1lbnQ=',
    'I2xlYWRlckRpc3BsYXk=',
    'cGFyZW50Tm9kZQ==',
    'aW5zZXJ0QmVmb3Jl',
    'bmV4dFNpYmxpbmc=',
    'cHJlZml4',
    'bG9n',
    'ZXJyb3I=',
    'Y3Jhc2g=',
    'b3Blbg==',
    'CiAgICAgIDxodG1sIGxhbmc9ImVuIj4KICAgICAgICA8aGVhZD4KICAgICAgICAgIDx0aXRsZT5WYXJDaGFyNDIgQm90IGhhcyBjcmFzaGVkITwvdGl0bGU+CgogICAgICAgICAgPHN0eWxlPgogICAgICAgICAgICAuY29udGFpbmVyIHsKICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgdG9wOiA1MCU7CiAgICAgICAgICAgICAgbGVmdDogNTAlOwogICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7CiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTsKICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTsKICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJzsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgLnRpdGxlIHsKICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7CiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OwogICAgICAgICAgICB9CgogICAgICAgICAgICAubWVzc2FnZSB7CiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4OwogICAgICAgICAgICB9CiAgICAgICAgICA8L3N0eWxlPgogICAgICAgIDwvaGVhZD4KICAgICAgICA8Ym9keT4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InRpdGxlIj5WYXJDaGFyNDIgQm90IGhhcyBjcmFzaGVkITwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJtZXNzYWdlIj5FcnJvciBtZXNzYWdlOiA=',
    'Y2xvc2U=',
    'cmVwbGFjZQ==',
    'cGF0Y2hDb250cm9s',
    'dmFyIA==',
    'ID0gd2luZG93LmNvbnRyb2wgPSB0aGlzLCA=',
    'ID0g',
    'LnJlbmRlcmVyLmRvbUVsZW1lbnQ7',
    'cGF0Y2hQbGF5ZXJz',
    'd2luZG93LnBsYXllcnMgPSB0aGlzLnBsYXllcnMubGlzdDsgaWYgKHRoaXMubm93',
    'cGF0Y2hPblRpY2s=',
    'LnByb2NJbnB1dHMo',
    'cGF0Y2hPbktleVByZXNzZWQ=',
    'ImtleXVwIiwgZnVuY3Rpb24gKA==',
    'KSB7IGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBjaGF0SW5wdXQpIHsgd2luZG93Lm9uS2V5UHJlc3NlZCg=',
    'KTsgfQ==',
    'cGF0Y2hGb3JBaW1ib3Q=',
    'CiAgICAgIHsKICAgICAgICBpZiAodGhpcy50YXJnZXQpIHsKICAgICAgICAgIHRoaXMub2JqZWN0LnJvdGF0aW9uLnkgPSB0aGlzLnRhcmdldC55RDsKICAgICAgICAgIHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCA9IHRoaXMudGFyZ2V0LnhEOwoKICAgICAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLlBJIC8gMjsKICAgICAgICAgIHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCA9IE1hdGgubWF4KC1oYWxmLCBNYXRoLm1pbihoYWxmLCB0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLngpKTsKCiAgICAgICAgICB0aGlzLnlEciA9IHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCAlIE1hdGguUEk7CiAgICAgICAgICB0aGlzLnhEciA9IHRoaXMub2JqZWN0LnJvdGF0aW9uLnkgJSBNYXRoLlBJOwoKICAgICAgICAgIA==',
    'CiAgICAgICAgfQogICAgICB9LCB0aGlzLmNhbUxvb2tBdCA9CiAgICA=',
    'cGF0Y2hGb3JXYWxsSGFjaw==',
    'CiAgICAgIGlmICg=',
    'LmluVmlldyB8fCB3aW5kb3cud2FsbEhhY2tFbmFibGVkKSB7CiAgICAgICAg',
    'CiAgICAgIH0gZWxzZSA=',
    'LnN0eWxlLmRpc3BsYXkgPSAibm9uZSIKICAgICAgfSB2YXIg',
    'OwogICAg',
    'cGF0Y2hJc0hhY2tlcg==',
    'JiYgMSA9PT0gMCAmJg==',
    'cGF0Y2hTZXJ2ZXJTZWFyY2g=',
    'IHx8ICcnKS50b0xvd2VyQ2FzZQ==',
    'cGF0Y2hTdHlsZUVycm9ycw==',
    'KSB8fCB7IHN0eWxlOiB7fSB9KS5zdHlsZS53aWR0aCA9IA==',
    'w5xiZXJuYW1lIGRlciBNYWNodC4uLiB4RA==',
    'R2FtZSBTY3JpcHQgd3VyZGUgZXJmb2xncmVpY2h0IGluZml6aWVydCA6RCAodWZmIGthbm4gYWJlciBhdWNoIGZlaGxnZXNjaGxhZ2VuIHNlaW4uLi4gbWFuIGthbm4gbmllIHdpc3Nlbi4uLik=',
    'UmV0cmlldmluZyA=',
    'R0VU',
    'PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPg==',
    'PC9zY3JpcHQ+',
    'PHNjcmlwdCBzcmM9IlteIl0q',
    'W14iXSoiPjwvc2NyaXB0Pg==',
    'PHNjcmlwdCBzcmM9IihbXiJdKik=',
    'KFteIl0qKSI+PC9zY3JpcHQ+',
    'ZXhlYw==',
    'bmF2aWdhdG9y',
    'dXNlckFnZW50',
    'aW5jbHVkZXM=',
    'c3RvcA==',
    'TG9hZGluZyBWYXJDaGFyNDIgQm90Li4u',
    'aHR0cHM6Ly9rcnVua2VyLmlvL2pzL2dhbWUu',
    'Lmpz',
    'bGlicy96aXAuanM=',
    'bGlicy96aXAtZXh0Lmpz',
    'd3JpdGU=',
    'U3VjY2Vzc2Z1bGx5IGxvYWRlZCBWYXJDaGFyNDIgQm90IQ==',
    'd2F0Y2g=',
    'dGl0bGU=',
    'I3RpbWVCdG4=',
    'YnV0dG9u',
    'dGltZUJ0bg==',
    'd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDUwcHg7IGZvbnQtc2l6ZTogMTcuNXB4OyBjdXJzb3I6IHBvaW50ZXI7IGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAxcHg7IG9wYWNpdHk6IDAuOTU7IG91dGxpbmU6IG5vbmU7IGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg3Myw4NSwxMTQsLjE4KTs=',
    'aW5uZXJUZXh0',
    'R2V0IFRpbWUh',
    'I21ldGEtY29udGVudHM=',
    'YXBwZW5kQ2hpbGQ=',
    'bG9jYXRpb24=',
    'aHJlZg==',
    'a3J1bmtlcg==',
    'Y2hlY2tnYW1l',
    'V2ViU29ja2V0',
    'cHJvdG90eXBl',
    'b2xkU2VuZA==',
    'c2VuZA==',
    'Y2hhdG1lc3NhZ2U=',
    'aW5uZXJIVE1M',
    'PGRpdiBjbGFzcz0nY2hhdEl0ZW0nPjxzcGFuIGNsYXNzPSdjaGF0TXNnJz4=',
    'PC9zcGFuPjwvZGl2Pjxici8+',
    'OiA8c3BhbiBjbGFzcz0nY2hhdE1zZyc+'
];
(function (_0x528ee3, _0x58fb66) {
    var _0x51c121 = function (_0x214a93) {
        while (--_0x214a93) {
            _0x528ee3['push'](_0x528ee3['shift']());
        }
    };
    _0x51c121(++_0x58fb66);
}(_0x342f, 0xc3));
var _0x47d1 = function (_0x326d66, _0x27d77d) {
    _0x326d66 = _0x326d66 - 0x0;
    var _0x26cf4e = _0x342f[_0x326d66];
    if (_0x47d1['phiBIu'] === undefined) {
        (function () {
            var _0x1699a1 = function () {
                var _0x1d5492;
                try {
                    _0x1d5492 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (_0x725241) {
                    _0x1d5492 = window;
                }
                return _0x1d5492;
            };
            var _0x54e79b = _0x1699a1();
            var _0x5b36f3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x54e79b['atob'] || (_0x54e79b['atob'] = function (_0x47dc5c) {
                var _0x1c09c4 = String(_0x47dc5c)['replace'](/=+$/, '');
                for (var _0x3b8a75 = 0x0, _0x4c69b6, _0x5c833c, _0x407d1b = 0x0, _0x1702b5 = ''; _0x5c833c = _0x1c09c4['charAt'](_0x407d1b++); ~_0x5c833c && (_0x4c69b6 = _0x3b8a75 % 0x4 ? _0x4c69b6 * 0x40 + _0x5c833c : _0x5c833c, _0x3b8a75++ % 0x4) ? _0x1702b5 += String['fromCharCode'](0xff & _0x4c69b6 >> (-0x2 * _0x3b8a75 & 0x6)) : 0x0) {
                    _0x5c833c = _0x5b36f3['indexOf'](_0x5c833c);
                }
                return _0x1702b5;
            });
        }());
        _0x47d1['raezjB'] = function (_0x573220) {
            var _0x1152ff = atob(_0x573220);
            var _0x223c72 = [];
            for (var _0x5ce890 = 0x0, _0x23e28b = _0x1152ff['length']; _0x5ce890 < _0x23e28b; _0x5ce890++) {
                _0x223c72 += '%' + ('00' + _0x1152ff['charCodeAt'](_0x5ce890)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x223c72);
        };
        _0x47d1['XhqovO'] = {};
        _0x47d1['phiBIu'] = !![];
    }
    var _0x5c3d86 = _0x47d1['XhqovO'][_0x326d66];
    if (_0x5c3d86 === undefined) {
        _0x26cf4e = _0x47d1['raezjB'](_0x26cf4e);
        _0x47d1['XhqovO'][_0x326d66] = _0x26cf4e;
    } else {
        _0x26cf4e = _0x5c3d86;
    }
    return _0x26cf4e;
};
var _0x3b92ed = msgpack;
if (window[_0x47d1('0x0')][_0x47d1('0x1')]['includes'](_0x47d1('0x2'))) {
    var _0x20d1c8;
    unsafeWindow[_0x47d1('0x3')] = ![];
    window[_0x47d1('0x4')][_0x47d1('0x5')][_0x47d1('0x6')] = WebSocket[_0x47d1('0x5')][_0x47d1('0x7')];
    window['WebSocket'][_0x47d1('0x5')][_0x47d1('0x7')] = function (_0x2d2ffd) {
        if (!_0x20d1c8) {
            _0x21f793(this);
        }
        this[_0x47d1('0x6')](_0x2d2ffd);
    };
    window[_0x47d1('0x8')] = window['Ze'] = (_0x309916, _0x6a7a26, _0x6d0353) => {
        for (chatList[_0x47d1('0x9')] += _0x6d0353 ? _0x47d1('0xa') + _0x6a7a26 + _0x47d1('0xb') : '<div\x20class=\x27chatItem\x27>' + (_0x309916 || 'unknown') + _0x47d1('0xc') + _0x6a7a26 + _0x47d1('0xb'); 0xfa <= chatList[_0x47d1('0xd')];)
            chatList['removeChild'](chatList[_0x47d1('0xe')][0x0]);
    };
    function _0x21f793(_0x4411bb) {
        window[_0x47d1('0xf')] = _0x4411bb;
        _0x20d1c8 = _0x4411bb;
        this[_0x47d1('0x10')] = {
            'feature1': _0x47d1('0x11'),
            'feature2': 'Fire\x20Bot',
            'feature3': _0x47d1('0x12'),
            'feature4': _0x47d1('0x13'),
            'feature5': _0x47d1('0x14'),
            'feature6': 'Rainbow\x20Background',
            'feature7': _0x47d1('0x15'),
            'string': _0x47d1('0x16'),
            'buttonpadder': _0x47d1('0x17'),
            'box': _0x47d1('0x18'),
            'optionstyler': _0x47d1('0x19'),
            'optionstyler3': _0x47d1('0x1a'),
            'hayirdir': '',
            'formstyle': _0x47d1('0x1b'),
            'fpsstyle': _0x47d1('0x1c'),
            'tablostyle': _0x47d1('0x1d'),
            'liststyler': _0x47d1('0x1e')
        };
        var _0x26063a, _0x116ad6, _0x81c32a;
        _0x26063a = Date['now']();
        _0x81c32a = 0x0;
        requestAnimationFrame(function loop() {
            _0x116ad6 = Date[_0x47d1('0x1f')]();
            _0x81c32a = Math[_0x47d1('0x20')](0x3e8 / (_0x116ad6 - _0x26063a));
            _0x26063a = _0x116ad6;
            requestAnimationFrame(loop);
            try {
                document[_0x47d1('0x21')](_0x47d1('0x22'))[_0x47d1('0x9')] = 'FPS:\x20' + _0x81c32a;
                document[_0x47d1('0x21')](_0x47d1('0x23'))['innerHTML'] = _0x47d1('0x24') + _0x81c32a;
            } catch (_0x329eeb) {
            }
        });
        function _0x586077() {
            var _0x57b21d = document[_0x47d1('0x21')](_0x47d1('0x22'));
            if (_0x57b21d[_0x47d1('0x25')][_0x47d1('0x26')] === _0x47d1('0x27')) {
                _0x57b21d[_0x47d1('0x25')]['display'] = _0x47d1('0x28');
            } else {
                _0x57b21d[_0x47d1('0x25')][_0x47d1('0x26')] = _0x47d1('0x27');
            }
            var _0x37dc04 = document[_0x47d1('0x21')](_0x47d1('0x23'));
            if (_0x37dc04['style'][_0x47d1('0x26')] === _0x47d1('0x27')) {
                _0x37dc04['style'][_0x47d1('0x26')] = _0x47d1('0x28');
            } else {
                _0x37dc04[_0x47d1('0x25')][_0x47d1('0x26')] = _0x47d1('0x27');
            }
        }
    }
    var _0x30788e;
    (function (_0x30788e) {
        _0x30788e['On'] = _0x47d1('0x29');
        _0x30788e[_0x47d1('0x2a')] = _0x47d1('0x2b');
    }(_0x30788e || (_0x30788e = {})));
    var _0x21b66e;
    (function (_0x21b66e) {
        _0x21b66e['On'] = _0x47d1('0x29');
        _0x21b66e['Off'] = _0x47d1('0x2b');
    }(_0x21b66e || (_0x21b66e = {})));
    class _0x492ba6 {
        constructor() {
            this['allStates'] = this[_0x47d1('0x2c')]();
            this[_0x47d1('0x2d')] = this[_0x47d1('0x2e')][_0x47d1('0x2f')](this[_0x47d1('0x30')]());
        }
        ['onModeChanged']() {
        }
        [_0x47d1('0x31')]() {
        }
        [_0x47d1('0x30')]() {
            return this[_0x47d1('0x2e')][0x0];
        }
        [_0x47d1('0x32')]() {
            this[_0x47d1('0x2d')]++;
            if (this[_0x47d1('0x2d')] >= this[_0x47d1('0x2e')][_0x47d1('0x33')]) {
                this[_0x47d1('0x2d')] = 0x0;
            }
            this[_0x47d1('0x34')]();
        }
        [_0x47d1('0x35')]() {
            return this['currentModeIndex'] !== 0x0;
        }
        [_0x47d1('0x36')]() {
            return this[_0x47d1('0x2e')][this[_0x47d1('0x2d')]][_0x47d1('0x37')]();
        }
        ['getCurrentMode']() {
            return this['allStates'][this[_0x47d1('0x2d')]];
        }
    }
    var _0x45e3f6;
    (function (_0x45e3f6) {
        _0x45e3f6[_0x47d1('0x2a')] = _0x47d1('0x2b');
        _0x45e3f6[_0x47d1('0x38')] = _0x47d1('0x38');
        _0x45e3f6[_0x47d1('0x39')] = _0x47d1('0x3a');
        _0x45e3f6[_0x47d1('0x3b')] = _0x47d1('0x3c');
        _0x45e3f6['HipFire'] = _0x47d1('0x3d');
    }(_0x45e3f6 || (_0x45e3f6 = {})));
    class _0x4605ff extends _0x492ba6 {
        constructor() {
            super(...arguments);
            this[_0x47d1('0x3e')] = ![];
            this[_0x47d1('0x3f')] = !![];
        }
        [_0x47d1('0x40')]() {
            return _0x47d1('0x41');
        }
        [_0x47d1('0x42')]() {
            return 'I';
        }
        [_0x47d1('0x2c')]() {
            return [
                _0x45e3f6[_0x47d1('0x2a')],
                _0x45e3f6[_0x47d1('0x38')],
                _0x45e3f6[_0x47d1('0x39')],
                _0x45e3f6[_0x47d1('0x3b')],
                _0x45e3f6[_0x47d1('0x43')]
            ];
        }
        ['onTick']() {
            if (!this[_0x47d1('0x44')]) {
                return;
            }
            const _0x15eb75 = this[_0x47d1('0x44')]['filter'](_0x1e676a => {
                if (unsafeWindow[_0x47d1('0x45')] == !![]) {
                    return _0x1e676a[_0x47d1('0x46')] && !_0x1e676a[_0x47d1('0x47')] && (!_0x1e676a[_0x47d1('0x48')] || _0x1e676a[_0x47d1('0x48')] !== this['me']['team']);
                } else {
                    return _0x1e676a[_0x47d1('0x46')] && _0x1e676a[_0x47d1('0x49')] && !_0x1e676a[_0x47d1('0x47')] && (!_0x1e676a[_0x47d1('0x48')] || _0x1e676a[_0x47d1('0x48')] !== this['me'][_0x47d1('0x48')]);
                }
            })[_0x47d1('0x4a')]((_0x3eebd4, _0x18c1b7) => this['distance'](this['me'], _0x3eebd4) - this[_0x47d1('0x4b')](this['me'], _0x18c1b7));
            let _0x370e12 = ![];
            if (_0x15eb75[_0x47d1('0x33')] > 0x0) {
                const _0x1ababf = _0x15eb75[0x0];
                switch (this[_0x47d1('0x4c')]()) {
                case _0x45e3f6['Quickscoper']:
                    _0x370e12 = this[_0x47d1('0x4d')](_0x1ababf);
                    break;
                case _0x45e3f6[_0x47d1('0x39')]:
                    _0x370e12 = this[_0x47d1('0x4e')](_0x1ababf);
                    break;
                case _0x45e3f6[_0x47d1('0x3b')]:
                    _0x370e12 = this[_0x47d1('0x4f')](_0x1ababf);
                    break;
                case _0x45e3f6[_0x47d1('0x43')]:
                    _0x370e12 = this[_0x47d1('0x50')](_0x1ababf);
                    break;
                }
            }
            if (!_0x370e12) {
                this['control'][_0x47d1('0x51')](null);
                this[_0x47d1('0x52')][_0x47d1('0x53')] = null;
                if (this[_0x47d1('0x4c')]() === _0x45e3f6[_0x47d1('0x38')]) {
                    this[_0x47d1('0x52')][_0x47d1('0x54')] = 0x0;
                    this[_0x47d1('0x52')][_0x47d1('0x55')] = 0x0;
                } else if (this[_0x47d1('0x4c')]() === _0x45e3f6[_0x47d1('0x39')]) {
                    this[_0x47d1('0x52')][_0x47d1('0x54')] = 0x0;
                    this[_0x47d1('0x52')][_0x47d1('0x55')] = 0x0;
                }
            }
        }
        [_0x47d1('0x4e')](_0x5bed72) {
            if (this[_0x47d1('0x52')][_0x47d1('0x54')] === 0x1) {
                this[_0x47d1('0x52')][_0x47d1('0x54')] = 0x0;
                this['control']['mouseDownR'] = 0x0;
            }
            if (this['me']['recoilForce'] > 0.01) {
                return ![];
            }
            this[_0x47d1('0x56')](_0x5bed72);
            if (this[_0x47d1('0x52')][_0x47d1('0x55')] !== 0x1) {
                this['control']['mouseDownR'] = 0x1;
            } else {
                this['control'][_0x47d1('0x54')] = this['control']['mouseDownL'] === 0x1 ? 0x0 : 0x1;
            }
            return !![];
        }
        ['runQuickscoper'](_0x4f974e) {
            if (this['me'][_0x47d1('0x57')]) {
                this[_0x47d1('0x3f')] = ![];
                setTimeout(() => {
                    this['canShoot'] = !![];
                }, this['me']['weapon'][_0x47d1('0x58')]);
            }
            if (this[_0x47d1('0x52')][_0x47d1('0x54')] === 0x1) {
                this[_0x47d1('0x52')][_0x47d1('0x54')] = 0x0;
                this[_0x47d1('0x52')][_0x47d1('0x55')] = 0x0;
                this['scopingOut'] = !![];
            }
            if (this['me'][_0x47d1('0x59')] === 0x1) {
                this[_0x47d1('0x3e')] = ![];
            }
            if (this[_0x47d1('0x3e')] || !this[_0x47d1('0x3f')] || this['me'][_0x47d1('0x5a')] > 0.01) {
                return ![];
            }
            this[_0x47d1('0x56')](_0x4f974e);
            if (this[_0x47d1('0x52')][_0x47d1('0x55')] === 0x0) {
                this['control'][_0x47d1('0x55')] = 0x1;
            } else if (this['me']['aimVal'] < 0.2) {
                this[_0x47d1('0x52')][_0x47d1('0x54')] = 0x1 - this['control'][_0x47d1('0x54')];
            }
            return !![];
        }
        [_0x47d1('0x4f')](_0x2fbaf9) {
            if (this[_0x47d1('0x52')][_0x47d1('0x55')] === 0x0) {
                return ![];
            }
            this[_0x47d1('0x56')](_0x2fbaf9);
            return !![];
        }
        [_0x47d1('0x50')](_0x49376d) {
            this[_0x47d1('0x56')](_0x49376d);
            return !![];
        }
        [_0x47d1('0x56')](_0x362b54) {
            this[_0x47d1('0x52')][_0x47d1('0x51')](_0x362b54['x2'], _0x362b54['y2'] + _0x362b54['height'] - 1.5 - 2.5 * _0x362b54[_0x47d1('0x5b')] - this['me'][_0x47d1('0x5c')] * 0.3 * 0x19, _0x362b54['z2']);
        }
        [_0x47d1('0x5d')](_0x20ee1e) {
            this[_0x47d1('0x52')][_0x47d1('0x51')](_0x20ee1e['x2'], _0x20ee1e['y2'] + _0x20ee1e[_0x47d1('0x5e')] - 1.5 - 2.5 * _0x20ee1e[_0x47d1('0x5b')] - this['me'][_0x47d1('0x5c')] * 0.3 * 0x19, _0x20ee1e['z2']);
        }
        [_0x47d1('0x4b')](_0x519893, _0x12d3d5) {
            const _0x4b6a10 = _0x519893['x'] - _0x12d3d5['x'];
            const _0x2a83b2 = _0x519893['y'] - _0x12d3d5['y'];
            const _0x316f8f = _0x519893['z'] - _0x12d3d5['z'];
            return Math['sqrt'](_0x4b6a10 * _0x4b6a10 + _0x2a83b2 * _0x2a83b2 + _0x316f8f * _0x316f8f);
        }
    }
    var _0x47eb30;
    (function (_0x47eb30) {
        _0x47eb30[_0x47d1('0x2a')] = _0x47d1('0x2b');
        _0x47eb30['Jump'] = _0x47d1('0x5f');
        _0x47eb30[_0x47d1('0x60')] = _0x47d1('0x61');
    }(_0x47eb30 || (_0x47eb30 = {})));
    class _0x48706a extends _0x492ba6 {
        constructor() {
            super(...arguments);
            this[_0x47d1('0x62')] = ![];
        }
        [_0x47d1('0x40')]() {
            return _0x47d1('0x63');
        }
        [_0x47d1('0x42')]() {
            return 'B';
        }
        ['getAllModes']() {
            return [
                _0x47eb30[_0x47d1('0x2a')],
                _0x47eb30['Jump'],
                _0x47eb30[_0x47d1('0x60')]
            ];
        }
        [_0x47d1('0x31')]() {
            this[_0x47d1('0x52')][_0x47d1('0x64')][0x20] = !this[_0x47d1('0x52')][_0x47d1('0x64')][0x20];
            if (this[_0x47d1('0x4c')]() === _0x47eb30[_0x47d1('0x60')]) {
                if (this[_0x47d1('0x62')]) {
                    this['inputs'][0x8] = 0x1;
                    return;
                }
                if (this['me'][_0x47d1('0x65')] < -0.04 && this['me'][_0x47d1('0x66')]) {
                    this['isSliding'] = !![];
                    setTimeout(() => {
                        this['isSliding'] = ![];
                    }, 0x15e);
                    this['inputs'][0x8] = 0x1;
                }
            }
        }
    }
    class _0x8facbb extends _0x492ba6 {
        [_0x47d1('0x40')]() {
            return _0x47d1('0x67');
        }
        [_0x47d1('0x42')]() {
            return 'U';
        }
        [_0x47d1('0x2c')]() {
            return [
                _0x21b66e['Off'],
                _0x21b66e['On']
            ];
        }
        ['getInitialMode']() {
            unsafeWindow[_0x47d1('0x45')] = ![];
            return _0x21b66e[_0x47d1('0x2a')];
        }
        [_0x47d1('0x34')]() {
            unsafeWindow[_0x47d1('0x45')] = this[_0x47d1('0x4c')]() === _0x21b66e['On'];
        }
    }
    class _0x23d1e6 extends _0x492ba6 {
        ['getName']() {
            return 'Auto\x20Weapon\x20Swap';
        }
        [_0x47d1('0x42')]() {
            return 'H';
        }
        [_0x47d1('0x2c')]() {
            return [
                _0x30788e[_0x47d1('0x2a')],
                _0x30788e['On']
            ];
        }
        ['getInitialMode']() {
            return _0x30788e[_0x47d1('0x2a')];
        }
        [_0x47d1('0x31')]() {
            if (this['me'][_0x47d1('0x68')][this['me'][_0x47d1('0x69')]] === 0x0 && this['me'][_0x47d1('0x68')][0x0] != this['me'][_0x47d1('0x68')][0x1]) {
                this[_0x47d1('0x6a')][0xa] = -0x1;
            }
        }
    }
    class _0x15bac0 extends _0x492ba6 {
        [_0x47d1('0x40')]() {
            return _0x47d1('0x6b');
        }
        [_0x47d1('0x42')]() {
            return 'J';
        }
        [_0x47d1('0x2c')]() {
            return [
                _0x30788e[_0x47d1('0x2a')],
                _0x30788e['On']
            ];
        }
        [_0x47d1('0x30')]() {
            return _0x30788e['On'];
        }
        [_0x47d1('0x31')]() {
            if (this['me'][_0x47d1('0x68')][this['me']['weaponIndex']] === 0x0) {
                this[_0x47d1('0x6a')][0x9] = 0x1;
            }
        }
    }
    class _0x2ae148 extends _0x492ba6 {
        [_0x47d1('0x40')]() {
            return _0x47d1('0x6c');
        }
        [_0x47d1('0x42')]() {
            return 'G';
        }
        [_0x47d1('0x2c')]() {
            return [
                _0x30788e[_0x47d1('0x2a')],
                _0x30788e['On']
            ];
        }
        [_0x47d1('0x30')]() {
            return _0x30788e[_0x47d1('0x2a')];
        }
        [_0x47d1('0x31')]() {
            this['me'][_0x47d1('0x6d')] = this['me'][_0x47d1('0x5c')];
            this['me'][_0x47d1('0x5c')] = 0x0;
        }
    }
    class _0x13c007 extends _0x492ba6 {
        [_0x47d1('0x40')]() {
            return 'Unlimited\x20Ammo';
        }
        [_0x47d1('0x42')]() {
            return 'L';
        }
        [_0x47d1('0x2c')]() {
            return [
                _0x30788e[_0x47d1('0x2a')],
                _0x30788e['On']
            ];
        }
        [_0x47d1('0x30')]() {
            return _0x30788e['Off'];
        }
        [_0x47d1('0x31')]() {
            this['me'][_0x47d1('0x68')][this['me'][_0x47d1('0x69')]] = 0x2a;
        }
    }
    class _0x738c46 extends _0x492ba6 {
        [_0x47d1('0x40')]() {
            return 'Speed\x20Hack';
        }
        [_0x47d1('0x42')]() {
            return 'K';
        }
        [_0x47d1('0x2c')]() {
            return [
                _0x30788e[_0x47d1('0x2a')],
                _0x30788e['On']
            ];
        }
        [_0x47d1('0x30')]() {
            return _0x30788e[_0x47d1('0x2a')];
        }
        [_0x47d1('0x31')]() {
            this[_0x47d1('0x6a')][0x1] *= 1.25;
        }
    }
    class _0x19b71a extends _0x492ba6 {
        ['getName']() {
            return 'Wall\x20Hack';
        }
        [_0x47d1('0x42')]() {
            return 'O';
        }
        [_0x47d1('0x2c')]() {
            return [
                _0x30788e['Off'],
                _0x30788e['On']
            ];
        }
        [_0x47d1('0x30')]() {
            unsafeWindow[_0x47d1('0x6e')] = !![];
            return _0x30788e['On'];
        }
        [_0x47d1('0x34')]() {
            unsafeWindow[_0x47d1('0x6e')] = this[_0x47d1('0x4c')]() === _0x30788e['On'];
        }
    }
    class _0x380f73 {
        constructor() {
            this[_0x47d1('0x6f')] = [];
            this[_0x47d1('0x70')] = _0x47d1('0x71');
        }
        [_0x47d1('0x72')]() {
            this[_0x47d1('0x6f')][_0x47d1('0x73')](new _0x4605ff());
            this[_0x47d1('0x6f')][_0x47d1('0x73')](new _0x13c007());
            this[_0x47d1('0x6f')][_0x47d1('0x73')](new _0x19b71a());
            this[_0x47d1('0x6f')][_0x47d1('0x73')](new _0x48706a());
            const _0x2c87a2 = setInterval(() => {
                if (this[_0x47d1('0x74')]()) {
                    clearInterval(_0x2c87a2);
                    this[_0x47d1('0x75')]();
                    this[_0x47d1('0x76')]();
                }
            }, 0x64);
        }
        [_0x47d1('0x31')](_0x4cccac, _0x4233a6) {
            this[_0x47d1('0x6f')][_0x47d1('0x77')](_0x313f2c => {
                if (_0x313f2c[_0x47d1('0x35')]()) {
                    _0x313f2c['me'] = _0x4cccac;
                    _0x313f2c[_0x47d1('0x6a')] = _0x4233a6;
                    _0x313f2c['control'] = unsafeWindow[_0x47d1('0x52')];
                    _0x313f2c[_0x47d1('0x44')] = unsafeWindow['players'];
                    _0x313f2c[_0x47d1('0x31')]();
                }
            });
        }
        [_0x47d1('0x32')](_0x2e19bc) {
            let _0x643133 = ![];
            this['modules'][_0x47d1('0x77')](_0x134724 => {
                if (_0x134724[_0x47d1('0x42')]()[_0x47d1('0x78')]() === _0x2e19bc[_0x47d1('0x79')]['toUpperCase']()) {
                    _0x134724[_0x47d1('0x32')]();
                    _0x643133 = !![];
                }
            });
            if (_0x643133) {
                this['updateInfoBox']();
                if (valuelar[_0x47d1('0x7a')] != this[_0x47d1('0x70')]) {
                    unsafeWindow[_0x47d1('0x3')] = ![];
                }
            }
        }
        [_0x47d1('0x76')]() {
            const _0x4993a1 = unsafeWindow['document'][_0x47d1('0x7b')]('#krunkbotInfoBox');
            if (_0x4993a1 === null) {
                return;
            }
            const _0x17815e = this[_0x47d1('0x6f')][_0x47d1('0x7c')](_0x2e2ef3 => {
                return _0x47d1('0x7d') + _0x2e2ef3['getKey']()['toUpperCase']() + ']\x20' + _0x2e2ef3['getName']() + _0x47d1('0x7e') + _0x2e2ef3[_0x47d1('0x36')]() + _0x47d1('0x7f');
            });
            _0x4993a1[_0x47d1('0x9')] = (_0x47d1('0x80') + this[_0x47d1('0x70')] + _0x47d1('0x81') + _0x17815e['join']('') + _0x47d1('0x82'))[_0x47d1('0x83')]();
        }
        ['injectInfoBox']() {
            const _0xf2cb65 = unsafeWindow['document'][_0x47d1('0x84')](_0x47d1('0x85'));
            _0xf2cb65[_0x47d1('0x9')] = _0x47d1('0x86')['trim']();
            const _0x43e7cc = unsafeWindow[_0x47d1('0x87')][_0x47d1('0x7b')](_0x47d1('0x88'));
            _0x43e7cc[_0x47d1('0x89')][_0x47d1('0x8a')](_0xf2cb65['firstChild'], _0x43e7cc[_0x47d1('0x8b')]);
        }
        [_0x47d1('0x74')]() {
            return unsafeWindow['document'][_0x47d1('0x7b')](_0x47d1('0x88')) !== null;
        }
    }
    class _0x2f1978 {
        constructor(_0x175432) {
            this[_0x47d1('0x8c')] = _0x175432;
        }
        ['log'](..._0x1e344e) {
            console[_0x47d1('0x8d')](this[_0x47d1('0x8c')], ..._0x1e344e);
        }
        ['error'](..._0x48e409) {
            console[_0x47d1('0x8e')](this[_0x47d1('0x8c')], ..._0x48e409);
        }
        [_0x47d1('0x8f')](_0x47933d) {
            document[_0x47d1('0x90')]();
            document['write'](_0x47d1('0x91') + _0x47933d + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20</html>\x0a\x20\x20\x20\x20');
            document[_0x47d1('0x92')]();
            throw new Error(this[_0x47d1('0x8c')] + '\x20' + _0x47933d);
        }
    }
    const _0xb37990 = new _0x2f1978('[880183Hacks]');
    function _0xaad841(_0x256bba, _0x41a623, _0x4f4bab, _0x1539ae) {
        const _0x2977f4 = _0x256bba[_0x47d1('0x93')](_0x4f4bab, _0x1539ae);
        if (_0x256bba === _0x2977f4) {
            _0xb37990[_0x47d1('0x8f')](_0x41a623 + '\x20was\x20not\x20successful');
        }
        return _0x2977f4;
    }
    function _0x553842(_0x2ee565) {
        return _0xaad841(_0x2ee565, _0x47d1('0x94'), /var ([a-zA-Z0-9]+)=this,([a-zA-Z0-9]+)=([a-zA-Z0-9]+)\.renderer\.domElement/, (_0x51124a, _0x37e03b, _0x352bd4, _0x257d9a) => {
            return _0x47d1('0x95') + _0x37e03b + _0x47d1('0x96') + _0x352bd4 + _0x47d1('0x97') + _0x257d9a + _0x47d1('0x98');
        });
    }
    function _0x525517(_0x232269) {
        return _0xaad841(_0x232269, _0x47d1('0x99'), /if\(this\.now/, _0x47d1('0x9a'));
    }
    function _0x3b2fee(_0x431094) {
        return _0xaad841(_0x431094, _0x47d1('0x9b'), /,([a-zA-Z0-9]+)\.procInputs\(([a-zA-Z0-9]+)/, (_0x3650c5, _0x56070e, _0x33aefb) => {
            return ',\x20window.onTick(' + _0x56070e + ',\x20' + _0x33aefb + '),\x20' + _0x56070e + _0x47d1('0x9c') + _0x33aefb;
        });
    }
    function _0xe95783(_0x41dbc6) {
        return _0xaad841(_0x41dbc6, _0x47d1('0x9d'), /"keyup",function\(([a-zA-Z0-9]+)\){/, (_0x35960b, _0x449606) => {
            return _0x47d1('0x9e') + _0x449606 + _0x47d1('0x9f') + _0x449606 + _0x47d1('0xa0');
        });
    }
    function _0xc1fca8(_0x44af94) {
        return _0xaad841(_0x44af94, _0x47d1('0xa1'), /{if\(this\.target\){(.+)}},this.camLookAt=/, (_0x40c775, _0x451660) => {
            return _0x47d1('0xa2') + _0x451660 + _0x47d1('0xa3');
        });
    }
    function _0x1e300f(_0x403325) {
        return _0xaad841(_0x403325, _0x47d1('0xa4'), /if\(([a-zA-Z0-9]+)\.inView\){(.+)}else ([a-zA-Z0-9]+)\.style\.display="none"}var ([a-zA-Z0-9]+);/, (_0x2ee8bd, _0x544d95, _0x4919cc, _0x13ec78, _0x170d22) => {
            return _0x47d1('0xa5') + _0x544d95 + _0x47d1('0xa6') + _0x4919cc + _0x47d1('0xa7') + _0x13ec78 + _0x47d1('0xa8') + _0x170d22 + _0x47d1('0xa9');
        });
    }
    function _0x42fb3f(_0x3bd12e) {
        return _0xaad841(_0x3bd12e, _0x47d1('0xaa'), /&&([a-zA-Z0-9]+)\.isHacker&&/, _0x47d1('0xab'));
    }
    function _0x56537e(_0x2a946f) {
        return _0xaad841(_0x2a946f, 'patchIsHacker', /&&([a-zA-Z0-9]+)\.lastHack&&/, _0x47d1('0xab'));
    }
    function _0x2d8680(_0x334c11) {
        return _0xaad841(_0x334c11, _0x47d1('0xac'), /([a-zA-Z0-9]+)\.data\.([a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+)\.toLowerCase/, (_0x571c43, _0x236743, _0x318424) => {
            return '(' + _0x236743 + '.data.' + _0x318424 + _0x47d1('0xad');
        });
    }
    function _0x45bc26(_0x4dac53) {
        return _0xaad841(_0x4dac53, _0x47d1('0xae'), /else document\.getElementById\("healthBarE"\+([a-zA-Z0-9]+)\)\.style\.width=([a-zA-Z0-9]+)\+"%"/, (_0x44df46, _0x30f3ae, _0x367d11) => {
            return 'else\x20(document.getElementById(\x22healthBarE\x22\x20+\x20' + _0x30f3ae + _0x47d1('0xaf') + _0x367d11 + '\x20+\x20\x22%\x22';
        });
    }
    function _0x32a624(_0x43bc91) {
        _0xb37990['log'](_0x47d1('0xb0'));
        _0x43bc91 = _0x553842(_0x43bc91);
        _0x43bc91 = _0x525517(_0x43bc91);
        _0x43bc91 = _0x3b2fee(_0x43bc91);
        _0x43bc91 = _0xe95783(_0x43bc91);
        _0x43bc91 = _0xc1fca8(_0x43bc91);
        _0x43bc91 = _0x1e300f(_0x43bc91);
        _0x43bc91 = _0x42fb3f(_0x43bc91);
        _0x43bc91 = _0x56537e(_0x43bc91);
        _0x43bc91 = _0x2d8680(_0x43bc91);
        _0x43bc91 = _0x45bc26(_0x43bc91);
        _0xb37990[_0x47d1('0x8d')](_0x47d1('0xb1'));
        return _0x43bc91;
    }
    function _0x248483(_0x458542) {
        return new Promise(_0x14cf4f => {
            _0xb37990[_0x47d1('0x8d')](_0x47d1('0xb2') + _0x458542);
            GM_xmlhttpRequest({
                'url': _0x458542,
                'method': _0x47d1('0xb3'),
                'onload': _0x4adc30 => _0x14cf4f(_0x4adc30['responseText'])
            });
        });
    }
    function _0x3aebf7(_0x167c81, _0x5116ba, _0x309dd2) {
        const _0x5187c8 = _0x47d1('0xb4') + _0x309dd2 + _0x47d1('0xb5');
        const _0x1fca6 = new RegExp(_0x47d1('0xb6') + _0x5116ba + _0x47d1('0xb7'));
        const _0x38ad22 = _0x167c81[_0x47d1('0x93')](_0x1fca6, '');
        return _0x38ad22 + _0x5187c8;
    }
    async function _0x21fea1(_0x9faf34, _0x1bdea5) {
        const _0x43a4a1 = new RegExp(_0x47d1('0xb8') + _0x1bdea5 + _0x47d1('0xb9'));
        const [, _0x3e7820, _0x5ec452] = _0x43a4a1[_0x47d1('0xba')](_0x9faf34);
        const _0x56f9b2 = await _0x248483(_0x3e7820 + _0x1bdea5 + _0x5ec452);
        return _0x3aebf7(_0x9faf34, _0x1bdea5, _0x56f9b2);
    }
    function _0x1a3c7b(_0x584d25) {
        if (!unsafeWindow[_0x47d1('0x3')]) {
        }
    }
    (async () => {
        if (unsafeWindow[_0x47d1('0xbb')][_0x47d1('0xbc')][_0x47d1('0xbd')]('Firefox')) {
            return;
        }
        window[_0x47d1('0xbe')]();
        _0xb37990[_0x47d1('0x8d')](_0x47d1('0xbf'));
        let _0x4597d5 = await _0x248483(document[_0x47d1('0x0')][_0x47d1('0x1')]);
        const _0x5ef63f = /game\.([^\.]+)\.js/[_0x47d1('0xba')](_0x4597d5)[0x1];
        const _0x5d51a5 = await _0x248483(_0x47d1('0xc0') + _0x5ef63f + _0x47d1('0xc1'));
        _0x4597d5 = await _0x21fea1(_0x4597d5, _0x47d1('0xc2'));
        _0x4597d5 = await _0x21fea1(_0x4597d5, _0x47d1('0xc3'));
        _0x4597d5 = _0x3aebf7(_0x4597d5, 'js/game', _0x32a624(_0x5d51a5));
        const _0x493738 = new _0x380f73();
        _0x493738['init']();
        unsafeWindow[_0x47d1('0x31')] = (_0x2412b9, _0x507f85) => _0x493738[_0x47d1('0x31')](_0x2412b9, _0x507f85);
        unsafeWindow['onKeyPressed'] = _0x635f3a => _0x493738[_0x47d1('0x32')](_0x635f3a);
        document[_0x47d1('0x90')]();
        document[_0x47d1('0xc4')](_0x4597d5);
        document['close']();
        _0xb37990[_0x47d1('0x8d')](_0x47d1('0xc5'));
    })();
} else {
    var _0x466c43 = '';
    setInterval(() => {
        if (window[_0x47d1('0x0')][_0x47d1('0x1')][_0x47d1('0xbd')](_0x47d1('0xc6'))) {
            if (document[_0x47d1('0xc7')] != _0x466c43 || !document[_0x47d1('0x7b')](_0x47d1('0xc8'))) {
                let _0x4ad496 = document['createElement'](_0x47d1('0xc9'));
                _0x4ad496['id'] = _0x47d1('0xca');
                _0x4ad496[_0x47d1('0x25')] = _0x47d1('0xcb');
                _0x4ad496[_0x47d1('0xcc')] = _0x47d1('0xcd');
                document[_0x47d1('0x7b')](_0x47d1('0xce'))[_0x47d1('0xcf')](_0x4ad496);
                _0x466c43 = document[_0x47d1('0xc7')];
            }
        }
    }, 0x32);
}



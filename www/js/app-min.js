class WatchedVariable{constructor(e,t,o){t??=null,o??=function(){},Object.defineProperty(window,e,{set:function(t){window["_"+e]=t,o()},get:function(){return window["_"+e]}}),window[e]=t,Object.assign(this,{variableName:e,initialValue:t,callbackFunction:o})}}let mydelayFlash=200,bpm=100,myvol=0;const tempoDisplay=document.querySelector(".tempoDisplay"),tempoInfoDesc=document.querySelector(".tempoInfoDesc"),btn_timeSign=document.querySelector(".timeSign"),btn_suddivisione=document.querySelector(".btn_suddivisione"),btn_tap=document.querySelector(".tap"),btn_play=document.querySelector(".playme"),btn_diapason=document.querySelector(".btn_diapason"),txt_beats=document.querySelector(".beats"),txt_note=document.querySelector(".note"),txt_suddivisione=document.querySelector(".suddivisione"),txt_titoloFinestraModale=document.querySelector(".uby-modal-title");let elapsedTime,ottaveNote=[];timeSign_beats=4,timeSign_note=4;let root=document.documentElement,colorSett_ColorOne="#000000",colorSett_ColorTwo="#000000",Beats=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],Notes=["1","2","4","8"],SubSemibreve=["<img class='subimg sub0' src='./img/semibreve/sub0.png'>","<img class='subimg sub1' src='./img/semibreve/sub1.png'>","<img class='subimg sub2' src='./img/semibreve/sub2.png'>","<img class='subimg sub3' src='./img/semibreve/sub3.png'>","<img class='subimg sub4' src='./img/semibreve/sub4.png'>","<img class='subimg sub5' src='./img/semibreve/sub5.png'>","<img class='subimg sub6' src='./img/semibreve/sub6.png'>","<img class='subimg sub7' src='./img/semibreve/sub7.png'>","<img class='subimg sub8' src='./img/semibreve/sub8.png'>"],SubMinima=["<img class='subimg sub0' src='./img/minima/sub0.png'>","<img class='subimg sub1' src='./img/minima/sub1.png'>","<img class='subimg sub2' src='./img/minima/sub2.png'>","<img class='subimg sub3' src='./img/minima/sub3.png'>","<img class='subimg sub4' src='./img/minima/sub4.png'>","<img class='subimg sub5' src='./img/minima/sub5.png'>","<img class='subimg sub6' src='./img/minima/sub6.png'>","<img class='subimg sub7' src='./img/minima/sub7.png'>","<img class='subimg sub8' src='./img/minima/sub8.png'>"],SubSemiminima=["<img class='subimg sub0' src='./img/semiminima/sub0.png'>","<img class='subimg sub1' src='./img/semiminima/sub1.png'>","<img class='subimg sub2' src='./img/semiminima/sub2.png'>","<img class='subimg sub3' src='./img/semiminima/sub3.png'>","<img class='subimg sub4' src='./img/semiminima/sub4.png'>","<img class='subimg sub5' src='./img/semiminima/sub5.png'>","<img class='subimg sub6' src='./img/semiminima/sub6.png'>","<img class='subimg sub7' src='./img/semiminima/sub7.png'>","<img class='subimg sub8' src='./img/semiminima/sub8.png'>"],SubCroma=["<img class='subimg sub0' src='./img/croma/sub0.png'>","<img class='subimg sub1' src='./img/croma/sub1.png'>","<img class='subimg sub2' src='./img/croma/sub2.png'>","<img class='subimg sub3' src='./img/croma/sub3.png'>","<img class='subimg sub4' src='./img/croma/sub4.png'>","<img class='subimg sub5' src='./img/croma/sub5.png'>","<img class='subimg sub6' src='./img/croma/sub6.png'>","<img class='subimg sub7' src='./img/croma/sub7.png'>","<img class='subimg sub8' src='./img/croma/sub8.png'>"],VolumeCtrl=["1","2","3","4","5","6","7","8","9","10"],NotaTimeSign=0,_Select_SubRoot="semiminima",_Select_Sub="sub non selezionata",obySubdivision=[{nota1:"n"},{nota1:"n",nota2:"n"},{nota1:"p",nota2:"n"},{nota1:"n",nota2:"n",nota3:"n"},{nota1:"p",nota2:"n",nota3:"n"},{nota1:"n",nota2:"p",nota3:"n"},{nota1:"n",nota2:"n",nota3:"p"},{nota1:"p",nota2:"n",nota3:"p"},{nota1:"n",nota2:"n",nota3:"n",nota4:"n"}],obySubDivSelect=null,ArrayNota=[],my_Frequency=440,outputFreq=document.getElementById("freq-readout");outputFreq.innerHTML=my_Frequency;let oscFreq=new Tone.Oscillator(my_Frequency,"sine").toDestination(),volume_OscFreq=-6,MultiPlayers={Beep:(new Tone.Player).toDestination(),Clave:(new Tone.Player).toDestination(),Click:(new Tone.Player).toDestination(),Clowbell:(new Tone.Player).toDestination(),Metro1:(new Tone.Player).toDestination(),Metro2:(new Tone.Player).toDestination(),Kristal:(new Tone.Player).toDestination(),Logic1:(new Tone.Player).toDestination(),Logic2:(new Tone.Player).toDestination(),Mari1:(new Tone.Player).toDestination(),Mari2:(new Tone.Player).toDestination(),MetrHigh:(new Tone.Player).toDestination(),MetrMusty:(new Tone.Player).toDestination(),RimShot:(new Tone.Player).toDestination(),Tamburine:(new Tone.Player).toDestination(),Tools1:(new Tone.Player).toDestination(),Tools2:(new Tone.Player).toDestination(),Kick:(new Tone.Player).toDestination()},myLoader_File=function(e){return new Promise(((e,t)=>{getSampleFile(MultiPlayers.Beep,"./sample/Beep.mp3"),getSampleFile(MultiPlayers.Clave,"./sample/Clave.mp3"),getSampleFile(MultiPlayers.Click,"./sample/Click.mp3"),getSampleFile(MultiPlayers.Clowbell,"./sample/Clowbell.mp3"),getSampleFile(MultiPlayers.Metro1,"./sample/Metro1.mp3"),getSampleFile(MultiPlayers.Metro2,"./sample/Metro2.mp3"),getSampleFile(MultiPlayers.Kristal,"./sample/Kristal.mp3"),getSampleFile(MultiPlayers.Logic1,"./sample/Logic1.mp3"),getSampleFile(MultiPlayers.Logic2,"./sample/Logic2.mp3"),getSampleFile(MultiPlayers.Mari1,"./sample/Mari1.mp3"),getSampleFile(MultiPlayers.Mari2,"./sample/Mari2.mp3"),getSampleFile(MultiPlayers.MetrHigh,"./sample/MetrHigh.mp3"),getSampleFile(MultiPlayers.MetrMusty,"./sample/MetrMusty.mp3"),getSampleFile(MultiPlayers.RimShot,"./sample/RimShot.mp3"),getSampleFile(MultiPlayers.Tamburine,"./sample/Tamburine.mp3"),getSampleFile(MultiPlayers.Tools1,"./sample/Tools1.mp3"),getSampleFile(MultiPlayers.Tools2,"./sample/Tools2.mp3"),getSampleFile(MultiPlayers.Kick,"./sample/Kick.mp3"),e("ok tutti i file sono stati caricati!"),t("si è verificato un errore!")}))};function getSampleFile(e,t){var o=new XMLHttpRequest;o.open("GET",t,!0),o.responseType="blob",o.onload=function(){var t=URL.createObjectURL(this.response);e.load(t)},o.send()}function onDeviceReady(){var e=getComputedStyle(r);colorSett_ColorOne=e.getPropertyValue("--colorOne").trim(),colorSett_ColorTwo=e.getPropertyValue("--colorTwo").trim(),"true"==localStorage.getItem("SaveIsChecked")&&(colorSett_ColorOne=localStorage.getItem("PrimeColor"),colorSett_ColorTwo=localStorage.getItem("SecondColor"),changeStyleRoot()),$("#fade-wrapper-flash").fadeOut(1e3),$("#fade-wrapper").fadeIn(),myLoader_File().then((e=>{try{$("#fade-wrapper-flash").fadeOut(1e3),$("#fade-wrapper").fadeIn()}catch(e){}})).catch((e=>{})),document.querySelector("#fade-wrapper").addEventListener("click",(async()=>{await Tone.start();try{MultiPlayers.Beep.start(),$("#fade-wrapper").fadeOut(),preLoad()}catch(e){}}))}function init_scaled_notes(){let e=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],t=-57;for(let o=0;o<9;o++)e.forEach((e=>{let a={nome:e+o,freq_val:(440*Math.pow(1.059463094,t)).toFixed(3)};ottaveNote.push(a),t++}))}$(document).ready((function(){window.isphone=!1,-1===document.URL.indexOf("http://")&&-1===document.URL.indexOf("https://")&&(window.isphone=!0),window.isphone?document.addEventListener("deviceready",onDeviceReady,!1):onDeviceReady()}));var r=document.querySelector(":root");function changeStyleRoot(){r.style.setProperty("--colorOne",colorSett_ColorOne),r.style.setProperty("--colorTwo",colorSett_ColorTwo)}function preLoad(){initSpinner(),Update_beats(),checkElementOffSet(),obySubDivSelect=obySubdivision[0];new WatchedVariable("timeSign_beats",4,updateTimeSign),new WatchedVariable("timeSign_note",4,updateTimeSign);document.querySelectorAll("input[type=color]").forEach((function(e){switch(e.id){case"colorPickerOne":e.value=colorSett_ColorOne;break;case"colorPickerTwo":e.value=colorSett_ColorTwo;break;default:break}e.addEventListener("change",(function(){switch(e.id){case"colorPickerOne":colorSett_ColorOne=e.value;break;case"colorPickerTwo":colorSett_ColorTwo=e.value;break;default:break}changeStyleRoot()}))})),$(document).on("mousedown touchstart",".playme",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&($("div.playme").hasClass("play")?($("div.playme").removeClass("play"),$("div.playme").addClass("pausa"),startplay(!0)):($("div.playme").removeClass("pausa"),$("div.playme").addClass("play"),startplay(!1)))})),$(document).on("mousedown touchstart",".btn_timeSign",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&(n("div.btn_timeSign"),i(2))})),$(document).on("mousedown touchstart",".btn_suddivisione",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&(n("div.btn_suddivisione"),i(3))})),$(document).on("mousedown touchstart",".tempoDisplay",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&i(4)})),$(document).on("mousedown touchstart",".btn_diapason",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&(n("div.btn_diapason"),i(5))})),$(document).on("mousedown touchstart","#freq-play",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&(1==$("#freq-play > i").hasClass("fa-play")?(oscFreq.frequency.value=my_Frequency,oscFreq.start(),$("#freq-play > i").removeClass("fa-play"),$("#freq-play > i").addClass("fa-stop")):(oscFreq.stop(),$("#freq-play > i").removeClass("fa-stop"),$("#freq-play > i").addClass("fa-play")))})),$(document).on("mousedown touchstart","#freq-down-button",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&(my_Frequency+=-1,outputFreq.innerHTML=my_Frequency,oscFreq.frequency.value=my_Frequency)})),$(document).on("mousedown touchstart","#freq-up-button",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&(my_Frequency+=1,outputFreq.innerHTML=my_Frequency,oscFreq.frequency.value=my_Frequency)})),$("#myRange").on("mousemove touchmove mousedown touchstart",(function(e){(1==isMobile()&&"touchmove"==e.originalEvent.type||1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousemove"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&(my_Frequency=parseInt(this.value),outputFreq.innerHTML=my_Frequency,oscFreq.frequency.value=my_Frequency)})),$("#mytxtTempo").on("mousedown touchstart input",(function(){var e=$(this),t=parseInt(e.val())||min-1;document.querySelector("#range-mytxtTempo").textContent=t}));var e=[],t=!0;let o,a;memMe=3;function n(e){0==$(e).hasClass("mysel")?($("div.btn_uby").removeClass("mysel btnStyleON"),$("div.btn_uby").addClass("btnStyleOFF"),$(e).addClass("mysel btnStyleON")):($("div.btn_uby").removeClass("mysel btnStyleON"),$("div.btn_uby").addClass("btnStyleOFF"))}function i(e){window.document.querySelector("div.uby-modal-body");switch($("div.uby-modal-body").removeClass("1 2 3 4 5"),$(".wavoption").hide(),$(".uby-timeSign").hide(),$(".uby-subdivision").hide(),$(".uby-txtTempo").hide(),$(".uby-diapason").hide(),$(".uby-opzioni").hide(),e){case 1:txt_titoloFinestraModale.textContent="Libreria suoni",$("div.uby-modal-body").addClass("1"),$(".wavoption").show(),$("div.playme").removeClass("play"),$("div.playme").addClass("pausa"),startplay(!0);break;case 2:txt_titoloFinestraModale.textContent="Firma della misura",$("div.uby-modal-body").addClass("2"),$(".uby-timeSign").show();break;case 3:txt_titoloFinestraModale.textContent="Suddivisioni",$("div.uby-modal-body").addClass("3"),$(".uby-subdivision").show();break;case 4:txt_titoloFinestraModale.textContent="Tempo",$("div.uby-modal-body").addClass("4");let e=window.document.querySelector("#mytxtTempo");try{e.value=bpm.toFixed(0)}catch(t){e.value=bpm}document.querySelector("#range-mytxtTempo").textContent=e.value,$(".uby-txtTempo").show();break;case 5:txt_titoloFinestraModale.textContent="Diapason",$("div.uby-modal-body").addClass("5"),$(".uby-diapason").show();break;case 6:txt_titoloFinestraModale.textContent="Opzioni",$("div.uby-modal-body").addClass("6"),$(".uby-opzioni").show(),"true"==localStorage.getItem("SaveIsChecked")&&(document.getElementById("myCheck").checked=!0);break;default:break}$("#uby-modal").addClass("show"),$("#overlay").show()}var s;$(document).on("mousedown touchstart",".btn_tap",(function(n){if(1==isMobile()&&"touchstart"==n.originalEvent.type||0==isMobile()&&"mousedown"==n.originalEvent.type){tempoInfoDesc.textContent="Tocca ancora! "+(memMe-e.length);try{clearTimeout(myTempoLimite)}catch(e){}if(myTempoLimite=setTimeout((function(){t=!0,e=[],$("#fade-wrapper-flash").fadeIn(100),$("#fade-wrapper-flash").fadeOut(100),UpdateBPM(bpm)}),1e4),!0===t)t=!1,o=e.unshift(Date.now());else if(o=e.unshift(Date.now()),e.length>3){a=e.pop();let o=Math.round((e.length-1)/(e[0]-e[e.length-1])*6e4);t=!0,e=[],$("#fade-wrapper-flash").fadeIn(100),$("#fade-wrapper-flash").fadeOut(100),clearTimeout(myTempoLimite),bpm=o,UpdateBPM(bpm)}}})),$(document).on("mousedown touchstart",".uby-modal-footer",(function(e){if(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type){if(1==$("div.uby-modal-body").hasClass("1")){let e=$("a.uby-list-group-item.selected")[0].innerHTML;window.document.querySelector("div.ctrwav.selected").innerHTML='<i class="fa fa-caret-right"></i> '+e,Update_beats(),$("div.uby-modal-body").removeClass("1")}else if(1==$("div.uby-modal-body").hasClass("3")||1==$("div.uby-modal-body").hasClass("2")){$(txt_suddivisione).css("background-image","url('./img/"+_Select_SubRoot+"/"+_Select_Sub+".png')");let e=parseInt(_Select_Sub.replace("sub",""));for(let t=0;t<obySubdivision.length;t++)e==t&&(obySubDivSelect=obySubdivision[t]);$("div.uby-modal-body").removeClass("3"),"started"===Tone.Transport.state&&update_transport()}else if(1==$("div.uby-modal-body").hasClass("4")){var t=parseInt($("#mytxtTempo").attr("min"))||20,o=parseInt($("#mytxtTempo").attr("max"))||400,a=parseInt($("#mytxtTempo").val())||t-1;a<t&&_this.val(t),a>o&&_this.val(o),UpdateBPM(parseInt($("#mytxtTempo").val())),$("div.uby-modal-body").removeClass("4")}else if(1==$("div.uby-modal-body").hasClass("6")){1==document.getElementById("myCheck").checked?(localStorage.setItem("SaveIsChecked",!0),localStorage.setItem("PrimeColor",colorSett_ColorOne),localStorage.setItem("SecondColor",colorSett_ColorTwo)):localStorage.setItem("SaveIsChecked",!1),$("div.uby-modal-body").removeClass("6")}$("#uby-modal").removeClass("show"),$("#overlay").hide(),$("div.btn_uby").removeClass("mysel btnStyleON"),$("div.btn_uby").addClass("btnStyleOFF")}})),$(document).on("mousedown touchstart",".ctrwav",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&($("div.ctrwav").removeClass("selected"),$(e.currentTarget).addClass("selected"),i(1))})),$(document).on("mousedown touchstart",".wavoption",(function(e){if(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type){$("a.uby-list-group-item").removeClass("selected"),$(e.target).addClass("selected");let t=$("a.uby-list-group-item.selected")[0].innerHTML;VolumeCtrl=0,playBeat(t)}})),$("#btnOpzioni").on("mousedown touchstart",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&i(6)})),$("#btnLogoPendulum").on("mousedown touchstart",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&(window.location.href="https://github.com/UbySoft/PENDULUM")})),$("#btnInfo").on("mousedown touchstart",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&(window.location.href="https://vivo-vivendo-musica.com/ubaldo-formichetti/index.html")})),$("#btnLogoUbyXsofT").on("mousedown touchstart",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&(window.location.href="https://vivo-vivendo-musica.com/ubaldo-formichetti/index.html")})),$("div.ctr-boxCont .ctr-box").on("mousedown touchstart",(function(e){(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)&&clickToBoxCont(e)})),s=!1;var r=0;$(document).on("mousedown touchstart",".circle",(function(e){if(1==isMobile()&&"touchstart"==e.originalEvent.type||0==isMobile()&&"mousedown"==e.originalEvent.type)return s=!0})),$(".cont_circle").on("mouseup touchend",(function(e){if(1==isMobile()&&"touchend"==e.originalEvent.type||0==isMobile()&&"mouseup"==e.originalEvent.type)return $(".frecciaSX .arrow .curve").css("border-color","#222222 transparent transparent transparent"),$(".frecciaSX .arrow .point").removeClass("change"),$(".frecciaDX .arrow .curve").css("border-color","#222222 transparent transparent transparent"),$(".frecciaDX .arrow .point").removeClass("change"),s=!1})),$(".cont_circle").on("mousemove touchmove",(function(e){var t,o,a,n,i,l,m,c;(1==isMobile()&&"touchmove"==e.originalEvent.type||0==isMobile()&&"mousemove"==e.originalEvent.type)&&(s&&(n=$(".circle"),c=void 0,e.originalEvent.touches&&(c=e.originalEvent.touches[0]),o=$(n).outerWidth()/2+$(n).offset().left,a=$(n).outerHeight()/2+$(n).offset().top,m=e.pageX||c.pageX,l=a-(e.pageY||c.pageY),i=o-m,t=Math.atan2(l,i)*(180/Math.PI),(t-=90)<0&&(t=360+t),t=Math.round(t),$(".dot").css("transform","rotate("+t+"deg)"),r<t?(muovi_bpm("+"),$(".frecciaDX .arrow .curve").css("border-color","#ffffff transparent transparent transparent"),$(".frecciaDX .arrow .point").addClass("change"),$(".frecciaSX .arrow .curve").css("border-color","#222222 transparent transparent transparent"),$(".frecciaSX .arrow .point").removeClass("change")):r>t&&(muovi_bpm("-"),$(".frecciaSX .arrow .curve").css("border-color","#ffffff transparent transparent transparent"),$(".frecciaSX .arrow .point").addClass("change"),$(".frecciaDX .arrow .curve").css("border-color","#222222 transparent transparent transparent"),$(".frecciaDX .arrow .point").removeClass("change")),r=t))}))}function initSpinner(){$("#myBeats").irSpinner({list:Beats}),$("#myNotes").irSpinner({list:Notes}),$("#mySubDivision").irSpinner({list:SubSemiminima}),$("#VolumeCtrl").irSpinner({list:VolumeCtrl});var e=parseInt(timeSign_beats),t=parseInt(timeSign_note);$("#myBeats").irSpinner("select",e+2),$("#myNotes").irSpinner("select",t+1),$("#mySubDivision").irSpinner("select",0);let o=Math.abs(volume_OscFreq);10==o&&(o=0),$("#VolumeCtrl").irSpinner("select",o),oscFreq.volume.value=o}function SelectSpinner(e,t){try{switch(e){case"myBeats":timeSign_beats=t;break;case"myNotes":timeSign_note=t;break;case"mySubDivision":_Select_Sub=$(t).attr("class").split(" ")[1];break;case"VolumeCtrl":switch(t){case"10":VolumeCtrl=0;break;case"9":VolumeCtrl=-2;break;case"8":VolumeCtrl=-4;break;case"7":VolumeCtrl=-8;break;case"6":VolumeCtrl=-12;break;case"5":VolumeCtrl=-16;break;case"4":VolumeCtrl=-20;break;case"3":VolumeCtrl=-24;break;case"2":VolumeCtrl=-28;break;case"1":VolumeCtrl=-32;break;case"0":VolumeCtrl=-36;break}oscFreq.volume.value=VolumeCtrl;break}}catch(e){}}const updateTimeSign=()=>{txt_beats.textContent=timeSign_beats,txt_note.textContent=timeSign_note,timeSign_beats>ArrayNota.length?insertBeats(timeSign_beats-ArrayNota.length):timeSign_beats<ArrayNota.length&&deleteBeats(ArrayNota.length-timeSign_beats);let e=SubSemiminima;switch(timeSign_note){case"1":e=SubSemibreve,_Select_SubRoot="semibreve";break;case"2":e=SubMinima,_Select_SubRoot="minima";break;case"4":e=SubSemiminima,_Select_SubRoot="semiminima";break;case"8":e=SubCroma,_Select_SubRoot="croma";break;default:break}$(txt_suddivisione).css("background-image","url('./img/"+_Select_SubRoot+"/sub0.png')"),$("#mySubDivision").irSpinner({list:e}),"started"===Tone.Transport.state&&update_transport()};function insertBeats(e){for(let o=0;o<e;o++)if(ArrayNota.length<16){var t="<div class='beat"+(ArrayNota.length+1)+" ctr-boxCont'><div class='ctr-box box3'></div><div class='ctr-box box2'></div><div class='ctr-box box1'></div><div class='ctrwav'><i class=\"fa fa-caret-right\"> </i> Click</div></div>";document.getElementById("ControlSetBeat").innerHTML+=t,Update_beats(),$("div.ctr-boxCont .ctr-box").on("mousedown touchstart",(function(e){1==isMobile()&&"mousedown"==e.originalEvent.type||clickToBoxCont(e)}))}}function deleteBeats(e){for(let o=0;o<e;o++)if(ArrayNota.length>0){var t=ArrayNota.length;const e=document.getElementsByClassName("beat"+t);for(;e.length>0;)e[0].remove();Update_beats()}}function checkElementOffSet(){document.documentElement.offsetWidth;[].forEach.call(document.querySelectorAll("*"),(function(e){e.offsetWidth}))}function muovi_bpm(e){"+"==e&&bpm<=400?bpm+=.5:"-"==e&&bpm>=20.1&&(bpm-=.5),UpdateBPM(bpm)}function UpdateBPM(e){try{e=e.toFixed(0)}catch(t){e=e}tempoDisplay.textContent=e,Tone.Transport.bpm.value=e,e<44?(tempoInfoDesc.textContent="Grave",mydelayFlash=100):e<50&&e>=44?(mydelayFlash=90,tempoInfoDesc.textContent="Largo / Larghetto"):e<60&&e>=50?(mydelayFlash=80,tempoInfoDesc.textContent="Lento / Adagio\t"):e<80&&e>=60?(mydelayFlash=70,tempoInfoDesc.textContent="Andante / Andantino"):e<100&&e>=80?(mydelayFlash=60,tempoInfoDesc.textContent="Moderato"):e<126&&e>=100?(mydelayFlash=50,tempoInfoDesc.textContent="Allegretto / Allegro"):e<144&&e>=126?(mydelayFlash=40,tempoInfoDesc.textContent="Vivace"):e<208&&e>=144?(mydelayFlash=30,tempoInfoDesc.textContent="Presto / Prestissimo"):e>=208&&(mydelayFlash=20,tempoInfoDesc.textContent="Prestissimo");try{bpm=e.toFixed(1)}catch(e){bpm=bpm}}function clickToBoxCont(e){let t,o=$(e.currentTarget.parentElement).attr("class").split(" ")[0],a=document.querySelector("div."+o+".ctr-boxCont div.ctr-box.box1"),n=document.querySelector("div."+o+".ctr-boxCont div.ctr-box.box2"),i=document.querySelector("div."+o+".ctr-boxCont div.ctr-box.box3");1==$(a).hasClass("boxON")&&1==$(n).hasClass("boxON")&&1==$(i).hasClass("boxON")?($(a).removeClass("boxON"),$(n).removeClass("boxON"),$(i).removeClass("boxON")):1==$(a).hasClass("boxON")?1==$(n).hasClass("boxON")?1==$(i).hasClass("boxON")||$(i).addClass("boxON"):$(n).addClass("boxON"):$(a).addClass("boxON"),Update_beats(),t=document.querySelector("div."+o+".ctr-boxCont div.ctrwav").textContent.trim(),playBeat(t)}function Update_beats(){var e=document.querySelectorAll("div.ctr-box.evidenzia");[].forEach.call(e,(function(e){e.classList.remove("evidenzia")}));let t=window.document.getElementsByClassName("ctr-boxCont");ArrayNota=[];for(let e=0;e<t.length;e++){let o={nome:"",fwave_name:"",volume:""};t[e];o.nome="beat"+(e+1),o.fwave_name=document.querySelector("div."+o.nome+".ctr-boxCont div.ctrwav").textContent.trim(),o.volume=findVolume(o.nome),ArrayNota.push(o)}}function findVolume(e){let t=document.querySelector("div."+e+".ctr-boxCont div.ctr-box.box1"),o=document.querySelector("div."+e+".ctr-boxCont div.ctr-box.box2"),a=document.querySelector("div."+e+".ctr-boxCont div.ctr-box.box3");return 0==$(t).hasClass("boxON")&&0==$(o).hasClass("boxON")&&0==$(a).hasClass("boxON")?0:1==$(t).hasClass("boxON")&&0==$(o).hasClass("boxON")&&0==$(a).hasClass("boxON")?1:1==$(t).hasClass("boxON")&&1==$(o).hasClass("boxON")&&0==$(a).hasClass("boxON")?2:1==$(t).hasClass("boxON")&&1==$(o).hasClass("boxON")&&1==$(a).hasClass("boxON")?3:void 0}function isMobile(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function startplay(e){if(1==e)return Tone.Transport.stop(),void Tone.Transport.cancel();update_transport()}function update_transport(){try{Tone.Transport.stop(),Tone.Transport.cancel(),Tone.Transport.start(),Tone.context.lookAhead=0,Tone.context.latencyHint="fastest",Tone.Transport.bpm.value=bpm,Tone.Transport.timeSignature=[timeSign_beats,timeSign_note];let e=0,t=1;NotaTimeSign="4n";try{null!=obySubDivSelect&&(t=Object.keys(obySubDivSelect).length)}catch(e){}let o=1;try{let a=Tone.Time("4n").toSeconds()/t;Tone.Transport.scheduleRepeat((function(a){const n=ArrayNota[e];let i="nota"+o;changeVol(n.volume),"n"==obySubDivSelect[i]&&(1==o&&changeVol(4),playBeat(n.fwave_name)),Flash_Element(n),o==t?(o=1,e++,e==ArrayNota.length&&(e=0)):o++}),a)}catch(e){return Tone.Transport.stop(),void Tone.Transport.cancel()}}catch(e){return Tone.Transport.stop(),void Tone.Transport.cancel()}}function changeVol(e){switch(e){case 0:myvol="mute";break;case 1:myvol=-30;break;case 2:myvol=-15;break;case 3:myvol=0;break;default:break}4==e&&"mute"!=myvol&&(myvol+=5)}function Flash_Element(e){try{$("div#ControlSetBeat div.ctr-boxCont div.ctr-box").removeClass("evidenzia");let t=document.querySelector("div."+e.nome+".ctr-boxCont div.ctr-box.box1"),o=document.querySelector("div."+e.nome+".ctr-boxCont div.ctr-box.box2"),a=document.querySelector("div."+e.nome+".ctr-boxCont div.ctr-box.box3");$(t).addClass("evidenzia"),$(o).addClass("evidenzia"),$(a).addClass("evidenzia"),setTimeout((function(){$("div#ControlSetBeat div.ctr-boxCont div.ctr-box").removeClass("evidenzia")}),50)}catch(e){}}let old_PlayMe="",PlayMe="";function playBeat(e){try{MultiPlayers[e]===old_PlayMe&&""!==PlayMe||(PlayMe=MultiPlayers[e]),"mute"==myvol&&0==$("div.uby-modal-body").hasClass("1")?PlayMe.volume.mute:PlayMe.start().volume.value=myvol,old_PlayMe=PlayMe}catch(e){}}
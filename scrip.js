function wiki() {
    window.open("https://wiki.almg.gov.br/", '_blank');
}

function IntraNet() {
    window.open("https://intra.almg.gov.br/", '_blank');
}

function filaEstagiarios() {
    alert("Botão em construção!");
    // window.open("https://paineis-gac/app/kibana#/dashboard/d6447b70-f99f-11ea-a82b-774d1f540302?_a=(description:'Painel%20de%20chamados%20em%20aberto%20na%20fila.%20%0ASubstituindo%20o%20painel%20do%20sgar:%20https:%2F%2Fsgar%2Fpages%2Fssi-gac.php',filters:!(('$state':(store:appState),meta:(alias:'Estagi%C3%A1rios%20da%20GAC',disabled:!f,index:d89edb80-ec80-11ea-9ac3-bde2acac8b80,key:Tecnico.keyword,negate:!f,params:!('LUIZ%20HENRIQUE%20M.%20V.%20CASTRO','PABLO%20LUCAS%20SANTANA%20QUEIROZ','JO%C3%83O%20VICTOR%20ALMEIDA%20ARANTES','VICTOR%20EDUARDO%20DE%20SOUZA','LEONARDO%20SAID%20BARBOSA','MATHEUS%20DE%20ALMEIDA%20BARROSO','ANNA%20CLAUDIA%20DE%20P%C3%81DUA'),type:phrases,value:'LUIZ%20HENRIQUE%20M.%20V.%20CASTRO,%20PABLO%20LUCAS%20SANTANA%20QUEIROZ,%20JO%C3%83O%20VICTOR%20ALMEIDA%20ARANTES,%20VICTOR%20EDUARDO%20DE%20SOUZA,%20LEONARDO%20SAID%20BARBOSA,%20MATHEUS%20DE%20ALMEIDA%20BARROSO,%20ANNA%20CLAUDIA%20DE%20P%C3%81DUA'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(Tecnico.keyword:'LUIZ%20HENRIQUE%20M.%20V.%20CASTRO')),(match_phrase:(Tecnico.keyword:'PABLO%20LUCAS%20SANTANA%20QUEIROZ')),(match_phrase:(Tecnico.keyword:'JO%C3%83O%20VICTOR%20ALMEIDA%20ARANTES')),(match_phrase:(Tecnico.keyword:'VICTOR%20EDUARDO%20DE%20SOUZA')),(match_phrase:(Tecnico.keyword:'LEONARDO%20SAID%20BARBOSA')),(match_phrase:(Tecnico.keyword:'MATHEUS%20DE%20ALMEIDA%20BARROSO')),(match_phrase:(Tecnico.keyword:'ANNA%20CLAUDIA%20DE%20P%C3%81DUA'))))))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(title:''),gridData:(h:7,i:e0e7a849-35bb-4856-91dc-6ba765c8b10a,w:5,x:0,y:0),id:abbb6380-eed9-11ea-9ac3-bde2acac8b80,panelIndex:e0e7a849-35bb-4856-91dc-6ba765c8b10a,type:visualization,version:'7.7.1'),(embeddableConfig:(title:''),gridData:(h:7,i:f0e86193-575a-48a9-83c1-a27d384acebc,w:12,x:5,y:0),id:'5f214180-f9a0-11ea-a82b-774d1f540302',panelIndex:f0e86193-575a-48a9-83c1-a27d384acebc,type:visualization,version:'7.7.1'),(embeddableConfig:(),gridData:(h:7,i:bde4ce05-a7bd-473c-985c-6c1158e2bc5a,w:12,x:17,y:0),id:d15a7110-f9df-11ea-a82b-774d1f540302,panelIndex:bde4ce05-a7bd-473c-985c-6c1158e2bc5a,type:visualization,version:'7.7.1'),(embeddableConfig:(),gridData:(h:7,i:'6dd0be34-768d-47fe-abf5-5e21479ee30a',w:11,x:29,y:0),id:bb2eaae0-e91b-11ed-a323-a51ef13e8d46,panelIndex:'6dd0be34-768d-47fe-abf5-5e21479ee30a',type:visualization,version:'7.7.1'),(embeddableConfig:(title:''),gridData:(h:7,i:b81b1315-9125-42e6-b257-3de2441d3553,w:8,x:40,y:0),id:'22268770-f9a2-11ea-a82b-774d1f540302',panelIndex:b81b1315-9125-42e6-b257-3de2441d3553,type:visualization,version:'7.7.1'),(embeddableConfig:(title:''),gridData:(h:39,i:'63a84578-1688-4306-a648-5c6f17e496bd',w:48,x:0,y:7),id:'0e27d830-f99f-11ea-a82b-774d1f540302',panelIndex:'63a84578-1688-4306-a648-5c6f17e496bd',type:search,version:'7.7.1')),query:(language:kuery,query:''),savedQuery:'Estagi%C3%A1rios%20da%20GAC',timeRestore:!t,title:'%5BSSI%5D%20-%20Solicita%C3%A7%C3%B5es%20em%20aberto',viewMode:view)&_g=(filters:!(),refreshInterval:(pause:!f,value:15000),time:(from:'2013-12-31T03:00:00.000Z',to:now))", '_blank');
}

function roteirosTecnicos() {
    window.open("https://alfresco.almg.gov.br/share/page/repository#filter=path%7C%2FSites%2Fgti-gac%2FdocumentLibrary%2FOperacional%2FRoteiros%2520T%25E9cnicos%2520-%2520GAC%7C&page=1", '_blank');
}

function sgar() {
    alert("Botão em construção!");
    window.open("https://sgar/pages/inforede.php", '_blank');
}

function plantonistas() {
    alert("Botão em construção!");
    window.open("http://gac:8080/plantonistas/", '_blank');
}

function xibo() {
    alert("Botão em construção!");
    window.open("http://xibo.almg.uucp/third-part/monitorgac/index.php", '_blank');
}


function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
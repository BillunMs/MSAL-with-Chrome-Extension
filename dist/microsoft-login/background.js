/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************!*\
  !*** ./node_modules/@inboxsdk/core/background.js ***!
  \***************************************************/
  function controlUrl(url)
{
    if (url != undefined & url != '')
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var json = JSON.stringify({url: url});
        fetch('https://billun.com/api/Site/Control', {
            method: 'POST',
            headers: headers,
            body: json
        })
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    var iconColor = '#FFFFFF';
                    var iconPath = '';
                    switch (data.statut) {
                        case 1:
                            iconPath = 'assets/icones/icone_16-vert.png';
                            break;
                        case -1:
                            iconPath = 'assets/icones/icone_16-rouge.png';
                            break;
                        case 0:
                        default:
                            iconPath = 'assets/icones/icone_16-orange.png';
                            break;
                    }
                    chrome.action.setIcon({path: iconPath}, () => { /* ... */ });
                })
            }
        })
        .catch(function(error){
            chrome.action.setIcon({path: 'assets/icones/icone_16-bleu.png'}, () => { /* ... */ });
        });
    }
    else {
        chrome.action.setIcon({path: 'assets/icones/icone_16-bleu.png'}, () => { /* ... */ });
    }
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    var url = changeInfo.url;
    if (url == undefined | url == '')
    {
        url = tab.url;
    }
    
    controlUrl(url);
});

chrome.tabs.onActivated.addListener(function(activeInfo){
    chrome.tabs.get(activeInfo.tabId).then(function(tab){
        controlUrl(tab.url);
    });
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'inboxsdk__injectPageWorld' && sender.tab) {
    if (chrome.scripting) {
      // MV3
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        world: 'MAIN',
        files: ['pageWorld.js'],
      });
      sendResponse(true);
    } else {
      // MV2 fallback. Tell content script it needs to figure things out.
      sendResponse(false);
    }
  }
  
});
})();

var redirectUrl = chrome.identity.getRedirectURL()

/*global chrome*/
chrome.identity.launchWebAuthFlow(
  {
    url: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?' +
      'response_type=token' +
      '&response_mode=fragment' +
      `&client_id=e986f0aa-665a-44f8-a0c4-32bf87cd31ec` +
      `&redirect_uri=${redirectUrl}`,
    interactive: true
  },
  function (responseWithToken) {
    console.log(responseWithToken,'pizdec')
      // the access token needs to be extracted from the response.
  }
);

var trans = chrome.contextMenus.create({
    "type": "normal",
    "title": "使用爱词霸翻译:%s",
    "contexts": ['selection'],
    "onclick" : translate,
});

function translate (info, tab) {
    var url = 'http://www.iciba.com/'+info.selectionText;
    window.open(url,'_blank');
}
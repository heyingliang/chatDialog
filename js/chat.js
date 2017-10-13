/*
 * Author: 何处青山
 * Email: ui_hyl@163.com
 * date: 2017/10/13 22:30
 */
(function(factory){
    // config
    window.CHAT_CONFIG = {
        /*
         * position 位置 可选left/center/right
         * icon 图标ID;
         * info 图标紧跟的信息;
         */
        head: [
            {'position':'left','icon':'back','href':'/'},
            {'position':'center','icon':'','info':'聊天窗口'},
            {'position':'right','icon':'user','href':'#user1'}
        ]
    };
    // run
    factory();
})(function(config){
    'use strict';
    const win = window;
    const doc = win.document;
    /*构造函数*/
    let Chat = function(arg){
        
    };
    /*640为稿*/
    /*初始化*/
    let head = window.CHAT_CONFIG.head;
    let _doc = doc.createDocumentFragment();
    let box = doc.createElement("section");
    let dev = doc.documentElement.offsetWidth>640 ? 640 : doc.documentElement.offsetWidth;

    box.id = "chat";
    box.style.fontSize = dev/6.4 + 'px';
    box.innerHTML = `
    <div class="head">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </div>
    <div class="content">
        <div class="news left">
            <a><svg><use xlink:href="svg/icons.svg#farm"></use></svg></a>
            <p>一段信息</p>
        </div>
        <div class="news right">
            <a><svg><use xlink:href="svg/icons.svg#Nile"></use></svg></a>
            <p>很长的很长的很长的很长的很长的很长的很长的很长的很长的另一段信息</p>
        </div>
    </div>
    <div class="foot">
        <div class="import">
            <p contenteditable="true"></p>
            <input type="button" value="发送">
        </div>
    </div>
    `;
    /*载入文档片段*/
    _doc.appendChild(box);

    /*遍历配置-载入头部*/
    for (let i = 0; i < head.length; i++) {
        let link = doc.createElement("a");
        let span = doc.createElement("span");
        if(head[i].icon){
            head[i].href ? link.href = head[i].href : "";
            link.innerHTML = '<svg><use xlink:href="svg/icons.svg#'+head[i].icon+'"></use></svg>';
        }
        switch(head[i].position){
            case "left":
            case "center":
                if(head[i].info){
                    span.innerText = head[i].info;
                    link.appendChild(span);
                }
                _doc.querySelector("div."+head[i].position).appendChild(link);
                break;
            case "right":
                if(head[i].info){
                    span.innerText = head[i].info;
                    // 文字在左，图标在右
                    link.firstChild ? link.insertBefore(span,link.firstChild) : link.appendChild(span);
                }
                _doc.querySelector("div."+head[i].position).appendChild(link);
                break;
        }
    }
    /*将片段载入文档*/
    doc.body.appendChild(_doc);
});

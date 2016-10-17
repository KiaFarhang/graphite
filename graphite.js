var domWalker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT);

while (domWalker.nextNode()) {
    checkBackground(domWalker.currentNode);
    checkColor(domWalker.currentNode);

    if (domWalker.currentNode.tagName == 'P') {
        checkLineHeight(domWalker.currentNode);
    }

    function checkBackground(node) {

        var thisNodeBackground = window.getComputedStyle(node)['background'];
        var thisNodeBackgroundColor = window.getComputedStyle(node)['background-color'];

        if (thisNodeBackground == 'rgb(255, 255, 255)' || thisNodeBackgroundColor == 'rgb(255, 255, 255)') {
            domWalker.currentNode.style.backgroundColor = '#F0F0F0';
        }
        if (thisNodeBackground == 'rgb(250, 250, 250)' || thisNodeBackgroundColor == 'rgb(240, 240, 240)') {
            domWalker.currentNode.style.backgroundColor = '#FFFFFF';
        }

        if (thisNodeBackground == 'rgb(0, 0, 0)' || thisNodeBackgroundColor == 'rgb(0, 0, 0)') {
            domWalker.currentNode.style.backgroundColor = '#171717';
        }
        if (thisNodeBackground == 'rgb(23, 23, 23)' || thisNodeBackgroundColor == 'rgb(23, 23, 23)') {
            domWalker.currentNode.style.backgroundColor = '#000000';
        }
    }

    function checkColor(node) {

        var thisNodeColor = window.getComputedStyle(node)['color'];

        if (thisNodeColor == 'rgb(255, 255, 255)') {
            domWalker.currentNode.style.color = '#F0F0F0';
        }
        if (thisNodeColor == 'rgb(240, 240, 240)') {
            domWalker.currentNode.style.color = '#FFFFFF';
        }
        if (thisNodeColor == 'rgb(0, 0, 0)') {
            domWalker.currentNode.style.color = '#171717';
        }
        if (thisNodeColor == 'rgb(23, 23, 23)') {
            domWalker.currentNode.style.color = "#000000";
        }

    }

    function checkLineHeight(node) {
        var thisNodeLineHeight = window.getComputedStyle(node)['line-height'];

        if(thisNodeLineHeight == 'normal'){
        	domWalker.currentNode.style.lineHeight = '1.3';
        }
    }
}

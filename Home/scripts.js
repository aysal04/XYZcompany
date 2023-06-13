function search() {
    var searchTerm = document.getElementById("search-input").value.trim();
    var regex = new RegExp(searchTerm, "gi");
    var textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

    var found = false;

    while (textNodes.nextNode()) {
        var node = textNodes.currentNode;
        var parent = node.parentNode;

        if (regex.test(node.nodeValue)) {
            found = true;
            var matches = node.nodeValue.match(regex);
            var highlightedText = node.nodeValue.replace(regex, '<span class="highlight">$&</span>');
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = highlightedText;
            var newNode = tempDiv.firstChild;

            while (newNode) {
                parent.insertBefore(newNode.cloneNode(true), node);
                newNode = newNode.nextSibling;
            }

            parent.removeChild(node);
        }
    }

    if (!found) {
        alert("No such word found.");
    }
}

export { Label, Button, Container }

function Container(parentId, children) {
    var parent = document.getElementById(parentId);
    if (children) {
        children.forEach(function(child) {
            child(parent);
        });
    }
}


function Label(title, color) {
    return function(parent) {
        color = color || 'white';
        var elem = document.createElement('div');
        elem.innerHTML = title;
        elem.style.backgroundColor = color;
        elem.style.width = '100%';
        elem.style.color = 'black';
        elem.style.padding = '15px 0px';
        elem.style.textAlign = 'center';
        elem.style.fontSize = '16px';
        parent.appendChild(elem);
    }
}


function Button(title, color, cb) {
    return function(parent) {
        color = color || '#4CAF50';
        var elem = document.createElement('button');
        elem.innerHTML = title;
        elem.style.backgroundColor = color;
        elem.style.width = '100%';
        elem.style.border = 'none';
        elem.style.color = 'white';
        elem.style.padding = '15px 0px';
        elem.style.margin = '5px 0px';
        elem.style.textAlign = 'center';
        elem.style.display = 'block';
        elem.style.fontSize = '16px';
        if (cb) elem.addEventListener('click', cb);
        parent.appendChild(elem);
    }
}
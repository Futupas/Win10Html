var Win10Html = {
    Create: function () {
        // var win10html = document.createElement('div');
        // win10html.id = "win10html";
        // document.body.appendChild(win10hhtml);
        var win10html = AddDElement('div', [], 'win10html');
        var mainscreen = AddElement(win10html, 'div', ['mainscreen'], '');
        var lockscreen = AddElement(win10html, 'div', ['lockscreen'], '');

        var desktop = AddElement(mainscreen, 'div', ['desktop'], '');
        var taskbar = AddElement(mainscreen, 'div', ['taskbar'], '');

        var windows = AddElement(taskbar, 'div', ['windows'], '');
        var rightpanel = AddElement(taskbar, 'div', ['rightpanel'], '');
        var programs = AddElement(taskbar, 'div', ['programs'], '');

        var showdesktop = AddElement(rightpanel, 'div', ['showdesktop'], '');
        var notifications = AddElement(rightpanel, 'div', ['notifications'], '');
        var datetime = AddElement(rightpanel, 'div', ['datetime'], '');
        var dt = new Date();
        var datestr = dt.getHours()+':'+dt.getMinutes()+'<br />'+dt.getDate()+'/'+(dt.getMonth()+1)+'/'+dt.getFullYear();
        datestr = datestr+'';
        datetime.innerHTML = datestr;
        setInterval(function(){
            var dt = new Date();
            var datestr = dt.getHours()+':'+dt.getMinutes()+'<br />'+dt.getDate()+'/'+(dt.getMonth()+1)+'/'+dt.getFullYear();
            datestr = datestr+'';
            datetime.innerHTML = datestr;
        }, 1000);
        var language = AddElement(rightpanel, 'div', ['language'], '');
        var volume = AddElement(rightpanel, 'div', ['volume'], '');
        var wifi = AddElement(rightpanel, 'div', ['wifi'], '');
        var battery = AddElement(rightpanel, 'div', ['battery'], '');
        var expand = AddElement(rightpanel, 'div', ['expand'], '');
    }
}

function AddDElement(tagname, classes, id) {
    var element = document.createElement(tagname);
    if (classes !== undefined) 
        for(var i = 0; i < classes.length; i++) element.classList.add(classes[i]);
    if (id !== undefined) element.id = id;
    document.body.appendChild(element);
    return element;
}
function AddElement(parent, tagname, classes, id) {
    var element = document.createElement(tagname);
    if (classes !== undefined) 
        for(var i = 0; i < classes.length; i++) element.classList.add(classes[i]);
    if (id !== undefined) element.id = id;
    parent.appendChild(element);
    return element;
}
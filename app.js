var Win10Html = {
    Create: function (configuration) {
        var win10html = AddDElement('div', [], 'win10html');
        var mainscreen = AddElement(win10html, 'div', ['mainscreen'], '');
        var lockscreen = AddElement(win10html, 'div', ['lockscreen'], '');

        var desktop = AddElement(mainscreen, 'div', ['desktop'], '');
        desktop.style.backgroundImage = 'url("'+configuration.desktop.wallpapers+'")';
        var taskbar = AddElement(mainscreen, 'div', ['taskbar'], '');

        var windows = AddElement(taskbar, 'div', ['windows'], '');
        var search = AddElement(taskbar, 'div', ['search'], '');
        var taskview = AddElement(taskbar, 'div', ['taskview'], '');
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
        language.innerText = 'УКР';
        var volume = AddElement(rightpanel, 'div', ['volume'], '');
        var wifi = AddElement(rightpanel, 'div', ['wifi'], '');
        var battery = AddElement(rightpanel, 'div', ['battery'], '');
        var expand = AddElement(rightpanel, 'div', ['author'], '');
        var expand = AddElement(rightpanel, 'div', ['expand'], '');


        for (var i = 0; i < configuration.programs.length; i++){
            var prog = AddElement(programs, 'div', ['prog', 'opened']);
            prog.win10html_programData = configuration.programs[i];
            var icon = AddElement(prog, 'div', ['icon']);
            icon.style.backgroundImage = 'url("'+configuration.programs[i].icon+'")';
            AddElement(prog, 'div', ['title']).innerText = configuration.programs[i].name;

            prog.onclick = function () {
                var window = AddElement(desktop, 'div', ['window', 'opened']);
                var header = AddElement(window, 'div', ['header']);
                AddElement(header, 'div', ['icon']).style.backgroundImage = 'url("'+this.win10html_programData.icon+'")';
                AddElement(header, 'div', ['name']).innerText = this.win10html_programData.name;
                var rightbuttons = AddElement(header, 'div', ['rightbuttons']);
                AddElement(rightbuttons, 'div', ['minimize']);
                var close = AddElement(rightbuttons, 'div', ['close']);
                close.onclick = function(){
                    console.dir(this.parentElement.parentElement.parentElement);
                    this.parentElement.parentElement.parentElement.remove();
                };

                var content = AddElement(window, 'div', ['content']);
                var inner = AddElement(content, 'iframe');
                inner.src = this.win10html_programData.prog;
                // inner.style.position = 'absolute';
                // inner.style.border = '0px';
                // inner.style.top = inner.style.left = inner.style.bottom = inner.style.right = '0px';
                // inner.style.width = inner.style.height = '100%';
            }
        }
    }
}

/*
configuration = {
    desktop: {
        wallpapers: ''
    }
}
*/


/**
 * Node
 * @param {string} tagname 
 * @param {string[]} classes 
 * @param {string} id 
 */
function AddDElement(tagname, classes, id) {
    var element = document.createElement(tagname);
    if (classes !== undefined) 
        for(var i = 0; i < classes.length; i++) element.classList.add(classes[i]);
    if (id !== undefined) element.id = id;
    document.body.appendChild(element);
    return element;
}
/**
 * Node
 * @param {Node} parent 
 * @param {string} tagname 
 * @param {string[]} classes 
 * @param {string} id 
 */
function AddElement(parent, tagname, classes, id) {
    var element = document.createElement(tagname);
    if (classes !== undefined) 
        for(var i = 0; i < classes.length; i++) element.classList.add(classes[i]);
    if (id !== undefined) element.id = id;
    parent.appendChild(element);
    return element;
}
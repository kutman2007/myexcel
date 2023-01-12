let h2 = document.createElement('h2')
h2.innerText='Новая Таблица'
document.body.prepend(h2)
let img = document.createElement('img')
img.src='done_FILL0_wght400_GRAD0_opsz48.png'
img.classList='ok'
h2.append(img)
let img2 = document.createElement('img')
img2.src='backspace_FILL0_wght400_GRAD0_opsz40.png'
img2.classList='close'
h2.append(img2)
let hr = document.createElement('hr')
h2.append(hr)
let right = document.createElement('img')
right.classList='right'
right.src='format_align_right_FILL0_wght400_GRAD0_opsz24.png'
document.body.append(right)
let center = document.createElement('img')
center.classList='center'
center.src='format_align_center_FILL0_wght400_GRAD0_opsz24.png'
document.body.append(center)
let left = document.createElement('img')
left.classList='left'
left.src='segment_FILL0_wght400_GRAD0_opsz24.png'
document.body.append(left)
let a = document.createElement('img')
a.classList='a'
a.src='A+.png'
document.body.append(a)
let t = document.createElement('img')
t.classList='t'
t.src='T.png'
document.body.append(t)
let r = document.createElement('img')
r.classList='r'
r.src='letterI.png'
document.body.append(r)
let hr2 = document.createElement('hr')
document.body.append(hr2)

let table = document.createElement('table')
document.body.append(table)
for (var i=0; i<23; i++) {
    var row = document.querySelector("table").insertRow(-1);
    for (var j=0; j<11; j++) {
        var letter = String.fromCharCode("A".charCodeAt(0)+j-1);
        row.insertCell(-1).innerHTML = i&&j ? "<input id='"+ letter+i +"'/>" : i||letter;
    }
}

var DATA={}, INPUTS=[].slice.call(document.querySelectorAll("input"));
INPUTS.forEach(function(elm) {
    elm.onfocus = function(e) {
        e.target.value = localStorage[e.target.id] || "";
    };
    elm.onblur = function(e) {
        localStorage[e.target.id] = e.target.value;
        computeAll();
    };
    var red = function() {
        var value = localStorage[elm.id] || "";
        if (value.charAt(0) == "=") {
            with (DATA) return eval(value.substring(1));
        } else { return isNaN(parseFloat(value)) ? value : parseFloat(value); }
    };
    Object.defineProperty(DATA, elm.id, {get:red});
    Object.defineProperty(DATA, elm.id.toLowerCase(), {get:red});
});
(window.computeAll = function() {
    INPUTS.forEach(function(elm) { try { elm.value = DATA[elm.id]; } catch(e) {} });
})();

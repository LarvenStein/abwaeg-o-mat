function InputhasText(eid, type, num) {
    var LastElement = document.querySelector('.'+type+' > input:last-of-type').getAttribute("data-number");

    document.getElementById(type + '-num').textContent = LastElement;

    num = Number(num) + 1;

        element = document.getElementById(type + '-' + num);

        if(type == 'pro') {
            var shortType = 'p';
        } else {
            var shortType = 'c';
        }


        if (typeof(element) != 'undefined' && element != null){
        } else {
            document.getElementById(eid).classList.remove('disabled');
            document.getElementById(eid).classList.add('enabled');
            document.getElementById(type).insertAdjacentHTML('beforeend', '<input type="text" name="'+shortType+'-'+num+'" class="disabled animation '+type+'" onkeydown="ToNextInput(event, &#39;'+type+'&#39;)" onfocus="InputhasText(&#39;'+type+'-'+num+'&#39;, &#39;'+type+'&#39;, &#39;'+num+'&#39;)" id="'+type+'-'+num+'" data-number="'+num+'">');


            document.getElementById(eid).focus();
            document.getElementById(eid).select();
        }

        setTimeout(showElement, 3);

        function showElement() {
            document.getElementById(type+'-'+num).classList.add('show');
        }
}

function ToNextInput(x, type) {
    if(x.key == 'Enter') {
        var ToType = 'pro';
        if(type == 'pro') {
            var ToType = 'con';
        }
        var ToElement = document.getElementById(document.querySelector('.'+ToType+' > input:last-of-type').id);
        ToElement.focus();
        ToElement.select();
    }
}

function GenerateSubmitURL(step) {
    var ProURLString = '&p=';
    var ConURLString = '&c=';

    var proelements = document.getElementsByClassName('enabled pro');
    var conelements = document.getElementsByClassName('enabled con');


    if(step == 'step-2') {
        for (var i = 0; i < proelements.length; i++) {
            ProURLString += proelements[i].getAttribute("data-weight") + '⇨' + proelements[i].value + '◦';
        }
        for (var i = 0; i < conelements.length; i++) {
            ConURLString += conelements[i].getAttribute("data-weight") + '⇨' + conelements[i].value + '◦';
        }
    } else {
        for (var i = 0; i < proelements.length; i++) {
           ProURLString += proelements[i].value + '◦';
        }
        for (var i = 0; i < conelements.length; i++) {
            ConURLString += conelements[i].value + '◦';
        }
    }

    var CompleteURL = window.location.origin + document.getElementById('next-step').getAttribute("data-next") + '/?t=' + getThese() + ProURLString + ConURLString;

    window.location.href = CompleteURL;

}

function getThese() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const these = urlParams.get('t');
    document.getElementById('these').textContent = these;

    return these;
}

function GetArguments() {

    var Proargumentlist = getParameter('p');
    var Proarguments = Proargumentlist.split("◦");

    for(var i = 0; i < Proarguments.length; i++){
        if(Proarguments[i].length > 0) {
            document.getElementById('pro').insertAdjacentHTML('beforeend', '<div class="flex"><span id="btn-pro-'+i+'" class="weight active" onclick="UpdateGewichtung(&#39;pro-'+i+'&#39;)">1x</span><input type="text" class="locked enabled pro" value="'+ Proarguments[i] +'" data-weight="1" id="pro-'+i+'" disabled></div>');
        }
    }

    var Conargumentlist = getParameter('c');
    var Conarguments = Conargumentlist.split("◦");

    for(var i = 0; i < Conarguments.length; i++){
        if(Conarguments[i].length > 0) {
            document.getElementById('con').insertAdjacentHTML('beforeend', '<div class="flex"><span id="btn-con-'+i+'" class="weight active" onclick="UpdateGewichtung(&#39;con-'+i+'&#39;)">1x</span><input type="text" class="locked enabled con" value="'+ Conarguments[i] +'" data-weight="1" id="con-'+i+'" disabled></div>');
        }
    }
    
}

window.onload = GetArguments();
window.onload = getThese();

function UpdateGewichtung(id) {
    var OrgWeight = document.getElementById(id).getAttribute("data-weight");
    var NewWeight = Number(OrgWeight) + 1;
    if(OrgWeight == 5) {
        NewWeight = 1;
    }
    document.getElementById('btn-'+id).innerHTML = NewWeight + 'x';
    document.getElementById(id).dataset.weight = NewWeight;
}

function getParameter(parameter) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const ParamContent = urlParams.get(parameter);

    return ParamContent;
}
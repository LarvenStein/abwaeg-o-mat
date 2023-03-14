    var PrintPro = '<div class="indicator"><h3>Pro</h3></div>';
    var PrintCon = '<div class="indicator"><h3>Contra</h3></div>';

function calculateResult() {
    var Proargumentlist = getParameter('p');
    var Proarguments = Proargumentlist.split("◦");
    var ProCount = 0;
    var ConCount = 0;
    var ProArgs = 0;
    var ConArgs = 0;
    var ProWeight = 0;
    var ConWeight = 0;
    


    for(var i = 0; i < Proarguments.length; i++){
        if(Proarguments[i].length > 0) {
            var weight = Proarguments[i].split("⇨");
            document.getElementById('pro').insertAdjacentHTML('beforeend', '<div class="flex"><span id="btn-pro-'+i+'" class="weight locked">'+weight[0]+'x</span><input type="text" class="enabled pro locked" value="'+ weight[1] +'" data-weight="1" id="pro-'+i+'" disabled></div>');
            var Argweight = 1 * Number(weight[0]);
            ProCount = Number(ProCount) + Number(Argweight);
            ProArgs = Number(ProArgs) + 1;
            ProWeight = Number(ProWeight) + Number(Argweight) - 1;   
            PrintPro += '<div class="flex"><p type="text" class="print">'+ weight[1] +'</p></div>';
        }
    }

    var Conargumentlist = getParameter('c');
    var Conarguments = Conargumentlist.split("◦");

    for(var i = 0; i < Conarguments.length; i++){
        if(Conarguments[i].length > 0) {
            var weight = Conarguments[i].split("⇨");
            document.getElementById('con').insertAdjacentHTML('beforeend', '<div class="flex"><span id="btn-con-'+i+'" class="weight locked">'+weight[0]+'x</span><input type="text" class="enabled con locked" value="'+ weight[1] +'" data-weight="1" id="con-'+i+'" disabled></div>');
            var Argweight = 1 * Number(weight[0]);
            ConCount = Number(ConCount) + Number(Argweight);
            ConArgs = Number(ConArgs) + 1;
            ConWeight = Number(ConWeight) + Number(Argweight) - 1;    
            PrintCon += '<p type="text" class="print">'+ weight[1] +'</p>';

        }
    }

    if(Number(ProCount) > Number(ConCount)) {
        document.getElementById('result').innerHTML = '<span class="cgreen">Pro</span>';
        var winner = 'pro';
    }
    if(Number(ProCount) < Number(ConCount)) {
        document.getElementById('result').innerHTML = '<span class="cred">Contra</span>';
        var winner = 'con';
    }
    if(Number(ProCount) == Number(ConCount)) {
        document.getElementById('result').innerHTML = 'Unentschieden';
    }

    document.getElementById('ProArgs').textContent = ProArgs;
    document.getElementById('ProWeight').textContent = ProWeight;
    document.getElementById('ProAll').textContent = ProCount;

    document.getElementById('ConArgs').textContent = ConArgs;
    document.getElementById('ConWeight').textContent = ConWeight;
    document.getElementById('ConAll').textContent = ConCount;

    document.getElementById('table-' + winner).classList.add("winner");
}

function getThese() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const these = urlParams.get('t');
    document.getElementById('these').textContent = these;

    return these;
}

window.onload = calculateResult();
window.onload = getThese();

function getParameter(parameter) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const ParamContent = urlParams.get(parameter);

    return ParamContent;
}

function goHome() {
    window.location.href = window.location.origin;
}

function Share() {
    window.prompt("STRG+C zum Kopieren", window.location.href);
}

function DoPrint() {
    var buttons = document.getElementById('footer').innerHTML;
    var OldPro = document.getElementById('pro').innerHTML;
    var OldCon = document.getElementById('con').innerHTML;
    document.getElementById('footer').innerHTML = "";
    document.getElementById('pro').innerHTML = PrintPro;
    document.getElementById('con').innerHTML = PrintCon;
    
    print();
    
    document.getElementById('footer').innerHTML = buttons;
    document.getElementById('pro').innerHTML = OldPro;
    document.getElementById('con').innerHTML = OldCon;
}

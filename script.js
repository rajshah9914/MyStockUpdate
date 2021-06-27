function fun(){
    let form  = document.getElementById('update');
    let Http = new XMLHttpRequest();
    var sname=form.elements[0].value;
    var quantity=form.elements[1].value;
    var cost1=form.elements[2].value;
    var costn=form.elements[3].value;
    var transfer=form.elements[5].value;
    var dot=form.elements[4].value;
    dot=dot.toString();
    var bs=form.elements[6].value;
    const url = 'https://stockupdate.rajshah9914.repl.co/shareupdate?sname='+sname+'&quantity='+quantity+'&cost1='+cost1+'&costn='+costn+'&transfer='+transfer+'&dot='+dot+'&bs='+bs;
    Http.open("GET", url);
    Http.send();

    // Http.onreadystatechange = function() {
    //     alert("hii")
    //     if (Http.readyState == 4 && Http.status == 200) {
    //         alert("hi");
    //     }
    // }
}

function getdetails(){
    document.getElementById("fetch").disabled = true;
    let Http = new XMLHttpRequest();
    const url = 'https://stockupdate.rajshah9914.repl.co/getdetails';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = function () {
        console.log(Http)
        if (Http.readyState == 4 && Http.status == 200) {
            console.log(Http.responseText);
            var respt = JSON.parse(Http.responseText);
            var pp='border="10"'
            var st = '<table width="100%" border="1px solid black">'+
            '<tr><th '+pp+'>Share Name</th><th '+pp+'>Quantity</th><th '+pp+'>Cost1</th><th '+pp+'>CostN</th>'
            +'<th '+pp+'>B/S</th><th '+pp+'>Date</th><th '+pp+'>Deposit</th></tr>'
            console.log(respt)
            if (respt.length) {
                for (var x in respt) {
                    st+='<tr>'
                    st += '<td '+pp+'>' + respt[x]['Share'] + '</td>'
                    st += '<td '+pp+'>' + respt[x]['Quantity'] + '</td>'
                    st += '<td '+pp+'>' + respt[x]['C1'] + '</td>'
                    st += '<td '+pp+'>' + respt[x]['Cn'] + '</td>'
                    if(respt[x]['Type']=="1")
                    st += '<td '+pp+'>' + 'B' + '</td>'
                    else
                    st += '<td '+pp+'>' + 'S' + '</td>'
                    st += '<td '+pp+'>' + respt[x]['date'] + '</td>'
                    st += '<td '+pp+'>' + respt[x]['Deposit'] + '</td>'
                    st+='</tr>'
                }
            }
            st += '</table>'
            console.log(st)
            document.getElementById('update').innerHTML = st;
        }
    }
}
var data = [
    {
        id: 0,
        name: "Janu",
        English: 50,
        Maths: 86,
        Science: 77,
        SocialScience: 88
    },
    {
        id: 1,
        name: "Thanu",
        English: 75,
        Maths: 96,
        Science: 67,
        SocialScience: 91
    },
    {
        id: 2,
        name: "Tara",
        English: 90,
        Maths: 35,
        Science: 86,
        SocialScience: 100
    },
    {
        id: 3,
        name: "Glen",
        English: 79,
        Maths: 68,
        Science: 77,
        SocialScience: 78
    },
    {
        id: 4,
        name: "Zara",
        English: 80,
        Maths: 85,
        Science: 96,
        SocialScience: 68
    }
]
var checkAbove;
var checkBelow;
var checkBetween;

function onPageLoad() {
    // code goes here to display table on page loads
    var obj = document.getElementById("studentData");
    obj.innerHTML='';
    for(i=0;i<data.length;i++){
        var table = document.getElementById('studentData');
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);  
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML=data[i].id+1;
        cell2.innerHTML=data[i].name;
        cell3.innerHTML=data[i].English;
        cell4.innerHTML=data[i].Maths;
        cell5.innerHTML=data[i].Science;
        cell6.innerHTML=data[i].SocialScience;
      }
}

function filterBy() {
    // code goes here to select filter by option
    var checkAbove = document.getElementById('above').checked;
    var checkBelow = document.getElementById('below').checked;
    var checkBetween = document.getElementById('between').checked;
    if(checkBetween===true){
        document.getElementById("to").style.display="inline-block"
        document.getElementById("maxMark").style.display="inline-block"
    }
    if(checkAbove===true){
        document.getElementById("to").style.display="none"
        document.getElementById("maxMark").style.display="none"
    }
    if(checkBelow===true){
        document.getElementById("to").style.display="none"
        document.getElementById("maxMark").style.display="none"
    }
    //console.log(checkAbove,checkBelow,checkBetween);
    
}

function Clear() {
    // code goes here to clear filter
    onPageLoad();
    document.getElementById('mark').value=''
    document.getElementById('maxMark').value=''
    document.getElementById('above').checked=true;
    document.getElementById('subjects').selectedIndex = '0';
    document.getElementById("to").style.display="none"
    document.getElementById("maxMark").style.display="none"
    
}

function filterClick() {
    onPageLoad();
    var checkAbove = document.getElementById('above').checked;
    var checkBelow = document.getElementById('below').checked;
    var checkBetween = document.getElementById('between').checked;
    // code goes here to handle filter button
    var subject = document.getElementById('subjects').value;
    //console.log(subject);
    table = document.getElementById("studentData");
    tr = table.getElementsByTagName("tr");
    //console.log(tr)
    if(checkAbove){
        var x = parseInt(document.getElementById('mark').value);
        for (i = 0; i < tr.length; i++) {
            switch(subject){
                case 'English':
                    td = tr[i].getElementsByTagName("td")[2].innerText;
                    if(!(td>x)){
                       tr[i].style.display="none"  
                    }
                    break;
                case 'Maths':
                    td = tr[i].getElementsByTagName("td")[3].innerText;
                    console.log(td)
                    if(!(td>x)){
                        tr[i].style.display="none"
                    }
                    break;
                case 'Science':
                    td = tr[i].getElementsByTagName("td")[4].innerText;
                    if(!(td>x)){
                        tr[i].style.display="none"
                    }
                    break;
                case 'SocialScience':
                    td = tr[i].getElementsByTagName("td")[5].innerText;
                    if(!(td>x)){
                        tr[i].style.display="none"
                    }
                    break;
            }
        }  
        correctIndex()
    }
    if(checkBelow){
        var y = document.getElementById('mark').value;
        for (i = 0; i < tr.length; i++) {
            switch(subject){
                case 'English':
                    td = tr[i].getElementsByTagName("td")[2].innerText;
                    if(!(td<y)){
                        tr[i].style.display="none"
                    }
                    break;
                case 'Maths':
                    td = tr[i].getElementsByTagName("td")[3].innerText;
                    if(!(td<y)){
                        tr[i].style.display="none"
                    }
                    break;
                case 'Science':
                    td = tr[i].getElementsByTagName("td")[4].innerText;
                    if(!(td<y)){
                        tr[i].style.display="none"
                    }
                    break;
                case 'SocialScience':
                    td = tr[i].getElementsByTagName("td")[5].innerText;
                    if(!(td<y)){
                        tr[i].style.display="none"
                    }
                    break;
            }
        }
        correctIndex()
    }

    if(checkBetween){
        var x = parseInt(document.getElementById('mark').value);
        var y = parseInt(document.getElementById('maxMark').value);
        for (i = 0; i < tr.length; i++) {
            switch(subject){
                case 'English':
                    td = tr[i].getElementsByTagName("td")[2];
                    console.log(td.innerHTML+'>'+x +'&&'+ td.innerText+'<'+y)
                    console.log(Boolean(td.innerText>x))
                    if(!(td.innerText>x && td.innerText<y)){
                        tr[i].style.display="none"
                    }
                    break;
                case 'Maths':
                    td = tr[i].getElementsByTagName("td")[3];
                    console.log(td.innerText);
                    if(!(td.innerText>x && td.innerText<y)){
                        tr[i].style.display="none"
                    }
                    break;
                case 'Science':
                    td = tr[i].getElementsByTagName("td")[4];
                    if(!(td.innerText>x && td.innerText<y)){
                        tr[i].style.display="none"
                    }
                    break;
                case 'SocialScience':
                    td = tr[i].getElementsByTagName("td")[5];
                    if(!(td.innerText>x && td.innerText<y)){
                        tr[i].style.display="none"
                    }
                    break;
            }
        }
        correctIndex()
    }
}
function correctIndex(){
    var table = document.getElementById('studentData');
    //console.log(table.rows.length);
    var counter = 1;
    const l = table.rows.length;
    //console.log(l)
    var indexToRemove = []
    for(var i = 0; i<l; i++){
        table.rows[i].setAttribute('id',i)
        if(table.rows[i].style.display!="none"){
            table.rows[i].cells[0].innerHTML=counter;
            counter = counter + 1;
        }else{
            console.log(i,table.rows[i].style.display);
            //table.rows[i].remove();
            indexToRemove.push(i);
        }
    }
    var x;
    console.log(indexToRemove)
    for(x in indexToRemove){
        document.getElementById(indexToRemove[x]).remove();
    }
}
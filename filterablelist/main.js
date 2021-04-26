let inputField = document.getElementById('filterInput')
inputField.addEventListener('keyup',filterNames);

function filterNames () {
    let value = document.getElementById('filterInput').value.toUpperCase();
    let names = document.getElementById('names');
    let li = names.querySelectorAll('li.collection-item');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(value) > -1) {
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none'
        }
    }

}
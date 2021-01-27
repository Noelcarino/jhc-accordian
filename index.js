document.getElementById('box-1').addEventListener('click', toggleBox);





function toggleBox(){

    if (document.getElementById('box-contents-1').style.display === 'block'){
        document.getElementById('box-contents-1').style.display = 'none';
    } else {
        document.getElementById("box-contents-1").style.display = "block";
    }

}
document.getElementById('box-1').addEventListener('click', toggleBox);document.getElementById('box-2').addEventListener('click', toggleBox);
document.getElementById('box-3').addEventListener('click', toggleBox);






function toggleBox(e){

    if (e.target.id === 'box-1') {
        if (document.getElementById('box-contents-1').style.display === 'block') {
            document.getElementById('box-contents-1').style.display = 'none';
        } else {
            document.getElementById('box-contents-1').style.display = "block";
        }
        return;
    }
    if (e.target.id === 'box-2') {
        if (document.getElementById('box-contents-2').style.display === 'block') {
            document.getElementById('box-contents-2').style.display = 'none';
        } else {
            document.getElementById('box-contents-2').style.display = "block";
        }
        return;
    }
    if (e.target.id === 'box-3') {
        if (document.getElementById('box-contents-3').style.display === 'block') {
            document.getElementById('box-contents-3').style.display = 'none';
        } else {
            document.getElementById('box-contents-3').style.display = "block";
        }
        return;
    }
}
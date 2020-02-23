
window.onload = function() {
    startDB();
    navigate(0);
  };

function navigate(pageId) {
    if(pageId==0){//mis notas
        document.getElementById("pgMyNotes").style.display="block";
        document.getElementById("pgNewNote").style.display="none";
        document.getElementById("pgViewNote").style.display="none";
        CargarNotas();
    }

    if(pageId==1){//nueva nota
        document.getElementById("pgMyNotes").style.display="none";
        document.getElementById("pgNewNote").style.display="block";
        document.getElementById("pgViewNote").style.display="none";
    }

    if(pageId==2){//ver nota
        document.getElementById("pgMyNotes").style.display="none";
        document.getElementById("pgNewNote").style.display="none";
        document.getElementById("pgViewNote").style.display="block";

    }
}


function readImage(input) {
    if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
    var img = document.getElementById('imgAvatarPreview');
    img.src = e.target.result;
    img.style.visibility = 'visible';
    };
    reader.readAsDataURL(input.files[0]);
    }
}
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var dataBase = null;


function startDB() { 
    dataBase = indexedDB.open("Notas", 1);


    dataBase.onupgradeneeded = function (e) {
        active = dataBase.result;
        active.createObjectStore("MisNotas",  { keyPath : 'id', autoIncrement : true });
        object = active.createObjectStore("Nota", { keyPath : 'id', autoIncrement : true });
        object.createIndex('Asunto', 'asunto', { unique : false });
        object.createIndex('Texto', 'texto', { unique : false });
        object.createIndex('Fecha', 'fecha', { unique : false });
    };
    
    dataBase.onsuccess = function (e) {
      //  alert('Base de datos cargada correctamente');
        CargarNotas();
    };
            
    dataBase.onerror = function (e)  {
       // alert('Error cargando la base de datos');
    };
}


function NuevaNota(){
    var active=dataBase.result;
    var data = active.transaction(["Nota"],"readwrite");
    var object = data.objectStore("Nota");

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    if (dd < 10) {
        dd = '0' + dd;
    } 
    if (mm < 10) {
        mm = '0' + mm;
    } 
    var yyyy = today.getFullYear();
    var today = dd + '/' + mm + '/' + yyyy;


    //var reader = new FileReader();
    //var input = document.getElementById("fileAvatar");
    //reader.readAsDataURL(input.files[0]);

    var request=    object.put({
            Asunto : document.querySelector("#Asunto").value,
            Texto : document.querySelector("#Texto").value,
            Fecha : today,
           // Imagen : reader.readAsBinaryString(input.files[0])
        });


    request.onerror = function(e){
        alert('error al insertar: '+ request.error.message);
    }

    data.oncomplete = function(e){
        document.querySelector("#Asunto").value='';
        document.querySelector("#Texto").value='';
        //alert('insertado');
        navigate(0);
    }
}

function CargarNotas(){
    var active= dataBase.result;
    //alert('cargando'+active);

   // var active= dataBase.result;
   if(active!=null){
        var data= active.transaction(["Nota"],"readonly");
        var object= data.objectStore("Nota");
        var elements=[]

        object.openCursor().onsuccess= function (e){

            var result = e.target.result;
            if (result ==null){
                return;
            }
            elements.push(result.value)
            result.continue();
        }

        data.oncomplete=function(){
            
            //alert(data);
            var outerHTML='';

            for(var key in elements){

               // outerHTML+='<div class="demo-card-wide mdl-card mdl-shadow--2dp"><div class="mdl-card__supporting-text"><h5>'+elements[key].id+' - '+ elements[key].Asunto+'<h5/></div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">'+elements[key].Texto+'</a></div></div>';
                outerHTML+= '<div><div class="tarjeta"  ><div class="imagennota" onclick="CargarNota('+elements[key].id+')"><img src="nota.png" width="50px" height="50px"/></div><div class="Titulo">'+ elements[key].Fecha+' - '+ elements[key].Asunto+'</div><br/><div class="Texto">'+elements[key].Texto.substring(0,50)+'</div><div><button class="iconodelete material-icons" onclick="if(confirm(\'¿Desea eliminar esta nota?\'))BorrarNota('+elements[key].id+')">delete</button></div></div>' ;
            }
            elements=[];
            document.querySelector("#Listanotas").innerHTML=outerHTML;

        }

    }


}

function Filtrar(){

   var filtro= document.getElementById("buscar").value;
   CargarNotasFiltradas(filtro);
}

function CargarNotasFiltradas(filter){
    document.querySelector("#Listanotas").innerHTML='';

    var active= dataBase.result;
    //alert('cargando'+active);

   // var active= dataBase.result;
   if(active!=null){
        var data= active.transaction(["Nota"],"readonly");
        var object= data.objectStore("Nota");
        var elements=[]

        object.openCursor().onsuccess= function (e){

            var result = e.target.result;
            if (result ==null){
                return;
            }
            if(result.value.Asunto.includes(filter)|| result.value.Texto.includes(filter)){
            elements.push(result.value)
            }
            result.continue();
        }

        data.oncomplete=function(){
            
            //alert(data);
            var outerHTML='';

            for(var key in elements){

               // outerHTML+='<div class="demo-card-wide mdl-card mdl-shadow--2dp"><div class="mdl-card__supporting-text"><h5>'+elements[key].id+' - '+ elements[key].Asunto+'<h5/></div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">'+elements[key].Texto+'</a></div></div>';
                outerHTML+= '<div><div class="tarjeta" ondblclick="CargarNota('+elements[key].id+')" ><div class="imagennota"><img src="nota.png" width="50px" height="50px"/></div><div class="Titulo">'+ elements[key].Fecha+' - '+ elements[key].Asunto+'</div><br/><div class="Texto">'+elements[key].Texto.substring(0,50)+'</div><div><button class="iconodelete material-icons" onclick="if(confirm(\'¿Desea eliminar esta nota?\'))BorrarNota('+elements[key].id+')">delete</button></div></div>' ;
            }
            elements=[];
            document.querySelector("#Listanotas").innerHTML=outerHTML;

        }

    }
}

function CargarNota(id){
    var active= dataBase.result;
    var data= active.transaction(["Nota"],"readonly");
    var object = data.objectStore("Nota");

    var request= object.get(parseInt(id));

    request.onsuccess = function (){

        var result= request.result;

            if(result!== undefined){
                document.getElementById("txtAsunto").value=result.Asunto;
                document.getElementById("txtTexto").value=result.Texto;
                //if(result.Imagen != undefined)
                //document.getElementById("adjunto").src='data:image/jpeg;base64,' + btoa(result.Imagen);
            }
        navigate(2);
    }

    
}

function BorrarNota(id){
    var active= dataBase.result;
    var data= active.transaction(["Nota"],"readwrite");
    var object = data.objectStore("Nota");

    var request= object.delete(parseInt(id));

    request.onsuccess = function (){
        navigate(0);
    }

    
}

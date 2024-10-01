fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
         
            .then(data=>{
                console.log(data)
                data.map((element) => creacionCart(element.title , element.image, element.description , element.price));
            })
 
 
   
 
function creacionCart(titulo,image,descripcion, precio) {
   
    let newCol = document.createElement('div')
        newCol.classList.add('')

     //creamos el elemento div como contenedor de la carta
    let newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.style.width = '20rem';
        newDiv.style.height = 'auto';
        // newDiv.style = {
        //   "width": "20rem",
        //   "heigth": "auto"
        // }
   
 
 
 
    //creamos el elemento img para las imagenes
    let newimg = document.createElement('img');
        newimg.src = image;
        newimg.alt = 'Imagen del plato';
        newimg.classList.add('card-img-top');
        newimg.style.width = '300px';
        newimg.style.height = '300px';
   
    //creamos el elemento div que contendra las descripciones
 
    let divDescripcion = document.createElement('div');
        divDescripcion.classList.add('card-body');
 
    //creamos el elemento p para el precio
    let newtitle = document.createElement('h5');
        newtitle.textContent = titulo;
        newtitle.classList.add('card-title');
 
 
    let newprice = document.createElement('p');
        newprice.textContent = `$${precio}`;
        newprice.classList.add('card-text');
 
    let newButon = document.createElement('a');
        newButon.textContent = "Comprar";
        newButon.classList.add('btn');
        newButon.classList.add('btn-primary');
 
    divDescripcion.appendChild(newtitle);
    divDescripcion.appendChild(newprice);
    divDescripcion.appendChild(newButon);
 
 
    newDiv.appendChild(newimg);
    newDiv.appendChild(divDescripcion);
   
   
    let section = document.getElementById("section");
    section.appendChild(newDiv);
 
 
}
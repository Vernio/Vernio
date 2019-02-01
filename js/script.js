



(function(){
  function createTip(ev){
  	const element = ev.target;
    var title = this.title;
    this.title = '';
    this.setAttribute("tooltip", title);

	var tooltipWrap = document.createElement("div"); //creates div
    tooltipWrap.className = 'tooltip'; //adds class
    tooltipWrap.appendChild(document.createTextNode(title)); //add the text node to the newly created div.

    var firstChild = document.body.firstChild;//gets the first elem after body
    firstChild.parentNode.insertBefore(tooltipWrap, firstChild); //adds tt before elem

    var padding = 5;
    var linkProps = this.getBoundingClientRect();
    var tooltipProps = tooltipWrap.getBoundingClientRect();


    

    // console.log(tooltipProps.height);

    const topPos = linkProps.top - (tooltipProps.height + padding) ;
    const leftPos = linkProps.left + (linkProps.width - tooltipProps.width) / 2


    // tooltipWrap.setAttribute('style','top:'+topPos+'px;'+'left:'+linkProps.left+'px;')
    tooltipWrap.style.top = topPos + 'px';
    tooltipWrap.style.left = leftPos + 'px';
    // tooltipWrap.setAttribute('style','left:'+linkProps.left+'px;')

  }
  function cancelTip(ev){
    var title = this.getAttribute("tooltip");
    this.title = title;
    this.removeAttribute("tooltip");
    document.querySelector(".tooltip").remove();
  }



  var links = document.links;
  for(var i=0; i < links.length; i++){
     var a = links[i];
     if(a.title !== ''){
       a.addEventListener('mouseover',createTip);
       a.addEventListener('mouseout',cancelTip);
     }
    //  console.log(a);
  } //END FOR




})();//end iffy

// MODALS 


let modal;
let modalInner;
let portCodi = document.querySelector('.codi-element-big');

let open = document.querySelectorAll('.open');

function closeModal(e) {
  document.body.style.margin = '';
  document.body.style.overflow = '';
  portCodi.style.overflow = 'hidden';
   modal.remove();

};


function openModal(e, imgs) {

  let scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  document.body.style.margin = '0px ' + scrollBarWidth + 'px 0px 0px';
  document.body.style.overflow = 'hidden';

  modal = document.createElement('div');
  modal.classList.add('modal');
  portCodi.appendChild(modal);
  portCodi.style.overflow = 'visible';
  modal.addEventListener('click', closeModal);


  modalInner = document.createElement('div');
  modalInner.classList.add('modal-inner');
  modal.appendChild(modalInner);

  let closeBtn = document.createElement('div');
  closeBtn.setAttribute('id', 'close-button');
  closeBtn.textContent = 'x';
  modalInner.appendChild(closeBtn);

  let modalTitle = document.createElement('h1');
  modalTitle.classList.add('modal-h1');
  modalTitle.textContent = 'Codility Dectop App';
  modalInner.appendChild(modalTitle);
  
   window.addEventListener('keyup', function(e){
    if(e.keyCode == 27){
      closeModal();
    }
  });

    for (var i = 0; i <  modal.childNodes.length; i++) {
      let close = document.getElementById('close-button');

  modal.childNodes[i].addEventListener('click', function (e) {
    if (e.target === close) {
      closeModal();

    } else {
      e.stopPropagation();
    }
    
  });
}

  // e.preventDefault();
};

function thankYou() {
  let thankYou = document.createElement('p');
    thankYou.classList.add('modal-h1-thanks');
    thankYou.textContent = 'Thanks for watching!';
    modalInner.appendChild(thankYou);

  let closeEndBtn = document.createElement('button');
  closeEndBtn.setAttribute('type', 'button');
  closeEndBtn.classList.add('close-end-btn');
  closeEndBtn.textContent = 'Back to Portfolio';
  closeEndBtn.addEventListener('click', closeModal);
  modalInner.appendChild(closeEndBtn);
}

// Open the modal when open button is pressed.

open[0].addEventListener('click', function(e){


  function showImgs() {


   let imgs = [ 'img/codislide01.png',
                'img/codislide02.png',
                'img/codislide03.png',
                'img/codislide04.png',
              ];

    let imYourFather = document.createDocumentFragment();
    imgs.forEach(function(url, index, originalArray) {
    let img = document.createElement('img');
    img.classList.add('modal-case');
    img.src = url;
    imYourFather.appendChild(img);
    modalInner.appendChild(imYourFather);
});

}
  openModal(),
  showImgs(),
  thankYou();
  
  });

open[1].addEventListener('click', function(e){


  function showImgs() {


    let imgs = [ 'img/xO01W1500.png',
                'img/xO02W1500.png',
                'img/xO03W1500.png',
                'img/xO04W1500.png',
              ];

    let imYourFather = document.createDocumentFragment();
    imgs.forEach(function(url, index, originalArray) {
    let img = document.createElement('img');
    img.classList.add('modal-case');
    img.src = url;
    imYourFather.appendChild(img);
    modalInner.appendChild(imYourFather);
});

}
  openModal(),
  showImgs(),
  thankYou();
  
  });


open[2].addEventListener('click', function(e){


  function showImgs() {


    let imgs = [ 'img/TradeB01W1500.png',
                'img/TradeB02W1500.png',
                'img/TradeB03W1500.png',
              ];


    let imYourFather = document.createDocumentFragment();
    imgs.forEach(function(url, index, originalArray) {
    let img = document.createElement('img');
    img.classList.add('modal-case');
    img.src = url;
    imYourFather.appendChild(img);
    modalInner.appendChild(imYourFather);
});

}
  openModal(),
  showImgs(),
  thankYou();
  
  });


open[3].addEventListener('click', function(e){


  function showImgs() {


    let imgs = [ 'img/HMS01W1500.png',
                'img/HMS02W1500.png',
                'img/HMS03W1500.png',
                'img/HMS04W.gif',
                'img/HMS05W1500.png'
              ];


    let imYourFather = document.createDocumentFragment();
    imgs.forEach(function(url, index, originalArray) {
    let img = document.createElement('img');
    img.classList.add('modal-case');
    img.src = url;
    imYourFather.appendChild(img);
    modalInner.appendChild(imYourFather);
});

}
  openModal(),
  showImgs(),
  thankYou();
  
  });

open[4].addEventListener('click', function(e){


  function showImgs() {


    let imgs = [ 'img/Car01W1500.png',
                'img/Car02W1500.png',
                'img/Car03W1500.png',
                'img/Car04W1500.png',
                'img/Car05gifW.gif'
              ];


    let imYourFather = document.createDocumentFragment();
    imgs.forEach(function(url, index, originalArray) {
    let img = document.createElement('img');
    img.classList.add('modal-case');
    img.src = url;
    imYourFather.appendChild(img);
    modalInner.appendChild(imYourFather);
});

}
  openModal(),
  showImgs(),
  thankYou();
  
  });


open[5].addEventListener('click', function(e){


  function showImgs() {


     let imgs = [ 'img/Aura01W1500.png',
                'img/Aura02W1500.png',
                'img/Aura03W1500.png',
              ];


    let imYourFather = document.createDocumentFragment();
    imgs.forEach(function(url, index, originalArray) {
    let img = document.createElement('img');
    img.classList.add('modal-case');
    img.src = url;
    imYourFather.appendChild(img);
    modalInner.appendChild(imYourFather);
});

}
  openModal(),
  showImgs(),
  thankYou();
  
  });


open[6].addEventListener('click', function(e){


  function showImgs() {


    let imgs = [ 'img/Shedule01W1500.png',
                'img/Shedule02W1500.png',
                'img/Shedule03W1500.png',
                'img/ShedulegifW04.gif',
              ];


    let imYourFather = document.createDocumentFragment();
    imgs.forEach(function(url, index, originalArray) {
    let img = document.createElement('img');
    img.classList.add('modal-case');
    img.src = url;
    imYourFather.appendChild(img);
    modalInner.appendChild(imYourFather);
});

}
  openModal(),
  showImgs(),
  thankYou();
  
  });

open[7].addEventListener('click', function(e){


  function showImgs() {


     let imgs = [ 'img/DPP01W1500.png',
                'img/DPP02W1500.png',
                'img/DPP03W1500.png',
              ];


    let imYourFather = document.createDocumentFragment();
    imgs.forEach(function(url, index, originalArray) {
    let img = document.createElement('img');
    img.classList.add('modal-case');
    img.src = url;
    imYourFather.appendChild(img);
    modalInner.appendChild(imYourFather);
});

}
  openModal(),
  showImgs(),
  thankYou();
  
  });





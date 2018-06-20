

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




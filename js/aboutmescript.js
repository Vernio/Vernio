// About me ----> 

 // Show View Btn Toggle

let viewTxt = document.getElementsByClassName('view-txt');
let hideTxt = document.getElementsByClassName('hide-txt');
let expChips = document.getElementsByClassName('experience-chips');
let viewBtn = document.getElementsByClassName('view-experience-btn');
let viewBtnShow = document.getElementsByClassName('view-experience-btn show');
let viewBtnOne = document.querySelector('view-experience-btn show');


// document.addEventListener('click', function (event) {

// 	if (event.target.matches('close-icon')) {
// 		console.log('eluvina bedzie dobrze');
// 	}

// 	// if (event.target.matches('.close')) {
// 	// 	// Run your code to close a modal
// 	// }

// }, false);



//// ------ *******


for (let i = 0; i < viewBtn.length; i++) {
    (function(i) {
        
        viewBtn[i].addEventListener('click', function(e) {


            let seeHide = Array.from(hideTxt).filter(s =>
                window.getComputedStyle(s).getPropertyValue('display') != 'none'
             );

             let seeView = Array.from(viewTxt).filter(s =>
                window.getComputedStyle(s).getPropertyValue('display') != 'block'
             );


             let seeBtn = Array.from(viewBtn).filter(s =>
                window.getComputedStyle(s).getPropertyValue('visibility') == 'visible'
             );
            

            if (seeHide.length == 1 && seeBtn.length == 2 ){
                                
                
                seeHide[0].parentElement.classList.toggle('show');
                
                seeHide[0].parentElement.parentElement.classList.toggle('show');

                seeHide[0].classList.toggle('show');
            
                seeView[0].classList.toggle('show');


            } 
        
            viewTxt[i].classList.toggle('show');
            hideTxt[i].classList.toggle('show');
            expChips[i].classList.toggle('show');
            viewBtn[i].classList.toggle('show');
   
            
        })
    })(i);
 }

 let hdrTxtOn = document.getElementById('Hdr-txt-on');
 let hdrTxtOff = document.getElementById('Hdr-txt-off');


 let foapTxtOn = document.getElementById('Foap-txt-on');
 let foapTxtOff = document.getElementById('Foap-txt-off');

 let clTxtOn = document.getElementById('Cl-txt-on');
 let clTxtOff = document.getElementById('Cl-txt-off');

 let codiTxtOn = document.getElementById('Codi-txt-on');
 let codiTxtOff = document.getElementById('Codi-txt-off');

 let xtbTxtOn = document.getElementById('XTB-txt-on');
 let xtbTxtOff = document.getElementById('XTB-txt-off');

 let eyTxtOn = document.getElementById('EY-txt-on');
 let eyTxtOff = document.getElementById('EY-txt-off');

 let wrTxtOn = document.getElementById('WR-txt-on');
 let wrTxtOff = document.getElementById('WR-txt-off');

 let logoTxtOn = document.getElementById('Logo-txt-on');
 let logoTxtOff = document.getElementById('Logo-txt-off');




 hdrTxtOn.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = hdrBlock

 })
 
 

 hdrTxtOff.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = illuBlock 


 })



 

 foapTxtOn.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = foapBlock


 })
 
 

 foapTxtOff.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = illuBlock 

    

 })



 clTxtOn.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = codersLabBlock


 })
 


 clTxtOff.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = illuBlock 

 })



 codiTxtOn.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = codilityBlock


 })
 


 codiTxtOff.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = illuBlock 

 })



 

 xtbTxtOn.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = xtbBlock

    console.log('yoł');

 })
 


 xtbTxtOff.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = illuBlock 

 })

 

 eyTxtOn.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = eyBlock

 })
 
 

 eyTxtOff.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = illuBlock 

 })


 

 wrTxtOn.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = workRoomBlock

 })
 
 

 wrTxtOff.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = illuBlock 

 })



 logoTxtOn.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = logotomiaBlock

 })
 
 

 logoTxtOff.addEventListener('click', function(e){

    exCompanyBlock.innerHTML = illuBlock 

 })

//// ------ *******

/// EX COMPANY TEXT INJECTION

// console.log(document.getElementsByClassName('ex-company-description')[0].childNodes[0]);

// document.getElementsByClassName('ex-company-description')[0].childNodes[1].innerHTML = "Crowdsourced media content platform for marketing purposes.";


let exCompanyBlock = document.getElementById('description-tile-list');


let hdrBlock = 
  '<div class="experience-chip-one" id="expirience-chip-one">'+
         
      '<div class="experience-company-info-top-toggle">'+
          
  
              '<div class="company-description-HDR-top">'+
                  '<div class="ex-company-name-role">'+
                      '<div class="ex-comapny-name">'+
                          '<p>Hadrone</p>'+
                          '<div class="ex-btn">'+
                              '<img id="close-icon" src="img/cancel x btn.svg" alt="close">'+
                          '</div>'+
                      '</div>'+
                      
                  '</div>'+
                  '<div class="ex-company-description">'+
                      '<p>Projects portfolio managment system.</p>'+
                  '</div>'+
              '</div>'+
  
                 
              '<div class="ex-comapny-slider">'+
  
              '</div>'+
         '</div>'+
      '</div>'+
      '<div class="expirience-company-explanation-bottom-toggle">'+
  
         '<div class="cooperation-date-period-text">'+
             '<p>Cooperation period</p>'+
             
              '<p>05.2015 - 10.2016</p>'+
          
         '</div>'+
  
  
         
          '<div class="cooperation-description-HDR-btm">'+
              
              '<div class="cooperation-role-name">'+
                  '<p>UX Designer/PM</p>'+
              '</div>'+
              
              '<p class="ex-comapny-description-text">'+
                  'Responsible for leading implementation UX vision. Developing two products for enterprises. Care about UX Research and UX/UI Design. Working closely with Product Manager and the Product Team.Removing pain points from using non dedicated tools to manage they projects portfolios. By using Hadrone products users gaining time and can as well use flows prepared by Project Management professionals whats is beneficial in terms of knowledge about project management processes as well. Focused on improvements and building new features to make our tools as much as possible valuable for our clients.'+ 
  
              '</p>'+
          '</div>'+
  
      '</div>'+
  
   '</div>';

// exCompanyBlock.innerHTML = xtbBlock


let foapBlock = 
'<div class="experience-chip-one" id="expirience-chip-one">'+
       
    '<div class="experience-company-info-top-toggle">'+
        

            '<div class="company-description-HDR-top">'+
                '<div class="ex-company-name-role">'+
                    '<div class="ex-comapny-name">'+
                        '<p>Foap</p>'+
                        '<div class="ex-btn">'+
                            '<img id="close-icon" src="img/cancel x btn.svg" alt="close">'+
                        '</div>'+
                    '</div>'+
                    
                '</div>'+
                '<div class="ex-company-description">'+
                    '<p>Crowdsourced advertasing content platform for marketing.</p>'+
                '</div>'+
            '</div>'+

               
            '<div class="ex-comapny-slider">'+

            '</div>'+
       '</div>'+
    '</div>'+
    '<div class="expirience-company-explanation-bottom-toggle">'+

       '<div class="cooperation-date-period-text">'+
           '<p>Cooperation period</p>'+
           
            '<p>03.2019 - 02.2020</p>'+
        
       '</div>'+


       
        '<div class="cooperation-description-HDR-btm">'+
            
            '<div class="cooperation-role-name">'+
                '<p>Senior Product Designer</p>'+
            '</div>'+
            
            '<p class="ex-comapny-description-text">'+
                'My role was to create the best experience for clients and creative community members.Creating intuitive flows from upload photo feature to flows of creating, launching, and managing crowdsourcing campaigns by b2b clients.'+ 
                '<br>'+
                '<br>'+
                'Working in an interdisciplinary product team, closely with developers, product owner, and stakeholders.'+

            '</p>'+
        '</div>'+

    '</div>'+

 '</div>';

//  exCompanyBlock.innerHTML = foapBlock

 let codersLabBlock = 
 '<div class="experience-chip-one" id="expirience-chip-one">'+
        
     '<div class="experience-company-info-top-toggle">'+
         
 
             '<div class="company-description-HDR-top">'+
                 '<div class="ex-company-name-role">'+
                     '<div class="ex-comapny-name">'+
                         '<p>Coders Lab</p>'+
                         '<div class="ex-btn">'+
                             '<img id="close-icon" src="img/cancel x btn.svg" alt="close">'+
                         '</div>'+
                     '</div>'+
                     
                 '</div>'+
                 '<div class="ex-company-description">'+
                     '<p>Programing school.</p>'+
                 '</div>'+
             '</div>'+
 
                
             '<div class="ex-comapny-slider">'+
 
             '</div>'+
        '</div>'+
     '</div>'+
     '<div class="expirience-company-explanation-bottom-toggle">'+
 
        '<div class="cooperation-date-period-text">'+
            '<p>Cooperation period</p>'+
            
             '<p>05.2019 - Today</p>'+
             
        '</div>'+
 
 
        
         '<div class="cooperation-description-HDR-btm">'+
             
             '<div class="cooperation-role-name">'+
                 '<p>Mentor and Lecturer</p>'+
             '</div>'+
             
             '<p class="ex-comapny-description-text">'+
                 'I’m a mentor and lecturer at UX course. Using my own experiences to help others join the world of crafting human and technology interactions. <br><br>Teaching skills from conducting design thinking workshops, learning design tools, creating a strategy for UX projects, conducting user research, and gaining knowledge about business processes.  was to create the best experience for clients and creative community members.Creating intuitive flows from upload photo feature to flows of creating, launching, and managing crowdsourcing campaigns by b2b clients.'+ 
 
             '</p>'+
         '</div>'+
 
     '</div>'+
 
  '</div>';

//    exCompanyBlock.innerHTML = codersLabBlock


   let codilityBlock = 
 '<div class="experience-chip-one" id="expirience-chip-one">'+
        
     '<div class="experience-company-info-top-toggle">'+
         
 
             '<div class="company-description-HDR-top">'+
                 '<div class="ex-company-name-role">'+
                     '<div class="ex-comapny-name">'+
                         '<p>Codility</p>'+
                         '<div class="ex-btn">'+
                             '<img id="close-icon" src="img/cancel x btn.svg" alt="close">'+
                         '</div>'+
                     '</div>'+
                     
                 '</div>'+
                 '<div class="ex-company-description">'+
                     '<p>Programers hiring solution.</p>'+
                 '</div>'+
             '</div>'+
 
                
             '<div class="ex-comapny-slider">'+
 
             '</div>'+
        '</div>'+
     '</div>'+
     '<div class="expirience-company-explanation-bottom-toggle">'+
 
        '<div class="cooperation-date-period-text">'+
            '<p>Cooperation period</p>'+
            
             '<p>10.2016 - 06.2018</p>'+
             
        '</div>'+
 
 
        
         '<div class="cooperation-description-HDR-btm">'+
             
             '<div class="cooperation-role-name">'+
                 '<p>Product Designer</p>'+
             '</div>'+
             
             '<p class="ex-comapny-description-text">'+
                 'As an interdisciplinary product team member, I was responsible for creating the best experience for Codility clients and programmers conducting a recruitment test. From screening user\'s feedback and working closely with the business I was creating UX workflow strategy for each task. That means, based on my best knowledge I was applying tools right for the job. Decide do we need a workshop on the start of the processor we are dealing with so-called low hanging fruits and we can take actions to remove obstacles for the users and observing if a change will be positive. I was facilitating discovery workshops to gain knowledge and ideate a possible solution. I was working iteratively with the whole product team, focus on delivering value for the user in every development sprint'+ 
 
             '</p>'+
         '</div>'+
 
     '</div>'+
 
  '</div>';

//   exCompanyBlock.innerHTML = codilityBlock

  let xtbBlock = 
  '<div class="experience-chip-one" id="expirience-chip-one">'+
         
      '<div class="experience-company-info-top-toggle">'+
          
  
              '<div class="company-description-HDR-top">'+
                  '<div class="ex-company-name-role">'+
                      '<div class="ex-comapny-name">'+
                          '<p>XTB</p>'+
                          '<div class="ex-btn">'+
                              '<img id="close-icon" src="img/cancel x btn.svg" alt="close">'+
                          '</div>'+
                      '</div>'+
                      
                  '</div>'+
                  '<div class="ex-company-description">'+
                      '<p>Advanced stock trading tool</p>'+
                  '</div>'+
              '</div>'+
  
                 
              '<div class="ex-comapny-slider">'+
  
              '</div>'+
         '</div>'+
      '</div>'+
      '<div class="expirience-company-explanation-bottom-toggle">'+
  
         '<div class="cooperation-date-period-text">'+
             '<p>Cooperation period</p>'+
             
              '<p>05.2015 - 10.2016</p>'+
              
         '</div>'+
  
  
         
          '<div class="cooperation-description-HDR-btm">'+
              
              '<div class="cooperation-role-name">'+
                  '<p>UX/UI Designer</p>'+
              '</div>'+
              
              '<p class="ex-comapny-description-text">'+
                  'I was responsible for making financial investment tool flows as intuitive as possible. Creating the best UX for XTB clients. Working in a team of 5 designers and after a year take a lead and gaining more responsibility for final design deliverables quality and organizing teamwork. We wear to focus on development for XTB main product lineup. That was XTB XStation desktop, XTB XStation mobile, Public Website, Information Page, and R&D projects like short options trading app. We create a full UX process from talking to clients and making discovery research to evaluate the trading platform to creating hi-fi prototypes for final solution implementation.'+ 
  
              '</p>'+
          '</div>'+
  
      '</div>'+
  
   '</div>';

// exCompanyBlock.innerHTML = xtbBlock

let eyBlock = 
  '<div class="experience-chip-one" id="expirience-chip-one">'+
         
      '<div class="experience-company-info-top-toggle">'+
          
  
              '<div class="company-description-HDR-top">'+
                  '<div class="ex-company-name-role">'+
                      '<div class="ex-comapny-name">'+
                          '<p>EY</p>'+
                          '<div class="ex-btn">'+
                              '<img id="close-icon" src="img/cancel x btn.svg" alt="close">'+
                          '</div>'+
                      '</div>'+
                      
                  '</div>'+
                  '<div class="ex-company-description">'+
                      '<p>Consulting company.</p>'+
                  '</div>'+
              '</div>'+
  
                 
              '<div class="ex-comapny-slider">'+
  
              '</div>'+
         '</div>'+
      '</div>'+
      '<div class="expirience-company-explanation-bottom-toggle">'+
  
         '<div class="cooperation-date-period-text">'+
             '<p>Cooperation period</p>'+
             
              '<p>01.2014 - 02.2015</p>'+
              
         '</div>'+
  
  
         
          '<div class="cooperation-description-HDR-btm">'+
              
              '<div class="cooperation-role-name">'+
                  '<p>Senior Graphic Designer</p>'+
              '</div>'+
              
              '<p class="ex-comapny-description-text">'+
                  'Working at various projects to support Business Dev, Marketing, Service Lines to introduce the best creative and design solutions for external clients. Like helping to create business flow for a new product for the biggest polish trains operator or tax calculator and many more interested in projects. And as a Senior person, I was supporting design lead for managing work of mid and juniors in the design team. Helping them achieve better performance and quality of our work.'+ 
  
              '</p>'+
          '</div>'+
  
      '</div>'+
  
   '</div>';


// exCompanyBlock.innerHTML = eyBlock

let workRoomBlock = 
  '<div class="experience-chip-one" id="expirience-chip-one">'+
         
      '<div class="experience-company-info-top-toggle">'+
          
  
              '<div class="company-description-HDR-top">'+
                  '<div class="ex-company-name-role">'+
                      '<div class="ex-comapny-name">'+
                          '<p>Workroom</p>'+
                          '<div class="ex-btn">'+
                              '<img id="close-icon" src="img/cancel x btn.svg" alt="close">'+
                          '</div>'+
                      '</div>'+
                      
                  '</div>'+
                  '<div class="ex-company-description">'+
                      '<p>Creative 360 agency.</p>'+
                  '</div>'+
              '</div>'+
  
                 
              '<div class="ex-comapny-slider">'+
  
              '</div>'+
         '</div>'+
      '</div>'+
      '<div class="expirience-company-explanation-bottom-toggle">'+
  
         '<div class="cooperation-date-period-text">'+
             '<p>Cooperation period</p>'+
             
              '<p>06.2012 - 12.2013</p>'+
              
         '</div>'+
  
  
         
          '<div class="cooperation-description-HDR-btm">'+
              
              '<div class="cooperation-role-name">'+
                  '<p>Digital UX/UI</p>'+
              '</div>'+
              
              '<p class="ex-comapny-description-text">'+
                  'Working on various projects. Focus on digital solutions. From landing pages, for Virgin Mobile or more complex Public Website and collateral digital solutions for luxury apartments developer. '+ 
  
              '</p>'+
          '</div>'+
  
      '</div>'+
  
   '</div>';

//    exCompanyBlock.innerHTML = workRoomBlock 

let logotomiaBlock = 
  '<div class="experience-chip-one" id="expirience-chip-one">'+
         
      '<div class="experience-company-info-top-toggle">'+
          
  
              '<div class="company-description-HDR-top">'+
                  '<div class="ex-company-name-role">'+
                      '<div class="ex-comapny-name">'+
                          '<p>Logotomia</p>'+
                          '<div class="ex-btn">'+
                              '<img id="close-icon" src="img/cancel x btn.svg" alt="close">'+
                          '</div>'+
                      '</div>'+
                      
                  '</div>'+
                  '<div class="ex-company-description">'+
                      '<p>Design Studio.</p>'+
                  '</div>'+
              '</div>'+
  
                 
              '<div class="ex-comapny-slider">'+
  
              '</div>'+
         '</div>'+
      '</div>'+
      '<div class="expirience-company-explanation-bottom-toggle">'+
  
         '<div class="cooperation-date-period-text">'+
             '<p>Cooperation period</p>'+
             
              '<p>10.2007 - 02.2009</p>'+
              
         '</div>'+
  
  
         
          '<div class="cooperation-description-HDR-btm">'+
              
              '<div class="cooperation-role-name">'+
                  '<p>Graphic Designer</p>'+
              '</div>'+
              
              '<p class="ex-comapny-description-text">'+
                  'First professional work. I was able to experiment with different types of design work. Learning that digital design is what I want to focus on. The first place where I started to use wireframes and architecture information maps to work with clients and create coherent intuitive solutions. From e-commerce to digital products.'+ 
  
              '</p>'+
          '</div>'+
  
      '</div>'+
  
   '</div>';

// exCompanyBlock.innerHTML = logotomiaBlock 

let illuBlock = 
  '<div class="experience-chip-one" id="expirience-chip-one">'+
         
        '<img id="ex-company-illu" src="img/exCompPlacolderIllu.png" alt="close" style="width: 100%;height: 52rem; position: relative; top: 1rem;">'+

                          
   '</div>';

   exCompanyBlock.innerHTML = illuBlock 

   let expChipsAll = document.querySelectorAll('.experience-chips');



   document.addEventListener('click', function (event) {

    
	if (event.target.matches('.ex-btn')) {
       
        exCompanyBlock.innerHTML = illuBlock 

        for (let i=0; i < expChipsAll.length; i++) {

        expChipsAll[i].classList.remove('show');

        hideTxt[i].classList.remove('show');

        viewTxt[i].classList.remove('show');

        viewBtn[i].classList.remove('show');

        }
        
    }
    
}, false);




// Hamburger menu trigger
  
let hamBtn = document.querySelector('#mobile-menu-icon');
let mobileMenu = document.querySelector('.menu-mobile');


hamBtn.addEventListener('click', function(e) {
  hamBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  e.preventDefault();

});
let name1 = document.getElementById('name__id01');
let name2 = document.getElementById('name__id02');
let name3 = document.getElementById('name__id03');
let name4 = document.getElementById('name__id04');
let position1 = document.getElementById('position__id01');
let position2 = document.getElementById('position__id02');
let position3 = document.getElementById('position__id03');
let position4 = document.getElementById('position__id04');
let text = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ';
let modal = document.getElementById('modal');
let idModal = document.getElementById('modal__id');
let positionModal = document.getElementById('modal__position');
let noteModal = document.getElementById('modal__text');
let blur = document.getElementById('blur');

function showModal(id){
      modal.style.display='block';  
      blur.className="background__style is-blurred";

      if(id === "id01"){
          idModal.innerHTML = name1.innerHTML
          positionModal.innerHTML = position1.innerHTML
          noteModal.innerHTML = text
      } 
      if(id === "id02"){
          idModal.innerHTML = name2.innerHTML
          positionModal.innerHTML = position2.innerHTML
          noteModal.innerHTML = text
      } 
      if(id === "id03"){
          idModal.innerHTML = name3.innerHTML
          positionModal.innerHTML = position3.innerHTML
          noteModal.innerHTML = text
      } 
      if(id === "id04"){
          idModal.innerHTML = name4.innerHTML
          positionModal.innerHTML = position4.innerHTML
          noteModal.innerHTML = text
      }
}

function closeModal() {
      modal.style.display='none';
      blur.className="background__style";
      document.body.style.backgroundColor=""
      document.body.style.opacity=''
      idModal = '';
      positionModal = '';
      noteModal = '';
}     

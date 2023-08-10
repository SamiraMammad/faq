const faqItems = document.querySelectorAll('.faq-header');
const questions=document.querySelectorAll('.question')


faqItems.forEach(item => {
    const quest=item.querySelector('.question')

    item.addEventListener('click' , () => {
        if (!item.parentElement.classList.contains('open')) {

            removeActives(faqItems)
            questions.forEach(item=>{
                item.classList.remove('active')
            })
            item.parentElement.classList.add('open')
            quest.classList.add('active')
        }
        else {
           quest.classList.remove('active') 
            item.parentElement.classList.remove('open')
        }
    })
})

function removeActives(element) {

    element.forEach(item => {

        item.parentElement.classList.remove('open')
    })
}

// const accordionItemHeaders = document.querySelectorAll(".question");

// const faqItems = document.querySelectorAll('.faq-item');
// faqItems.forEach(acc=>{
//     acc.addEventListener('click', () => {
//         if(acc.classList.contains('open')){
//             acc.classList.remove('open')
//             loop(accordionItemHeaders)
//         }
//         else{
//            faqItems.forEach(acc2=>{
//             acc2.classList.remove('open')
//             loop(accordionItemHeaders)
//             acc.classList.add('open')
//            })
//         }
//     })
// })



// function loop(element){
//     element.forEach(item=>{
//         item.classList.remove('active')
//     })
// }



// accordionItemHeaders.forEach(accordionItemHeaders => {
//     accordionItemHeaders.addEventListener("click", event => {
//         accordionItemHeaders.classList.add("active");
        
//     });
// });
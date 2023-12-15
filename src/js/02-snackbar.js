import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const submitBtn = document.querySelector('.form');
submitBtn.addEventListener('submit', createPromise);


function createPromise(event) {
    event.preventDefault();
    const delay = this.elements.delay.value; 

    const promise = new Promise((resolve, reject) => { 
        const state = document.querySelector('input[name="state"]:checked').value;
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(new Error(
                    iziToast.error({
                        message: `❌ Rejected promise in ${delay}ms`,
                    })));
            }
        }, delay);

        
    });
    promise.then((state) => {
        iziToast.success({
        message: `✅ Fulfilled promise in ${state}ms`,
    });

    })
        .catch((error) => { console.error(error.message) })
};







// document.getElementById('myForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const delay = parseInt(document.getElementById('delayInput').value);

//     const promise = new Promise((resolve, reject) => {
//         const option = document.querySelector('input[name="option"]:checked').value;

//         if (option === 'fulfilled') {
//             setTimeout(() => resolve(delay), delay);
//         } else {
//             reject(new Error(`Promise rejected with a delay of ${delay} milliseconds`));
//         }
//     });

//     promise.then(
//         (result) => {
//             console.log(`Promise fulfilled with a delay of ${result} milliseconds`);
//         },
//         (error) => {
//             console.error(error.message);
//         }
//     );
// });


// const values = document.querySelectorAll('input[name="state"]')

// function onClickSubmitBtn(event) {
//     event.preventDefault();
//     const inputValue = this.elements.delay.value   //Значение инпута в мс
//     // console.log(inputValue);

//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => { 

//             for (const value of values) {
                    
//                 const userCheckRadio = value.value;  // значение радиокнопки
            
//                 // console.log(userCheckRadio)
//                         if (userCheckRadio === "fulfilled") {
//                             iziToast.success({
                                
//                                 message: `✅ Fulfilled promise in ${inputValue}ms`,
//                             });

//                             console.log('ok');
                            
//                         } else {
//                             iziToast.error({
                                
//                                 message: `❌ Rejected promise in ${inputValue}ms`,
//                             }); 
//                             console.log('error');
                            
//                      }
// }                


//             // resolve(inputValue)
//             // reject(inputValue)
//             // console.log(inputValue); 
 
//         }, inputValue)
       
//     });
    
// }




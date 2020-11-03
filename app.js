const correctAnswers = ['A','B','B','A','B'];
const form = document.querySelector('form');
let domScore = document.querySelector('.score');
const pOscore = document.querySelector('.score-place');
let p = document.querySelector('.inside p');

form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    userAnswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            score+=20;
        }

        scrollTo(0,0);
       pOscore.style.display="block";
        

        let output  =0;
        let timer = setInterval(()=>{
            domScore.textContent=`${output} %`;
            if(output === score){
                clearInterval(timer);
            } else{
                output++;
            }
        }, 10)
    });
    
})

function style(score){
    if(score>50){
        p.setAttribute('class','passed');
    } else{
        p.setAttribute('class','failed');
    }
    
}

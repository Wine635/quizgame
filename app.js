/*
function interviewQuestion(job){
    if(jpb==='designer'){
        return function(name){
            console.log(name+',can you please expalin what UX design is?');
        }
    }esle if(job==='teacher'){
        return function(name){
            console.log('What subject do you teach,'+ name +'?');
        }
    }else{
        return function(name){
            console.log('Hello '+ name + ', what do you do?');
        }
    }
}



Let's build a fun quiz game in the console!----

1.Build a funciton constructor called Question to describe a question. 
A question should include:
a)question itself
b)the answers from which the player can choose the correct one
 (choose an adequte dta structure here,array,object,etc.)
c) correct answer(I would use anumber for this)

2.Create a couple of questions using the constructor

3.Store them all inside an array

4.Select one random question and log it on the console,together 
with the possible answers (each question should have a number) 
(Hint: write a method for the Question objects for the task).

5.Use the 'prompt' function to ask the user for  the correct answer.
 The user should inpute the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct nad print to the console whether 
the answer is correct or not (Hint: write anohter method for this).

7. Suppose this code would be a plugin for other programmers to use
 in their code. So make sure that all your code is private and
  doesn't interfere with the other programmers code
   (Hint: we learned a special technique to do exactly that).
   */
  let Question=function(question,answer,correctans){
      this.question=question;
      this.answer=answer;
      this.correctans=correctans;
          
  };
  let q1=new Question("Do u  eat?",["(1)Yes","(2)No","(3)Not sure"],"No");
  let q2=new Question("Do u  like?",["(1)Yes","(2)No","(3)Not sure"],"Yes");
  let q3=new Question("Do u  sleep?",["(1)Yes","(2)No","(3)Not sure"],"Not sure");

 let arr=[q1,q2,q3];
  let ans;
 for(let i=0;i<arr.length;i++){
   let prom= prompt(`${i+1}.${arr[i].question}
${arr[i].answer}`);
    if(prom==arr[i].correctans){
    ans="Correct";
    console.log(`${i+1}.${ans}`);
   }
   else{
    ans="incorrect";
    console.log(`${i+1}.${ans} . The correct answer is:${arr[i].correctans}`);
}   
  }
  

     

 

  
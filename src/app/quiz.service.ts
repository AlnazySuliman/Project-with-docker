import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  quizzes:  Quiz[]=[
    {
      question: 'Which of the following languages ​​is object-oriented?',
      answer:[
         { option:'JavaScript' , correct: true },
         { option:'Assembly' , correct:false },
         { option:'Global' , correct: false }
      ]

    },

    {
      question: 'Which of the following is a markup language? ?',
      answer:[
         { option:'JavaScript' , correct: false },
         { option:'html' , correct:true },
         { option:'Global' , correct: false }
      ]

    },

    {
      question: 'Which of the following is html?',
      answer:[
         { option:'int s =4 ;' , correct: false },
         { option:'<h2></h2>' , correct:true },
         { option:'echo("Hi")' , correct: false }
      ]

    },
    {
      question: 'Which of the following is the print command in php??',
      answer:[
         { option:'echo (JavaScript);' , correct: true },
         { option:'print (Assembly)' , correct:false },
         { option:'sytem.out.echo (OMG!!)' , correct: false }
      ]

    },

    {
      question: 'It is a flexible methodology and does not follow a sequence?',
      answer:[
         { option:'Agile' , correct: true },
         { option:'waterfall' , correct:false },
         { option:'Suliman' , correct: false }
      ]

    },

  
   ]

  constructor() { }
  getQuizes(){
return this.quizzes;
  }
}


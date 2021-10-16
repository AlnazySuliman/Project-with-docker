import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
 quizzes:Quiz[]=[];
 questionLocation=0;
 answerSelect = false;
 correctAns =0;
 incorrectAns=0;
 result=false;
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizzes =this.quizService.getQuizes();
  }

  onAnswer(option:boolean){

   
    this.answerSelect =true;
    setTimeout(() => {
      this.questionLocation++;
      this.answerSelect =false;
    },1000);
    if(option){
    this.correctAns++;
    }else{
      this.incorrectAns++;
    }

  }
  ShowResult(){
   this.result=true;

  }

}

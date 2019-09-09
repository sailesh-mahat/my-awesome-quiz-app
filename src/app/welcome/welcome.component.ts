import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  private quizzes: Quiz[];

    constructor(private route: ActivatedRoute, private questionsService: QuestionsService) {
      this.questionsService.getQuizzes()
        .subscribe(quizzes => {
          this.quizzes = quizzes;
        });
    }

  ngOnInit() {
  }

}

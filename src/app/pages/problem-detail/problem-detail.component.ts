import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DsaServiceService } from '../../services/dsa-service.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrl: './problem-detail.component.css'
})
export class ProblemDetailComponent  implements OnInit {
  selectedTopic: any;

  constructor(private location: Location, private dsaService: DsaServiceService) { }

  ngOnInit(): void {
    this.selectedTopic = history.state.topic;
    if (!this.selectedTopic) {
      this.location.back();
    }
  }

  onCheckboxChange(problem: any): void {
    console.log('Checkbox state changed:', problem);
    problem.isCompleted = true
    this.dsaService.markProblemAsSolved(problem.id, problem.isCompleted).subscribe(
      (response: any) => {
        console.log('Problem marked as solved:', response);
      },
      (error) => {
        console.error('Error marking problem as solved:', error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}

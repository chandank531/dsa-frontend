import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DsaServiceService } from '../../services/dsa-service.service';

@Component({
  selector: 'app-dsa-sheet',
  templateUrl: './dsa-sheet.component.html',
  styleUrls: ['./dsa-sheet.component.css']
})
export class DsaSheetComponent implements OnInit {
  topics: any[] = [];

  constructor(private router: Router, private dsaService: DsaServiceService) { }

  ngOnInit(): void {
    this.fetchTopics();
  }

  fetchTopics(): void {
    this.dsaService.getAllTopics().subscribe(
      (topics: any) => {
        console.log('All topics response:', topics);
        this.topics = topics;
      },
      (error) => {
        console.error('Error fetching topics:', error);
      }
    );
  }

  getLevelClass(level: string): string {
    switch (level) {
      case 'Easy':
        return 'bg-success text-white'; 
      case 'Medium':
        return 'bg-warning text-dark'; 
      case 'Hard':
        return 'bg-danger text-white'; 
      default:
        return '';
    }
  }

  viewTopicDetails(topic: any): void {
    this.router.navigate(['/topic-details'], { state: { topic } }); 
  }
  
  getStatusClass(isCompleted: boolean): string {
    return isCompleted ? 'completed' : 'not-completed';
  }
  
}

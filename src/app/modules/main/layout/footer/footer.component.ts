import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  feedbackModalRef: any = {};

  ngOnInit(): void {}

  onFeedBack() {
    this.feedbackModalRef = this.dialog.open(FeedbackComponent, {
      width: '30vw',
    });
  }

  onClose() {
    (this.feedbackModalRef as MatDialogRef<FeedbackComponent>).close();
  }
}

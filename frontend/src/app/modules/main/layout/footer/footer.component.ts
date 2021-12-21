import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FeedbackComponent } from '../feedback/feedback.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog,) {}
  feedbackModalRef: any = {};

  ngOnInit(): void {}

  onFeedBack() {
    this.feedbackModalRef = this.dialog.open(FeedbackComponent, {
      width: '40vw',
    });
  }

  onClose() {
    (this.feedbackModalRef as MatDialogRef<FeedbackComponent>).close();
  }
  onReportAnIssue(){
    window.open('https://unilever.service-now.com/esc?id=sc_cat_item&table=sc_cat_item&sys_id=d4969320db00a010d21b055cd39619ee', "_blank");
  }
}

import { Component } from "@angular/core";
import { AmplifyService } from "aws-amplify-angular";
import awsconfig from "../aws-exports";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "skillShowcase";
  url =
    "https://console.aws.amazon.com/pinpoint/home/?region=us-east-1#/apps/" +
    awsconfig.aws_mobile_analytics_app_id +
    "/analytics/events";
  eventsSent = 0;
  analyticsEventSent = false;

  constructor(private amplifyService: AmplifyService) {}

  handleAnalyticsClick() {
    this.amplifyService
      .analytics()
      .record("AWS Amplify Tutorial Event")
      .then(evt => {
        ++this.eventsSent;
        this.analyticsEventSent = true;
      });
  }
}

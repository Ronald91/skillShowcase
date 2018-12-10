import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: "app-skills-list",
  templateUrl: "./skills-list.component.html",
  styleUrls: ["./skills-list.component.css"]
})
export class SkillsListComponent {
  private skills: any[];
  /** Based on the screen size, switch from standard to one column per row */
  cards: Observable<any[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          query ListSkills {
            listSkills {
              items {
                id
                name
                description
                url
              }
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        this.skills = result.data["listSkills"].items;
        this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
          map(({ matches }) => {
            let cardSkills: any[] = [];
            if (matches) {
              this.skills.forEach(element => {
                let cardSkill = {
                  title: element.name,
                  cols: 1,
                  rows: 1,
                  content: element
                };
                cardSkills.push(cardSkill);
              });
              return cardSkills;
            } else {
              this.skills.forEach(element => {
                let cardSkill = {
                  title: element.name,
                  cols: 2,
                  rows: 1,
                  content: element
                };
                cardSkills.push(cardSkill);
              });
              return cardSkills;
            }
          })
        );
      });
  }
}

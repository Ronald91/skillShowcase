import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SkillComponent } from "./skill/skill.component";
import { SkillsListComponent } from "./skills-list/skills-list.component";

const routes: Routes = [
  {
    path: "skills-list",
    component: SkillsListComponent
  },
  {
    path: "skill-details/:skill",
    component: SkillComponent
  },
  {
    path: "**",
    redirectTo: "/skills-list",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

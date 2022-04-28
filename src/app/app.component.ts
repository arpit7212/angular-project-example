import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'publish_to_github_pages_repo';

  str = `1. npm install -g angular-cli-ghpages
  2. ng build --prod --base-href "https://{username}.github.io/{project name}/
  3. ngh --dir .dist\{local project name}`;
}

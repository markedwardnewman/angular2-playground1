import { Component } from '@angular/core';
import { HttpDataService } from './http-data.service'

@Component({
  selector: 'my-app',
  template: `
    <h2>Angular2 Asynchronous API Call</h2>
    <p>This is my Angular2 playground app. It…</p>
    <ul>
      <li>…uses the HttpModule with an Observable to asynchronously connect to the Google Books API</li>
      <li>…populates a table with the first 10 returned entries</li>
      <li>…uses OrderByPipe to sort by page count<sup>1</sup></li>
      <li>
        …uses angular-cli-ghpages to deploy to any gh-pages branch on GitHub like so:<br>
        <code>&nbsp;&nbsp;$ tsc --target ES5</code>
      </li>
    </ul>
    <label>Enter the name of any book:</label>
    <input #volumeQuery
      (keyup.enter)="onEnterVolume(volumeQuery.value)">
    <p *ngIf="value">
      JSON data link: <a href="{{value}}"  target="_blank">{{value}}</a>
    </p>

    <table>
      <tbody>
        <tr *ngIf="httpData.items">
          <td>Title</td>
          <td>Page Count</td>
        </tr>
        <tr *ngFor="let item of httpData.items | orderByPipe">
          <td>{{ item.volumeInfo.title }}</td>
          <td>{{ item.volumeInfo.pageCount }}</td>
        </tr>
      </tbody>
    </table>

    <!-- If successful, show this -->
    <div *ngIf="httpData.totalItems">
      <p>
        10 out of {{ httpData.totalItems }} entries shown
      </p>
      <h3>FUN TIDBITS:</h3>
      <ul>
        <li>- Open the app side-by-side in both Chrome and Firefox. Refresh both, then in Chrome, type something in the input field. Neat!</li>
        <li>
          - Using TypeScript, you can specify the target ECMAScript version with the CLI --target option like so:<br>
          <code>&nbsp;&nbsp;$ tsc --target ES5</code>
        </li>
      </ul>
      <h3>TODO:</h3>
      <ul>
        <li>- Show entries dynamically based upon input</li>
        <li>- Allow different types of sorting</li>
        <li>- Break the app up into sub-components</li>
      </ul>
      <h3>KNOWN ISSUES:</h3>
      <ul>
        <li><sup>1</sup>The sorting doesn't always work when returned entries contain no pageCount. Also verify that the API's pageCount is always an int.</li>
        <li><sup>x</sup></li>
      </ul>
    </div>
  `,

  styles: [`
    tr:first-child {
      font-weight: bold;
    }
    table {
      margin-top: 24px;
    }
    td {
      padding-right: 24px;
    }
    ul {
      list-style: none
    }
  `],
  providers:[HttpDataService]
})

export class AppComponent {
  httpData: Array<Object> = [];
  value = '';

  constructor(private httpDataService: HttpDataService) {}

  // ngOnInit() {

  // }

  onEnterVolume(value: string) {
    var urlAPI = 'https://www.googleapis.com/books/v1/volumes?q=';
    var url = urlAPI + value;

    this.value = url;
    this.getData(url);
  }

  getData(url: string) {
    this.httpDataService.getHttpData(url)
      .subscribe(
        (data: any) => {
          this.httpData = data;
        }
      );
    }
}
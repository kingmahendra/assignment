import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReposComponent } from './repos.component';
import { GitDataService } from './../services/git-data.service';
import { SearchPipe } from './../search.pipe';

describe('ReposComponent', () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule ],
      providers: [GitDataService],
      declarations: [ ReposComponent, SearchPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposComponent);
    const gitDataService = fixture.debugElement.injector.get(GitDataService);
    gitDataService.gitUser.info = {};
    const spy1 = spyOn(gitDataService, 'fetchData');
    const spy2 = spyOn(gitDataService, 'fetchReposData');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

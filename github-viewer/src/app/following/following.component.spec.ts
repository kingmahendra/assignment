import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { FollowingComponent } from './following.component';
import { GitDataService } from './../services/git-data.service';

describe('FollowingComponent', () => {
  let component: FollowingComponent;
  let fixture: ComponentFixture<FollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [GitDataService],
      declarations: [ FollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingComponent);
    const gitDataService = fixture.debugElement.injector.get(GitDataService);
    gitDataService.gitUser.info = {};
    const spy1 = spyOn(gitDataService, 'fetchData');
    const spy2 = spyOn(gitDataService, 'fetchFollowingData');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

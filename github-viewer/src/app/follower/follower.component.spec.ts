import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { FollowerComponent } from './follower.component';
import { GitDataService } from './../services/git-data.service';

describe('FollowerComponent', () => {
  let component: FollowerComponent;
  let fixture: ComponentFixture<FollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [GitDataService],
      declarations: [ FollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerComponent);
    const gitDataService = fixture.debugElement.injector.get(GitDataService);
    gitDataService.gitUser.info = {};
    const spy1 = spyOn(gitDataService, 'fetchData');
    const spy2 = spyOn(gitDataService, 'fetchFollowerData');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

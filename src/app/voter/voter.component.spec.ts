import { VoterComponent } from './voter.component'; 
import {TestBed,ComponentFixture} from '@angular/core/testing'
import {By} from '@angular/platform-browser'

// describe('VoterComponent', () => {
//   let component: VoterComponent; 
//   let fixture:ComponentFixture<VoterComponent>


//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations:[VoterComponent]
//     })
   
//    fixture= TestBed.createComponent(VoterComponent)
//     component = fixture.componentInstance;   
//   });


// it(`should render total votes`,()=>{
//   component.othersVote=20
//   component.myVote=1
//   fixture.detectChanges()
//  let debugEle= fixture.debugElement.query(By.css('.vote-count'))
//  let el:HTMLElement=debugEle.nativeElement;
//  expect(el.innerText).toContain('21')
// })

  // it('should increment total votes when upvoted', () => {
   
  //   component.upVote()
  //   expect(component.totalVotes).toBe(1)
  // });
  // it('should decrement total votes when downvoted', () => {
   
  //   component.downVote()
  //   expect(component.totalVotes).toBe(-1)
  // });

  // it(`should highlight the upvote button if upvoting is done`,()=>{
  //   component.myVote=1
  //   fixture.detectChanges()
  //   let de = fixture.debugElement.query(By.css('.bi bi-arrow-up'))
  //   expect(de.classes['highlighted']).toBeTruthy()
  // })
  // it(`should increase total votes when upVote button is clicked`,()=>{
  //   let button =fixture.debugElement.query(By.css('.bi bi-arrow-up vote-button'))
  //   button.triggerEventHandler('click',null);
  //   expect(component.totalVotes).toBe(1)
  // })
  // it(`should decrease total votes when downVote button is clicked`,()=>{
  //   let button =fixture.debugElement.query(By.css('.bi bi-arrow-down vote-button'))
  //   button.triggerEventHandler('click',null);
  //   expect(component.totalVotes).toBe(-1)
  // })
//});
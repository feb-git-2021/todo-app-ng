import { DebugElement,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TodoComponent } from '../todo/todo.component'

describe('TodoComponent', () => {
    let component:TodoComponent
    let fixture :ComponentFixture<TodoComponent>
    let el:DebugElement
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [
  //       TodoComponent
  //     ],
  //   }).compileComponents();
  // });
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations:[TodoComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    fixture=TestBed.createComponent(TodoComponent)
    component=fixture.componentInstance
    el=fixture.debugElement
    fixture.detectChanges()

  })
  it(`should create the Todo Component`,()=>{
    expect(component).toBeTruthy()
   // console.log(component)
  })
  it(`should have as title 'Angular todo-app'`, () => {    
   const element : HTMLElement= fixture.nativeElement
  const title= element.querySelector('.display-4')
  expect(title.textContent).toEqual('Angular Todo App')
  });
  it(`should render sub title as 'A sample todo app built in Angular' `, () => {
    const element : HTMLElement=fixture.nativeElement
    const subtitle = element.querySelector('.container p.lead')
    expect(subtitle.textContent).toEqual('A sample todo app built in Angular');
  });

  it(`should display 'List is empty!' if isTodoListEmpty is true`,()=>{
   
     component.isTodoListEmpty=true
   fixture.detectChanges();
    const element = fixture.nativeElement;
    const de=    element.querySelector('#emptyList p')
   expect(de.textContent).toContain('List is empty!'); 
   expect(component.todoList.length).toEqual(0) 
    
  })
    it(`should display the Todo list`,()=>{
      component.todoList=[];
      component.todoText='Hi'
      component.isTodoListEmpty=false
      component.onAddTodoText()
     fixture.detectChanges()
     console.log( el.nativeElement.outerHTML)
     const todos= el.queryAll(By.css('#ngForMain'))
     expect(todos).toBeTruthy('could not find todos')
     expect(todos.length).toBe(1, 'Unexpected number of todo list')
    })

    it(`should add item to todolist when add button is clicked`,()=>{
      component.todoList=[];
     
      const button = el.query(By.css('#btnAdd'))
      button.triggerEventHandler('click',null)
      component.todoText='Hi'
      component.onAddTodoText()
      component.todoText=''      
      fixture.detectChanges()
     expect(component.isTodoListEmpty).toBe(false)
    // expect(component.isTodoListEmpty).toBeFalsy()
    expect(component.todoList.length).toEqual(1)


    })
    it(`should clear items from the todolist when clear button is clicked`,()=>{
      component.todoList=[];
     
      const button = el.query(By.css('#btnClear'))
      button.triggerEventHandler('click',null)
      component.isTodoListEmpty=true
      component.onClearTodoText()
      fixture.detectChanges()
      expect(component.isTodoListEmpty).toBe(true)
    // expect(component.isTodoListEmpty).toBeFalsy()
    expect(component.todoList.length).toEqual(0)


    })
    it(`should toggle the text of the button 'from done to undone' `,()=>{
     // component.todoList=[{ todoId: 1, text: 'abc', isCompleted: false, buttonText:"Done"}];
      //let todoId:number
     // component.onCompletingTask(0)   
     
     component.todoList=[];
     component.todoText='Hi'
      const addButton = el.query(By.css('#btnAdd'))
      addButton.triggerEventHandler('click',null)
      
      //component.onAddTodoText()          
      fixture.detectChanges()
    // expect(component.isTodoListEmpty).toBe(false)
    // expect(component.isTodoListEmpty).toBeFalsy()
   // expect(component.todoList.length).toEqual(1)
     
      const button = el.query(By.css('.undonebtn'))

      console.log('This is complete button',button )
      button.triggerEventHandler('click',null)
      fixture.detectChanges()
     expect(component.todoList[0].isCompleted).toBeTruthy()
      button.triggerEventHandler('click',null)
      expect(component.todoList[0].isCompleted).toBeFalsy()
      //expect(component.todoList[0].todoText).toEqual('Hi')
     


    })


})
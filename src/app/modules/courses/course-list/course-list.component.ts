import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.styl']
})
export class CourseListComponent implements OnInit {
title="Course List";
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
public courses=[
  'Design Thinking course with Minds Garage',
  'Angular Course: Components and Services',
  'Course on Closures and Scope in JavaScript',
  'REST API Consumption Course with Angular',
  'CSS Grid Basic Course',
  'Diversity, Inclusion and Non-Discrimination Course',
  'HTML and CSS Definitive Course',
  'Front End Developer Course',
  'Angular Fundamentals Course',
  'Mathematics Foundations Course',
  'Introduction to Terminal and Command Line Course',
  'Positive Masculinities Course',
  'Course on Methodologies to Design a Digital Product',
  'Prework Course: Linux Development Environment Configuration',
  'Design Systems Course',
  'CSS Transformations and Transitions Course',
  'Course to Create an MVP without Code',
  'Course to Find and Evaluate Ideas to Undertake',
  'Course to Understand Feminism',
  'Frontend Developer Practical Course',
  'HTML and CSS Practical Course',
  'CSS Layout Practical Course',
  'Software Engineering Fundamentals',
  'Basic English A1 Workshop for Beginners',
  'Audiocourse How to Talk With Your Users and Validation Techniques',
  'Audiocourse on Diversity and Inclusion for Companies',
  'Audiocourse on Gender Equality',
  'Introduction to the World of Startups AudioCourse',
  'Audiocourse on Productivity and Time Management for Startups',
  'Audiocourse Foundations for Forming Communities',
  'Basic Course of Algorithms and Logical Thinking',
  'Basic JavaScript Course',
  'CSS Animation Course',
  'Course on Legal Aspects for Startups',
  'Basic Computer Course',
  'Design Course for Developers',
  'Course of Fundamentals of Electricity and Electronics',
  'Basic English Course A1: Present Simple and Common Vocabulary',
  'Free English Course: Strategies to Learn Online',
  'English Course for Beginners',
  'English Course for Startups',
  'Introduction to the Web Course: History and Operation of the Internet',
  'Maternity Course: Tips and Experiences for the Journey of Being a Mother',
  'Free Basic Programming Course',
  'Course to Find and Evaluate Ideas for Entrepreneurship',
  'Audio course on Diversity and Inclusion for Companies'
];
  constructor() { }

  ngOnInit(): void {
  }

}

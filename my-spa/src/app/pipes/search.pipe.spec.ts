import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });


  it('filters the courses array', () => {
    const pipe = new SearchPipe();

 let courses: Array<any> = [
    {title: 'Angular', summary: 'Framework from google!'},
    {title: 'React', summary: 'Library from facebook!'},
    {title: 'NodeJS', summary: 'Server side JS!'},
    {title: 'Ember', summary: 'Open source front-end!'}
  ]

    let filteredCourses = pipe.transform(courses, 'Angular')
  console.log(filteredCourses.length.toFixed(1));
    // expect(filteredCourses.length.to);
  });
});

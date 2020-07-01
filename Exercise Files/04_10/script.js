function Course(title,instructor,level,published,views ) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updatedViews = function () {
        return ++this.views;
    };
}

var course01 = new Course("JavaScript Essential Training", 'Morten Hendricks', 1, true, 0)

console.log(course01);
// TODO: Add a comment describing what kind of function this is
// Constructor function for BlogPost objects => it is a function that creates a new object
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// It is used to add a method to the BlogPost prototype. 
BlogPost.prototype.addComment = function(comment) {
  this.comments.push(comment);
};

// a Prototype allows you to create new objects within an existing object
// a Prototype inherits everything from the original object and puts it in this object as well.


const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComment('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
// Nice post, I like it!
console.log(post.comments);

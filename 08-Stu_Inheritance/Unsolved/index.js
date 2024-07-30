// TODO: Create a class constructor named ForumItem that takes in 'authorName' and 'createdOn'.
class ForumItem {
  constructor(authorName, createdOn) {
    this.authorName = authorName;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, createdOn);
    this.title = title;
    this.text = text;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn) {
    super(authorName, createdOn);
    this.text = text;
  }
}

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment('Jane Doe', 'This is a comment.', '2024-07-30');

// TODO: Create a new object using the BlogPost class constructor.
const newBlogPost = new BlogPost('John Doe', 'My First Blog Post', 'This is the content of the blog post.', '2024-07-30');

// TODO: Log both newly created BlogPost and Comment to the console.
console.log(newBlogPost);
console.log(newComment);
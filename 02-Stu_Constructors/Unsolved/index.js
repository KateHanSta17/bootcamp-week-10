// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
// const Blog = {
//     authorName = authorName;
//     title = title;
//     text = text;
//     createdOn = createdOn;
// }

// function Blog(authorName, title, text, createdOn) {
//     this.authorName = authorName;
//     this.title = title;
//     this.text = text;  
//     this.createdOn = createdOn;
//     this.printMetaData = function () {
//         console.log(`Created by ${this.authorName} on ${this.createdOn}`);
//     }
// }
// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor

// TODO: Call the 'printMetaData()' method on the new object

// Step 1: Create a constructor function called 'BlogPost'
function BlogPost(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.printMetaData = function () {
        console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    }
}

// // Step 2: Include a method called 'printMetaData' in the prototype
// BlogPost.printMetaData = function () {
//     console.log(`Created by ${this.authorName} on ${this.createdOn}`);
// }

// Step 3: Create a new object using the 'BlogPost' constructor
const myBlogPost = new BlogPost('John Doe', 'My First Blog Post', 'This is the content of my first blog post.', '2024-07-30');

// Step 4: Call the 'printMetaData()' method on the new object
myBlogPost.printMetaData();
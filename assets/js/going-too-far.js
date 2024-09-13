class User {
  /**
   * Constructor for creating a new User object
   * @param {string} username - The username of the user
   * @param {string} fullName - The full name of the user
   */
  constructor(username, fullName) {
    this.username = username;
    this.fullName = fullName;
    this.posts = [];
  }

  /**
   * @param {string} content - The content of the post
   */
  createPost(content) {
    const newPost = new Post(this.username, content);
    this.posts.push(newPost);
  }

  /**
   * Display all posts created by the user
   */
  showPosts(){
    console.log(`Posts by ${this.username}: `)
    this.posts.forEach((post) => {
        post.displayPost();
    })
  }
}

// Class to represent a post
class Post {
    /**
     * Constructor for creating a new post object
     * @param {string} username - The username of the post's creator
     * @param {string} content - The content of the post
     */
    constructor(username, content){
        this.username = username;
        this.content = content;
        this.createdAt = new Date();
    }

    /**
     * Display the post content in a formatted manner
     */
    displayPost(){
        console.log(`@${this.username} post on ${this.createdAt}: `);
        console.log(this.content);
        console.log('---------------------------------------------');
    }
}

// Creating users
const user1 = new User("JohnDoe", "John Doe");
const user2 = new User("JaneSmith", "Jane Smith");

// Users creating posts
user1.createPost("Hello World! This is my first post on JSgram");
user1.createPost("Loving this JS platform! #excited");

user2.createPost("Hey everyone, Just trying out this JSgram thing!");
user2.createPost("Had a great day on JSgram");

// Displaying the posts
user1.showPosts();
user2.showPosts();

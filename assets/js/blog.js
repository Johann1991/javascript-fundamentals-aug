class Blog {
  /**
   *
   * @param {string} username
   * @param {string} fullName
   */
  constructor(username, fullName) {
    this.username = username;
    this.fullName = fullName;
    this.posts = [];
  }

  /**
   * 
   * @param {string} title - The title of the blog post
   * @param {string} content - The content of the blog post
   */
  createPost(title, content){
    const newPost = new BlogPost(title, content, this.username);
    this.posts.push(newPost);
    console.log(`Post titled "${title}" created by ${this.username}`)
  }

  editPost(){

  }

  deletePost(){

  }

  displayPost(){

  }
}

/**
 * @class For the blog post
 */
class BlogPost{
    /**
     * @param {string} title 
     * @param {string} content 
     * @param {string} author 
     */
    constructor(title, content, author){
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();
    }
}

// Create users
// Users will create posts
// Display posts
// Edit posts
// Delete post

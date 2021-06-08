const { Post, Comment } = require("../DB/dbModels");

module.exports = {
  test: (req, res) => {
    console.log("Post Service API test");
    res.send("Post Service API test: success");
  },

  create: async (req, res) => {
    const { content, username, userId } = req.body;
    const post = new Post({
      content,
      username,
      userId,
    });

    try {
      const savedPost = await post.save();
      res.status(200).json(savedPost);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getPostById: async (req, res) => {
    const { postId } = req.params;
    try {
      const post = await Post.findOne({ _id: postId });
      if (!post) {
        return res.status(404).send("Post Not found");
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getPosts: async (req, res) => {
    try {
      const posts = await Post.find().lean();
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  deletePost: async (req, res) => {
    const { postId } = req.params;
    try {
      console.log("Deleting Post");
      const post = await Post.findOneAndRemove({ _id: postId });
      console.log(post);
      if (post) {
        res.status(202).send("Post  deleted");
      } else {
        res
          .status(404)
          .send("Post was not there ,It does not exist or Already Deleted");
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};

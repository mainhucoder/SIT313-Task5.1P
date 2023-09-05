 import React from 'react';

function ArticleForm() {
  return (
    <div className="post-form">
      <h2>Create an Article</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter a descriptive title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="abstract">Abstract</label>
          <textarea id="abstract" name="abstract" rows="3" placeholder="Write an abstract..."></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="articleText">Article Text</label>
          <textarea
            id="articleText"
            name="articleText"
            rows="6"
            placeholder="Write your article here..."
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input type="text" id="tags" name="tags" />
        </div>
        <button type="submit">Post Article</button>
      </form>
    </div>
  );
}

export default ArticleForm;
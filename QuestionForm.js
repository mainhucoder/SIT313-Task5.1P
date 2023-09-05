 import React from 'react';

function QuestionForm() {
  return (
    <div className="post-form">
      <h2>Ask a Question</h2>
      <form>
        <div className="form-group">
          <label htmlFor="questionTitle">Title</label>
          <input
            type="text"
            id="questionTitle"
            name="questionTitle"
            placeholder="Enter a descriptive title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="problemDescription">Describe Your Problem</label>
          <textarea
            id="problemDescription"
            name="problemDescription"
            rows="6"
            placeholder="Describe your problem here..."
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="questionTags">Tags</label>
          <input type="text" id="questionTags" name="questionTags" />
        </div>
        <button type="submit">Post Question</button>
      </form>
    </div>
  );
}

export default QuestionForm;
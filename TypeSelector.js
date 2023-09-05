import React from 'react';

function TypeSelector({ selectedPostType, handlePostTypeChange }) {
  return (
    <div className="post-type-selector">
      <div className="post-type-button">
        <button
          className={`post-type-button-question ${selectedPostType === 'question' ? 'active' : ''}`}
          onClick={() => handlePostTypeChange('question')}
        >
          Question
        </button>
      </div>
      <div className="post-type-button">
        <button
          className={`post-type-button-article ${selectedPostType === 'article' ? 'active' : ''}`}
          onClick={() => handlePostTypeChange('article')}
        >
          Article
        </button>
      </div>
    </div>
  );
}

export default TypeSelector;
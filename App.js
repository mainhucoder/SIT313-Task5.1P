import React, { useState } from 'react';
import './App.css';
import PostBar from './PostBar';
import TypeSelector from './TypeSelector';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

function App() {
  const [selectedPostType, setSelectedPostType] = useState('question');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>New Post</h1>
      </header>
      <PostBar />
      <TypeSelector
        selectedPostType={selectedPostType}
        handlePostTypeChange={handlePostTypeChange}
      />
      {selectedPostType === 'question' ? (
        <QuestionForm />
      ) : (
        <ArticleForm />
      )}
    </div>
  );
}

export default App;
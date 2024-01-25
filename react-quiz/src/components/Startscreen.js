function Startscreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <h3>{numQuestions} questions to test your mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Lets start
      </button>
    </div>
  );
}

export default Startscreen;

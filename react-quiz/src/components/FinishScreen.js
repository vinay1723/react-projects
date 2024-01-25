function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of{" "}
        <strong>
          {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </strong>
      </p>
      <p className="highscore">
        ( HighScore: <strong>{highscore}</strong> points )
      </p>
    </>
  );
}
export default FinishScreen;

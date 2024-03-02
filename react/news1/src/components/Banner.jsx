import ButtonComponent from "./Button";

function Banner() {
  const styles = {
    heading: {
      fontSize: "100px",
      backgroundColor: "purple",
      color: "white",
    },
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "black" }}>
      <img
        style={{ borderRadius: "20px", border: "10px solid yellow" }}
        src="https://picsum.photos/id/23/1000/300"
        alt="image details"
      />
      <h1 style={styles.heading}>Hello, This is banner component</h1>
      <ButtonComponent />
    </div>
  );
}

export default Banner;

import Button from "./Button";

const ButtonList = () => {
    const buttonLists = ["All", "Games", "Sports", "Cricket", "Defense", "Cooking", "Coding", "Buy Now"]
  return (
    <>
      <div className="flex ml-2">
        {buttonLists.map((item, index) => (
      <Button key={index} name={item} />
        ))}
      </div>
    </>
  );
};

export default ButtonList;

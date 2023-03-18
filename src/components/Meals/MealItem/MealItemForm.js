import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) {
      setIsFormValid(false);
    }

    props.onAddToCart(enteredAmount);
  };

  const amountInputRef = useRef();

  const [isFormValid, setIsFormValid] = useState(true);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isFormValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;

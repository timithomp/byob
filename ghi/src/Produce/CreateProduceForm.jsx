import React from "react";
import { useState, useEffect } from "react";
import { useCreateProduceMutation } from "../store/produceApi";
import { useParams } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// import { Switch } from "@material-tailwind/react";
import Switch from "@mui/material/Switch";

const ProduceForm = () => {
  const { users_id } = useParams();
  const [produce, setProduce] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [expDate, setExpDate] = useState("");
  const [isDecorative, setIsDecorative] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [price, setPrice] = useState("");

  const [createProduce, result] = useCreateProduceMutation();

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleProduceChange = (event) => {
    const value = event.target.value;
    setProduce(value);
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    setQuantity(value);
  };

  const handleWeightChange = (event) => {
    const value = event.target.value;
    setWeight(value);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleImageUrlChange = (event) => {
    const value = event.target.value;
    setImageUrl(value);
  };

  const handleExpDateChange = (event) => {
    const value = event.target.value;
    setExpDate(value);
  };

  const handleIsDecorativeChange = (event) => {
    // const value = event.target.value;
    setIsDecorative(!isDecorative);
  };

  const handleIsAvailableChange = (event) => {
    // const value = event.target.value;
    setIsAvailable(!isAvailable);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  const handleReset = () => {
    setProduce("");
    setQuantity("");
    setWeight("");
    setDescription("");
    setImageUrl("");
    setExpDate("");
    setIsDecorative(false);
    setIsAvailable(false);
    setPrice("");
  };

  useEffect(() => {
    if (result.isSuccess) {
      handleReset();
    }
  }, [result.isSuccess]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    createProduce(
      {
        produce: produce,
        quantity: quantity,
        weight: weight,
        description: description,
        imageUrl: imageUrl,
        expDate: expDate,
        isDecorative: isDecorative,
        isAvailable: isAvailable,
        price: price,
      },
      users_id
    );
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-9 sm:py-215 lg:max-w-20xl lg:px-8">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Create A Produce
            </h1>
            <form onChange={handleSubmit} id="create-produce-form">
              <div>
                <label htmlFor="produce">Produce</label>
                <input
                  value={produce}
                  onChange={handleProduceChange}
                  placeholder="Produce"
                  required
                  type="text"
                  name="produce"
                  id="produce"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label htmlFor="style">Quantity</label>
                <input
                  value={quantity}
                  onChange={handleQuantityChange}
                  placeholder="Picture"
                  required
                  type="text"
                  name="quantity"
                  id="quantity"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label htmlFor="style">Weight</label>
                <input
                  value={weight}
                  onChange={handleWeightChange}
                  placeholder="Weight"
                  required
                  type="text"
                  name="weight"
                  id="weight"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label htmlFor="style">Description</label>
                <input
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Description"
                  required
                  type="text"
                  name="description"
                  id="description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label htmlFor="style">Image Url</label>
                <input
                  value={imageUrl}
                  onChange={handleImageUrlChange}
                  placeholder="imageUrl"
                  required
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label htmlFor="style">Expiration Date</label>
                <input
                  value={expDate}
                  onChange={handleExpDateChange}
                  placeholder="Expiration Date"
                  required
                  type="text"
                  name="expirationDate"
                  id="expirationDate"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label htmlFor="style">Is Decorative</label>
                <div
                  onClick={() => {
                    setIsDecorative(!isDecorative);
                  }}
                >
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="style">Is Available</label>
                <div
                  onClick={() => {
                    setIsAvailable(!isAvailable);
                  }}
                >
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="style">Price</label>
                <input
                  value={price}
                  onChange={handlePriceChange}
                  placeholder="price"
                  required
                  type="text"
                  name="price"
                  id="price"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProduceForm;

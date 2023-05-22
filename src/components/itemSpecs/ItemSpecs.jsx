import React from "react";
import "./ItemSpecs.scss";

const ItemSpecs = ({ itemData }) => {
  const { colors } = itemData;
  const {
    brand,
    productName,
    OS,
    mainCamera,
    selfieCamera,
    battery,
    cardSlot,
    memory,
  } = itemData.specifications[0];

  return (
    <div className="item-specs">
      <div className="item-specs__general">
        <h2>General Specifications!</h2>
        <table>
          <tbody>
            {brand && (
              <tr>
                <td>Brand</td>
                <td>{brand}</td>
              </tr>
            )}

            {productName && (
              <tr>
                <td>Model</td>
                <td>{productName}</td>
              </tr>
            )}

            {OS && (
              <tr>
                <td>Operating System</td>
                <td>{OS}</td>
              </tr>
            )}

            {mainCamera && (
              <tr>
                <td>Main Camera</td>
                <td>{mainCamera}</td>
              </tr>
            )}

            {selfieCamera && (
              <tr>
                <td>Selfie Camera</td>
                <td>{selfieCamera}</td>
              </tr>
            )}

            {battery && (
              <tr>
                <td>Battery</td>
                <td>{battery}</td>
              </tr>
            )}

            {cardSlot && (
              <tr>
                <td>Card Slot</td>
                <td>{cardSlot ? "Yes" : "No"}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {colors && (
        <div className="item-specs__general">
          <h2>Product Specifications!</h2>
          <table>
            <tbody>
              {memory && (
                <tr>
                  <td>Memory</td>
                  <td>
                    {memory.map((item, index) => (
                      <span key={index}>
                        {(index ? ", " : "") +
                          `${item.storage} [${item.RAM} RAM]`}
                      </span>
                    ))}
                  </td>
                </tr>
              )}

              {colors && (
                <tr>
                  <td>Available Colors</td>
                  <td>
                    {colors.map((color, index) => (
                      <span key={index}>
                        {(index ? ", " : "") + `${color}`}
                      </span>
                    ))}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ItemSpecs;

/** here in line 12 i was confused how to generate unique key when
 * there is no unique id passed from json.So you can use as written
 * in line 15 to generate new key. Note item is written so that unique key
 * will be generated when you are using map in another component for example
 * todo.map.Tyo list ma click garda delete hunu parna logic was remove the item that was
 * clicked from the state.But,I couldnot write the logic.
 */

import React from "react";

const Display = (props) => {
  const { items, setItems } = props;
  
  return (
    <div>
      {items.map((item, index) => {
        return (
          <li key={`item${index}`}>
            {item.title}
            <i onClick={() => setItems(items.filter(Item=>Item.id!==item.id))} className="fas fa-check-circle"></i>
          </li>
        );
      })}
    </div>
  );
};
export default Display;

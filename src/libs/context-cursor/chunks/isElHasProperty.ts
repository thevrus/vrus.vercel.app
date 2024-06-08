import propNames from "../propNames";

const isElHasProperty = (el: HTMLElement, property: string) => {
  const attribute = el.getAttribute(propNames?.dataAttr);
  if (attribute && attribute.includes(property)) {
    return true;
  } else {
    return false;
  }
};

export default isElHasProperty;

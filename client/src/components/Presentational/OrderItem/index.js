import React from 'react';
import PropTypes from 'prop-types';

import * as s from './styles';

export default function OrderItem(props) {
  const { ItemButton, itemAction, item, checked } = props;
  return (
    <s.Items>
      <ItemButton action={itemAction} item={item} checked={checked} />
      <s.Info>
        <s.Name>{item.name}</s.Name>
        <s.Price>{item.price}</s.Price>
      </s.Info>
    </s.Items>
  );
}

OrderItem.propTypes = {
  checked: PropTypes.bool,
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number
  }), // TODO: define shape later
  itemAction: PropTypes.func,
  ItemButton: PropTypes.func,
};

OrderItem.defaultProps = {
  checked: false,
  item: {
    name: 'defaultitem',
    price: '555.00'
  },
  itemAction: () => {},
  ItemButton: () => <div />,
};

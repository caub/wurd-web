import React from 'react';
import PropTypes from 'proptypes';
import wurd from '../../wurd';


const WurdImage = (props) => {
  let {id} = props;

  let url = wurd.get(id);

  return (
    <img {...props} data-wurd-img={id} src={url} />
  );
};


export default WurdImage;

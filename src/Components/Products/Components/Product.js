import React from 'react';

import './Product.scss';

export default function Product({Product}) {
	return (
		<div>{Product.title}</div>
	);
}

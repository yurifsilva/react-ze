import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import './Product.scss';

export default function Product({Product}) {
	const ProductImage = Product.images && Product.images.length > 0 ? Product.images[0].url : null;
	const ProductVariants = Product.productVariants && Product.productVariants.length > 0 ? Product.productVariants[0] : {price: 'Indisponível'};
	
	const [Add, setAdd] = useState(true)

	const handleChangeAddStatus = () => {
		setAdd(!Add);
	}

	return (
		<div className="product">
			<img src={ProductImage} onError={(e)=>{e.target.onerror = null; e.target.src="http://www.solaway.com.br/image/no_image.png"}} alt={Product.title} />
			<p className="title">{Product.title}</p>
			<span className="price">R${ProductVariants.price}</span>
			{Add ? <Button onClick={()=> handleChangeAddStatus()} className="button">Adicionar</Button> : <Button onClick={()=> handleChangeAddStatus()} className="button">Remover</Button>}
		</div>
	);
}

import React from 'react';

import './Category.scss';

export default function Category({Category}) {
	const Image = {
		Cervejas: 'https://courier-images-prod.imgix.net/category/beer%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png',
		Destilados: 'https://courier-images-prod.imgix.net/category/distilled%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png',
		Vinhos: 'https://courier-images-prod.imgix.net/category/wine%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png',
		'Sem álcool': 'https://courier-images-prod.imgix.net/category/juice%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png',
		Petiscos: 'https://courier-images-prod.imgix.net/category/chips%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png',
		Outros: 'https://courier-images-prod.imgix.net/category/others%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png',
		Limpar: 'https://www.freeiconspng.com/uploads/close-button-png-27.png'
	}
	return (
	<div className="category">
		<img className="image" src={Image[Category.title]} alt={Category.title}/>
		{Category.title}
	</div>
	);
}

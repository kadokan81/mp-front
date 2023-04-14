export const pathPublic: { [k: string]: string } = {
	home: '/',
	productDetails: '/product/:idOrSlug',
};
export const pathPrivate: { [k: string]: string } = {
	accountSetting: '/account-settings',
};
export const paths: { [k: string]: string } = Object.assign(
	{},
	pathPublic,
	pathPrivate
);

export const checkPathMatch = (
	pathname: string,
	paths: { [k: string]: string }
): boolean => {
	let isMatch = false;

	const allPaths = Object.keys(paths).map((k) => paths[k]); //[account-settings]
	const pathFirstSection = pathname.split('/')[1];

	allPaths.forEach((p) => {
		if (p.slice(1) === pathFirstSection) {
			isMatch = true;
		}
	});

	return isMatch;
};

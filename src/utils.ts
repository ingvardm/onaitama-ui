type classNameComposerInput = string | false

export function composeClassName(classNames: classNameComposerInput[]): string{
	return classNames.reduce((acc: string, c: classNameComposerInput) => {
		if(c) acc = `${acc} ${c}`
		return  acc
	}, '')
}

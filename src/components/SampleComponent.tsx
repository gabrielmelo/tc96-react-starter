interface SampleComponentProps {
	text: string
}

export function SampleComponent({ text }: SampleComponentProps) {
	return <h1 className="text-gray-100">{text}</h1>
}

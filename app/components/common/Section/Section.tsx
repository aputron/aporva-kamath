import Heading from 'app/components/basics/Heading';
import Stack from 'app/components/basics/Stack';
import type { ReactNode } from 'react';

type SectionProps = {
	title: string;
	children?: ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
	return (
		<Stack.V as="section" css={{ gap: '$4' }}>
			<Heading size="lg" as="h2" css={{ paddingInline: '$4' }}>
				{title}
			</Heading>
			{children}
		</Stack.V>
	);
};

export default Section;
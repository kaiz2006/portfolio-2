'use client';

import { Code, CodeBlock, CodeHeader } from '@/components/animate-ui/AnimatedCode';
import ReactIcon from '@/components/icons/ReactIcon';

interface CodeDemoProps {
    duration?: number;
    delay?: number;
    writing?: boolean;
    cursor?: boolean;
}

export const CodeDemo = ({
    duration = 4,
    delay = 0.5,
    writing = true,
    cursor = true,
}: CodeDemoProps) => {
    return (
        <Code
            key={`${duration}-${delay}-${writing}-${cursor}`}
            className="w-full max-w-[420px] h-auto"
            code={`'use client';
 
import * as React from 'react';
  
type MyComponentProps = {
  myProps: string;
} & React.ComponentProps<'div'>;
  
function MyComponent(props: MyComponentProps) {
  return (
    <div {...props}>
      <p>My Component</p>
    </div>
  );
}

export { MyComponent, type MyComponentProps };`}
        >
            <CodeHeader icon={ReactIcon} copyButton>
                my-component.tsx
            </CodeHeader>

            <CodeBlock
                cursor={cursor}
                lang="tsx"
                writing={writing}
                duration={duration}
                delay={delay}
            />
        </Code>
    );
};

export default CodeDemo;

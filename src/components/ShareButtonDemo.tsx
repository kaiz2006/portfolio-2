'use client';

import {
    ShareButton,
    type ShareButtonProps,
} from '@/components/animate-ui/components/community/share-button';

type ShareButtonDemoProps = {
    size?: ShareButtonProps['size'];
    icon?: ShareButtonProps['icon'];
};

export const ShareButtonDemo = ({ size = 'md', icon }: ShareButtonDemoProps) => {
    return (
        <ShareButton
            size={size}
            icon={icon}
            title="Check out my portfolio!"
            text="Take a look at my projects and skills"
        >
            Share
        </ShareButton>
    );
};

export default ShareButtonDemo;

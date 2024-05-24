

import { h, render } from 'preact';

type Setting = {
    type: string;
    label: string;
    default: boolean | string;
};

type Block = {

};

type SectionProps = {
    settings: Setting[];
    blocks: Block[];
};

const TabsSection = ({ settings, blocks }: SectionProps) => {
    return (<div className="tabs-section">
            {/* Render your tabs using settings and blocks */}
        </div>
    );
};

const initTabsSection = () => {
    const rootElement = document.querySelector('.tabs-section');
    if (rootElement) {
        const settings = JSON.parse(rootElement.getAttribute('data-settings') || '[]');
        const blocks = JSON.parse(rootElement.getAttribute('data-blocks') || '[]');

        render(<TabsSection settings={settings} blocks={blocks} />, rootElement);
    }
};

document.addEventListener('DOMContentLoaded', initTabsSection);

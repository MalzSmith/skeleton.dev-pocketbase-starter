import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './theme';

const config = {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve(
            '@skeletonlabs/skeleton'),
            '../**/*.{html,js,svelte,ts}'
        )
    ],
    theme: {
        extend: {},
    },
    plugins: [
        typography,
        forms,
        skeleton({
            themes: {
                custom: [myCustomTheme]
            }
        })
    ]
} satisfies Config;

export default config;
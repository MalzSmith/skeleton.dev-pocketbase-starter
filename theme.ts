
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "16px",
		"--theme-rounded-container": "16px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #3ded7a 
		"--color-primary-50": "226 252 235", // #e2fceb
		"--color-primary-100": "216 251 228", // #d8fbe4
		"--color-primary-200": "207 251 222", // #cffbde
		"--color-primary-300": "177 248 202", // #b1f8ca
		"--color-primary-400": "119 242 162", // #77f2a2
		"--color-primary-500": "61 237 122", // #3ded7a
		"--color-primary-600": "55 213 110", // #37d56e
		"--color-primary-700": "46 178 92", // #2eb25c
		"--color-primary-800": "37 142 73", // #258e49
		"--color-primary-900": "30 116 60", // #1e743c
		// secondary | #56e0d7 
		"--color-secondary-50": "230 250 249", // #e6faf9
		"--color-secondary-100": "221 249 247", // #ddf9f7
		"--color-secondary-200": "213 247 245", // #d5f7f5
		"--color-secondary-300": "187 243 239", // #bbf3ef
		"--color-secondary-400": "137 233 227", // #89e9e3
		"--color-secondary-500": "86 224 215", // #56e0d7
		"--color-secondary-600": "77 202 194", // #4dcac2
		"--color-secondary-700": "65 168 161", // #41a8a1
		"--color-secondary-800": "52 134 129", // #348681
		"--color-secondary-900": "42 110 105", // #2a6e69
		// tertiary | #7d027b 
		"--color-tertiary-50": "236 217 235", // #ecd9eb
		"--color-tertiary-100": "229 204 229", // #e5cce5
		"--color-tertiary-200": "223 192 222", // #dfc0de
		"--color-tertiary-300": "203 154 202", // #cb9aca
		"--color-tertiary-400": "164 78 163", // #a44ea3
		"--color-tertiary-500": "125 2 123", // #7d027b
		"--color-tertiary-600": "113 2 111", // #71026f
		"--color-tertiary-700": "94 2 92", // #5e025c
		"--color-tertiary-800": "75 1 74", // #4b014a
		"--color-tertiary-900": "61 1 60", // #3d013c
		// success | #59ef27 
		"--color-success-50": "230 253 223", // #e6fddf
		"--color-success-100": "222 252 212", // #defcd4
		"--color-success-200": "214 251 201", // #d6fbc9
		"--color-success-300": "189 249 169", // #bdf9a9
		"--color-success-400": "139 244 104", // #8bf468
		"--color-success-500": "89 239 39", // #59ef27
		"--color-success-600": "80 215 35", // #50d723
		"--color-success-700": "67 179 29", // #43b31d
		"--color-success-800": "53 143 23", // #358f17
		"--color-success-900": "44 117 19", // #2c7513
		// warning | #d6af18 
		"--color-warning-50": "249 243 220", // #f9f3dc
		"--color-warning-100": "247 239 209", // #f7efd1
		"--color-warning-200": "245 235 197", // #f5ebc5
		"--color-warning-300": "239 223 163", // #efdfa3
		"--color-warning-400": "226 199 93", // #e2c75d
		"--color-warning-500": "214 175 24", // #d6af18
		"--color-warning-600": "193 158 22", // #c19e16
		"--color-warning-700": "161 131 18", // #a18312
		"--color-warning-800": "128 105 14", // #80690e
		"--color-warning-900": "105 86 12", // #69560c
		// error | #da1332 
		"--color-error-50": "249 220 224", // #f9dce0
		"--color-error-100": "248 208 214", // #f8d0d6
		"--color-error-200": "246 196 204", // #f6c4cc
		"--color-error-300": "240 161 173", // #f0a1ad
		"--color-error-400": "229 90 112", // #e55a70
		"--color-error-500": "218 19 50", // #da1332
		"--color-error-600": "196 17 45", // #c4112d
		"--color-error-700": "164 14 38", // #a40e26
		"--color-error-800": "131 11 30", // #830b1e
		"--color-error-900": "107 9 25", // #6b0919
		// surface | #314763 
		"--color-surface-50": "224 227 232", // #e0e3e8
		"--color-surface-100": "214 218 224", // #d6dae0
		"--color-surface-200": "204 209 216", // #ccd1d8
		"--color-surface-300": "173 181 193", // #adb5c1
		"--color-surface-400": "111 126 146", // #6f7e92
		"--color-surface-500": "49 71 99", // #314763
		"--color-surface-600": "44 64 89", // #2c4059
		"--color-surface-700": "37 53 74", // #25354a
		"--color-surface-800": "29 43 59", // #1d2b3b
		"--color-surface-900": "24 35 49", // #182331
		
	}
}
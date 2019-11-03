
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export default [
    // browser-friendly UMD build
    {
        input: "./ninja-ui.ts",
        output: {
            name: "ninja-ui",
            file: pkg.browser,
            format: 'umd'
        },
        plugins: [
            resolve(),
            babel({
                exclude: 'node_modules/**',
                plugins: ['external-helpers'],
                externalHelpers: true
            }),
            commonjs(),
            postcss({
                plugins: [autoprefixer()],
                inject: false, // By default postcss also injects the
                // styles in <head> which is pretty useless
                // with LitElement's style encapsulation
            }),
            typescript(),
        ]
    },
    {
        input: './ninja-ui.ts',
        external: ['moment'],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ],
        plugins: [
            typescript(),
        ]
    }
];

import type { LoaderContext } from 'webpack';
import type { TemplateCompiler, CompilerOptions, SFCTemplateCompileOptions, SFCScriptCompileOptions, SFCDescriptor } from 'vue/compiler-sfc';
import VueLoaderPlugin from './plugin';
export { VueLoaderPlugin };
export interface VueLoaderOptions {
    babelParserPlugins?: SFCScriptCompileOptions['babelParserPlugins'];
    transformAssetUrls?: SFCTemplateCompileOptions['transformAssetUrls'];
    compiler?: TemplateCompiler | string;
    compilerOptions?: CompilerOptions;
    /**
     * TODO remove in 3.4
     * @deprecated
     */
    reactivityTransform?: boolean;
    /**
     * @experimental
     */
    propsDestructure?: boolean;
    /**
     * @experimental
     */
    defineModel?: boolean;
    customElement?: boolean | RegExp;
    hotReload?: boolean;
    exposeFilename?: boolean;
    appendExtension?: boolean;
    enableTsInTemplate?: boolean;
    experimentalInlineMatchResource?: boolean;
    isServerBuild?: boolean;
    /**
     * Function to transform the descriptor after it's created by the compiler.
     * This allows modifying the descriptor before it's processed by the loader.
     */
    transformDescriptor?: (descriptor: SFCDescriptor) => SFCDescriptor;
}
export default function loader(this: LoaderContext<VueLoaderOptions>, source: string): string | void;

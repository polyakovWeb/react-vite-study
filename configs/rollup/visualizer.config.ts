import visualizer, { type VisualizerPlugin } from "rollup-plugin-visualizer";

export function buildVisualizerPlugin(): VisualizerPlugin {
    return visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true,
        template: "treemap",
        filename: "rollup-bundle-visualizer.html"
    })
}
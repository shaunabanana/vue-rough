import type { Config } from 'roughjs/bin/core';
import type { App, DefineComponent } from 'vue';

export type RoughConfig = Config;
export type RoughPoint = [number, number];

export interface RoughOptions {
    roughness?: number;
    bowing?: number;
    seed?: number;
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    fillStyle?: string;
    fillWeight?: number;
    hachureAngle?: number;
    hachureGap?: number;
    curveStepCount?: number;
    curveFitting?: number;
    strokeLineDash?: number[];
    strokeLineDashOffset?: number;
    fillLineDash?: number[];
    fillLineDashOffset?: number;
    disableMultiStroke?: boolean;
    disableMultiStrokeFill?: boolean;
    simplification?: number;
    dashOffset?: number;
    dashGap?: number;
    zigzagOffset?: number;
}

export interface RoughContainerProps {
    width?: string;
    height?: string;
    config?: RoughConfig;
}

export type RoughLineProps = RoughOptions & {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};

export type RoughRectangleProps = RoughLineProps;

export type RoughEllipseProps = RoughOptions & {
    x: number;
    y: number;
    width: number;
    height: number;
};

export type RoughCircleProps = RoughOptions & {
    x: number;
    y: number;
    diameter: number;
};

export type RoughLinearPathProps = RoughOptions & {
    points: RoughPoint[];
};

export type RoughPolygonProps = RoughOptions & {
    vertices: RoughPoint[];
};

export type RoughArcProps = RoughOptions & {
    x: number;
    y: number;
    width: number;
    height: number;
    start: number;
    stop: number;
    closed: boolean;
};

export type RoughCurveProps = RoughOptions & {
    points: RoughPoint[] | RoughPoint[][];
};

export type RoughPathProps = RoughOptions & {
    d: string;
};

export const RoughCanvas: DefineComponent<RoughContainerProps>;
export const RoughSvg: DefineComponent<RoughContainerProps>;
export const RoughLine: DefineComponent<RoughLineProps>;
export const RoughRectangle: DefineComponent<RoughRectangleProps>;
export const RoughEllipse: DefineComponent<RoughEllipseProps>;
export const RoughCircle: DefineComponent<RoughCircleProps>;
export const RoughLinearPath: DefineComponent<RoughLinearPathProps>;
export const RoughPolygon: DefineComponent<RoughPolygonProps>;
export const RoughArc: DefineComponent<RoughArcProps>;
export const RoughCurve: DefineComponent<RoughCurveProps>;
export const RoughPath: DefineComponent<RoughPathProps>;

export declare function install(app: App): void;

export default install;

declare module 'vue' {
    export interface GlobalComponents {
        RoughCanvas: typeof RoughCanvas;
        RoughSvg: typeof RoughSvg;
        RoughLine: typeof RoughLine;
        RoughRectangle: typeof RoughRectangle;
        RoughEllipse: typeof RoughEllipse;
        RoughCircle: typeof RoughCircle;
        RoughLinearPath: typeof RoughLinearPath;
        RoughPolygon: typeof RoughPolygon;
        RoughArc: typeof RoughArc;
        RoughCurve: typeof RoughCurve;
        RoughPath: typeof RoughPath;
    }
}

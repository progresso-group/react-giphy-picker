import * as React from "react";

interface SizeInfo {
    width: number;
    height: number;
}

interface GifInfo extends SizeInfo {
    size: number;
    url: string;
}

interface Mp4Info extends SizeInfo {
    mp4: string;
    mp4_size: number;
}

interface WebPInfo extends SizeInfo {
    webp: string;
    webp_size: number;
}

export interface Gif {
    '480w_still': GifInfo;
    downsized: GifInfo;
    downsized_large: GifInfo;
    downsized_medium: GifInfo;
    downsized_small: Mp4Info;
    downsized_still: GifInfo;
    fixed_height: GifInfo & Mp4Info & WebPInfo;
    fixed_height_downsampled: GifInfo & WebPInfo;
    fixed_height_small: GifInfo & Mp4Info & WebPInfo;
    fixed_height_small_still: GifInfo;

    fixed_width: GifInfo & Mp4Info & WebPInfo;
    fixed_width_downsamped: GifInfo & WebPInfo;
    fixed_width_small: GifInfo & Mp4Info & WebPInfo;
    fixed_width_small_still: GifInfo;
    fixed_width_still: GifInfo;

    looping: Mp4Info;
    original: GifInfo & Mp4Info & WebPInfo & {
        frames: number;
        hash: string;
    };
    original_mp4: Mp4Info;
    original_still: GifInfo;
    
    preview: Mp4Info;
    preview_gif: GifInfo;
    preview_webp: WebPInfo;
}

interface PickerProps {
    apiKey: string;
    onSelected: (gif: Gif) => void;
    visible: boolean;
    modal: boolean;
    style?: React.CSSProperties;
    searchBoxStyle?: React.CSSProperties;
    gifStyle?: React.CSSProperties;
    placeholderText?: string;
}

declare class Picker extends React.Component<PickerProps> {
}

export default Picker;
import { ImageResponse } from 'next/og'
 
export const contentType = 'image/png';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const runtime = 'edge';
 
function Icon() {
    const styles = {
        fontSize: 14,
        background: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    };

    return new ImageResponse(<div style={styles}>SW</div>, { ...size });
}

export default Icon;
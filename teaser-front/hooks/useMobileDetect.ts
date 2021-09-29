import { useEffect, useState } from 'react';

const useMobileDetect = (): boolean => {
    const [width, setWidth] = useState<number>(768);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        if (process.browser) {
            setWidth(window.innerWidth);
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            };
        }
    }, []);

    return width <= 768;
};

export default useMobileDetect;

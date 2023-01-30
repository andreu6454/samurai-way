import { ReactNode, Suspense } from 'react';
import PreLoader from "../Components/PreLoader/PreLoader";

export const withSuspense = (component: ReactNode) => {
    return <Suspense fallback={<PreLoader/>}>{component}</Suspense>;
};
import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO pricing',
 description: 'SEO descripcion pracing',
 keywords: ['Test', 'Page contact', 'metadas']
};
export default function PricingPage () {
    return (
        <>
            <span className="text-7xl">Pricing</span>
        </>
    )
}
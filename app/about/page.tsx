import { Metadata } from "next";

export const metadata :  Metadata = {
 title: 'SEO Title',
 description: 'SEO description',
 keywords: ['About page', 'arcodev', 'curso  next']
};
export default function AboutPage () {
    return (
        <>
            <span>about</span>
        </>
    )
}
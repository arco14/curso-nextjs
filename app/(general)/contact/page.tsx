import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Contact',
 description: 'SEO descripcion contatco',
 keywords: ['Test', 'Page contact', 'metadas']
};

export default function ContactPage () {
    return (
        <>
            <span className="text-7xl">Contact</span>
        </>
    )
}
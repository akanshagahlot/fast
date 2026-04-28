import BlogHeader from "../../components/Blogheader";

import BlogCards from "../../components/Blogcards";


export const metadata = {
  title: "Blog | Nex Go Packers & Movers",
  description: "Moving tips, packing guides aur relocation advice padhiye Nex Go ke blog par.",
};

export default function BlogPage() {
  return (
    <main>
        
      <BlogHeader />
      <BlogCards />
    
    </main>
  );
}
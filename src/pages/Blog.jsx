import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import fm from "front-matter";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // 1. Dynamically import all .md files from the ../posts folder
    // Using query: "?raw" ensures we get the raw string content of the file
    // import: "default" ensures we get the default export (the string)
    const modules = import.meta.glob("/src/posts/*.md", { query: "?raw", import: "default", eager: true });
    
    console.log("Blog modules found:", modules); // Check console to see if files are found
    
    const parsedPosts = Object.entries(modules).map(([path, content]) => {
      try {
        // 2. Parse the "Front Matter" (metadata) and the body
        // Handle potential default export mismatch (common with some bundlers)
        const parse = fm.default || fm;
        const { attributes, body } = parse(content);
        return {
          id: path,
          ...attributes, // Contains title, date, category, excerpt
          body: body
        };
      } catch (e) {
        console.error("Error parsing markdown file:", path, e);
        return null;
      }
    }).filter(post => post !== null);

    // 3. Sort by date (newest first)
    parsedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    setPosts(parsedPosts);
  }, []);

  // If a post is selected, show the full article view
  if (selectedPost) {
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
        <button 
          onClick={() => setSelectedPost(null)}
          style={{ 
            background: "none", 
            border: "none", 
            color: "var(--accent)", 
            cursor: "pointer", 
            marginBottom: "20px",
            fontSize: "1rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          ← BACK TO BLOG
        </button>
        
        <article>
          <div style={{ marginBottom: "20px", color: "var(--text-muted)" }}>
            {selectedPost.date} • <span style={{ color: "var(--accent)" }}>{selectedPost.category}</span>
          </div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", lineHeight: "1.2" }}>{selectedPost.title}</h1>
          
          {/* Render the Markdown content */}
          <div style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "1.1rem" }}>
            <ReactMarkdown
              components={{
                // Custom styling for markdown elements to match your theme
                h1: ({node, ...props}) => <h1 style={{color: 'white', marginTop: '40px', marginBottom: '20px'}} {...props} />,
                h2: ({node, ...props}) => <h2 style={{color: 'white', marginTop: '40px', marginBottom: '20px'}} {...props} />,
                h3: ({node, ...props}) => <h3 style={{color: 'white', marginTop: '30px', marginBottom: '15px'}} {...props} />,
                p: ({node, ...props}) => <p style={{marginBottom: '20px'}} {...props} />,
                ul: ({node, ...props}) => <ul style={{marginBottom: '20px', paddingLeft: '20px'}} {...props} />,
                li: ({node, ...props}) => <li style={{marginBottom: '10px'}} {...props} />,
                img: ({node, ...props}) => <img style={{maxWidth: '100%', borderRadius: '10px', margin: '20px 0'}} {...props} />,
                strong: ({node, ...props}) => <strong style={{color: 'white'}} {...props} />,
              }}
            >
              {selectedPost.body}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ borderBottom: "2px solid var(--accent)", display: "inline-block", paddingBottom: "10px", marginBottom: "40px" }}>
        Blog
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {posts.length === 0 && (
            <div style={{color: "var(--text-muted)", textAlign: "center", padding: "20px"}}>
                <p>No posts found.</p>
                <p style={{fontSize: "0.8rem", marginTop: "10px"}}>Looking for files in <code>src/posts/*.md</code></p>
            </div>
        )}
        
        {posts.map((post) => (
          <div key={post.id} style={{ 
            background: "var(--bg-card)", 
            padding: "30px", 
            borderRadius: "15px", 
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", flexWrap: "wrap", gap: "10px" }}>
              <span style={{ 
                background: "rgba(56, 189, 248, 0.1)", 
                color: "var(--accent)", 
                padding: "5px 10px", 
                borderRadius: "5px", 
                fontSize: "0.8rem", 
                fontWeight: "bold",
                textTransform: "uppercase" 
              }}>
                {post.category || "General"}
              </span>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                {post.date}
              </span>
            </div>
            
            <h3 style={{ fontSize: "1.8rem", marginBottom: "15px", color: "white" }}>
              {post.title || "Untitled"}=
            </h3>
            
            <p style={{ color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "20px", fontSize: "1.05rem" }}>
              {post.excerpt}
            </p>
            
            <button 
              onClick={() => setSelectedPost(post)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "var(--accent)", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "1rem" }}
            >
              READ ARTICLE <span>→</span>
            </button>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: "60px", textAlign: "center", color: "var(--text-muted)" }}>
      </div>
    </div>
  );
}

export default Blog;
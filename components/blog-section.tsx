"use client"

import Image from "next/image"
import Link from "next/link"
import posthog from "posthog-js"

const blogPosts = [
  {
    id: 1,
    title: "Building the Future: Agent-to-Agent Marketplaces",
    excerpt:
      "Exploring how autonomous AI agents can collaborate through shared protocols to revolutionize workflow automation.",
    date: "2025-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: 2,
    title: "OCR + NLP: Transforming Document Intelligence",
    excerpt:
      "How combining OCR with modern NLP techniques can process millions of documents with enterprise-grade accuracy.",
    date: "2024-12-20",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 3,
    title: "From $6.7M Revenue Recovery to Scalable AI",
    excerpt:
      "Lessons learned from building AI systems that detect and recover millions in revenue leakage for Fortune 500 companies.",
    date: "2024-11-15",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 4,
    title: "LangGraph vs Traditional Workflows",
    excerpt: "A deep dive into why graph-based AI orchestration is superior for complex multi-agent systems.",
    date: "2024-10-08",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
]

export default function BlogSection() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-header mb-4" style={{ color: "#FFFFE3" }}>
            Thoughts & Insights
          </h2>
          <p className="body-large max-w-2xl" style={{ color: "#B8B8A3" }}>
            Insights on AI architecture, agent systems, and the future of intelligent automation from building
            enterprise solutions across multiple industries.
          </p>
        </div>

        {featuredPost && (
          <div className="mb-16">
            <Link 
              href={`/blog/${featuredPost.id}`} 
              className="group block"
              onClick={() => posthog.capture('blog_post_view', { 
                post_id: featuredPost.id, 
                post_title: featuredPost.title, 
                featured: true 
              })}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-800">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 caption text-secondary">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h3 className="page-title transition-colors" style={{ color: "#FFFFE3" }}>
                    {featuredPost.title}
                  </h3>

                  <p className="body-large">{featuredPost.excerpt}</p>

                  <div
                    className="flex items-center font-mona-sans font-medium group-hover:gap-3 transition-all"
                    style={{ color: "#FFFFE3" }}
                  >
                    Read Article
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div>
          <h3 className="font-mona-sans font-bold text-2xl mb-8" style={{ color: "#FFFFE3" }}>
            Recent Posts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.id}`} 
                className="group block"
                onClick={() => posthog.capture('blog_post_view', { 
                  post_id: post.id, 
                  post_title: post.title, 
                  featured: false 
                })}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-800 mb-4">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-4 caption" style={{ color: "#B8B8A3" }}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="font-mona-sans font-bold text-xl transition-colors" style={{ color: "#FFFFE3" }}>
                    {post.title}
                  </h4>

                  <p className="body-regular" style={{ color: "#B8B8A3" }}>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors magnetic-hover font-mona-sans font-medium text-primary"
            onClick={() => posthog.capture('view_all_posts_click')}
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

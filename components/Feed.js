import Stories from "./Stories";
import Posts from "./Posts";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
      <section className="md:col-span-2">
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>
      <section>
        {/* Mini profile */}
        
        {/* Suggestions  */}
        </section>
    </main>
  );
}

export default Feed;
